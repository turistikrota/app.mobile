import { View } from "@gluestack-ui/themed";
import { Stack } from "expo-router";
import React from "react";
import { useTranslation } from "react-i18next";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import AccountGuard from "~guards/account";
import AuthGuard from "~guards/auth";
import HeaderLeft from "~partials/layout/HeaderLeft";
import HeaderTitle from "~partials/layout/HeaderTitle";

export default function AccountLayout() {
  const insets = useSafeAreaInsets();
  const { t } = useTranslation("account");

  return (
    <View
      sx={{
        flex: 1,
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        bg: "$white",
      }}
    >
      <AuthGuard.Required>
        <AccountGuard.Optional>
          <Stack
            initialRouteName="select"
            screenOptions={{
              headerLeft: (props) => <HeaderLeft {...props} />,
              headerTitle: (props) => <HeaderTitle {...props} />,
            }}
          >
            <Stack.Screen
              name="edit"
              options={{
                title: t("edit.title"),
              }}
            />
            <Stack.Screen
              name="create"
              options={{
                title: t("create.title"),
              }}
            />
            <Stack.Screen
              name="select"
              options={{
                title: t("select.title"),
              }}
            />
          </Stack>
        </AccountGuard.Optional>
      </AuthGuard.Required>
    </View>
  );
}
