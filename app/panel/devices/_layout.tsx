import { Stack } from "expo-router";
import React from "react";
import { useTranslation } from "react-i18next";
import AuthGuard from "~guards/auth";
import HeaderLeft from "~partials/layout/HeaderLeft";
import HeaderTitle from "~partials/layout/HeaderTitle";

export default function DevicesLayout() {
  const { t } = useTranslation("devices");

  return (
    <AuthGuard.Required>
      <Stack
        screenOptions={{
          headerLeft: (props) => <HeaderLeft {...props} />,
          headerTitle: (props) => <HeaderTitle {...props} />,
        }}
      >
        <Stack.Screen name="index" options={{ title: t("title") }} />
        <Stack.Screen
          name="[id]"
          options={{
            presentation: "modal",
            title: t("detailTitle"),
          }}
        />
      </Stack>
    </AuthGuard.Required>
  );
}
