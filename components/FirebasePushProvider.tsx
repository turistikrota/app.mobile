import firebase from "@react-native-firebase/app";
import "@react-native-firebase/messaging";
import { FirebaseMessagingTypes } from "@react-native-firebase/messaging";
import React, { useEffect } from "react";
import { Platform } from "react-native";
import PushNotification from "react-native-push-notification";
import { useDispatch } from "react-redux";
import { setFcmToken } from "~store/auth.store";

const FirebasePushProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const dispatch = useDispatch();

  const getToken = () => {
    firebase
      .messaging()
      .getToken({
        appName: firebase.app().name,
        senderId: firebase.app().options.messagingSenderId,
      })
      .then((token: string) => {
        dispatch(setFcmToken(token));
      })
      .catch((e) => {});
  };
  const requestPermissions = () => {
    firebase
      .messaging()
      .requestPermission()
      .then((status: FirebaseMessagingTypes.AuthorizationStatus) => {
        if (status === 1) {
          onMessage();
        } else {
        }
      })
      .catch((e) => {});
  };

  /*
   {"notification":
   {"android":{},
   "body":"Bu mesajı görüyorsan işler yolundadır",
   "title":"Deneme Mesajı"},"sentTime":1697366490611,"data":{},"from":"824579019696","messageId":"0:1697366490618046%b59c3525b59c3525","ttl":2419200,"collapseKey":"com.turistikrota.app"}
  */
  const onMessage = () => {
    firebase
      .messaging()
      .onMessage((response: FirebaseMessagingTypes.RemoteMessage) => {
        showNotification(response.notification!);
      });
    firebase
      .messaging()
      .setBackgroundMessageHandler(
        async (res: FirebaseMessagingTypes.RemoteMessage) => {
          showNotification(res.notification!);
        }
      );
  };
  const showNotification = (
    notification: FirebaseMessagingTypes.Notification
  ) => {
    PushNotification.localNotification({
      title: notification.title,
      message: notification.body!,
      channelId: "turistikrota",
    });
  };

  useEffect(() => {
    getToken();
    if (Platform.OS === "ios") {
      requestPermissions();
    } else {
      onMessage();
    }
  }, []);

  return <>{children}</>;
};

export default FirebasePushProvider;
