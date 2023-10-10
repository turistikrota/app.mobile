import { View } from "@gluestack-ui/themed";
import React from "react";
import WebView from "react-native-webview";
import { Config } from "../../config/config";

type Props = {
  onVerify: (token: string) => void;
};

const Turnstile: React.FC<Props> = ({ onVerify }) => {
  const handleMessage = (event: any) => {
    //  Now we can add this token to any request header.
    //  Where backend will verify the token using Cloudflare API.
    const token = event.nativeEvent.data;
    onVerify(token);
  };

  return (
    <View>
      <WebView
        originWhitelist={["*"]}
        onMessage={handleMessage}
        source={{
          baseUrl: `${Config.baseUrl}`,
          html: `
                  <!DOCTYPE html>
                  <html>
                    <head>
                     <script src="https://challenges.cloudflare.com/turnstile/v0/api.js?onload=_turnstileCb" async defer></script>
                    </head>
                    <body>
                       <div id="myWidget"></div>
                       <script>
                          // This function is called when the Turnstile script is loaded and ready to be used.
                          // The function name matches the "onload=..." parameter.
                          function _turnstileCb() {
                              turnstile.render('#myWidget', {
                                sitekey: '${Config.turnstile.siteKey}',
                                callback: (token) => {
                                  // Success callback, which sets the token into a separate store slice.
                                  window.ReactNativeWebView.postMessage(token);
                                },
                              });
  
                          }
                       </script>
                    </body>
                  </html>
              `,
        }}
      />
    </View>
  );
};

export default Turnstile;
