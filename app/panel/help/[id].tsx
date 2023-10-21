import { ScrollView, View } from "@gluestack-ui/themed";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useEffect, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { useWindowDimensions } from "react-native";
import RenderHtml from "react-native-render-html";
import {
  agreements,
  type AgreementDetail,
  type AgreementLocaleContent,
  type Agreements,
} from "~static/agreements";

type GlobalParams = {
  id: keyof Agreements;
};

export default function AgreementDetail() {
  const router = useRouter();
  const { width } = useWindowDimensions();
  const { i18n } = useTranslation();
  const glob = useLocalSearchParams<GlobalParams>();
  if (!glob.id) {
    return router.back();
  }
  const agreement: AgreementLocaleContent = agreements[glob.id];
  const details: AgreementDetail = useMemo(() => {
    const locale = i18n.language.length > 2 ? i18n.language.slice(0, 2) : "en";
    if (agreement[locale as "en" | "tr"]) {
      return agreement[locale as "en" | "tr"];
    }
    return agreement.en;
  }, [i18n.language]);

  useEffect(() => {
    router.setParams({
      title: details.title,
    });
  }, [details.title]);

  return (
    <View
      sx={{
        backgroundColor: "$white",
      }}
    >
      <ScrollView contentInsetAdjustmentBehavior="automatic" px="$2">
        <RenderHtml
          contentWidth={width}
          source={{
            html: `<!DOCTYPE html>
          <html>
            <head>
            <style type="text/css">
            body {
              font-family: sans-serif;
              font-size: 16px;
              line-height: 1.5;
              color: #333;
              word-wrap: break-word;
              word-break: break-word;
            }
            </style>
            </head>
            <body>
               ${details.content}
            </body>
          </html>`,
          }}
        ></RenderHtml>
      </ScrollView>
    </View>
  );
}
