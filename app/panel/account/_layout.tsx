import { Stack } from "expo-router";
import React from "react";
import { useTranslation } from "react-i18next";
import AccountGuard from "~guards/account";
import AuthGuard from "~guards/auth";
import HeaderLeft from "~partials/layout/HeaderLeft";
import HeaderTitle from "~partials/layout/HeaderTitle";

export default function AccountLayout() {
  const { t } = useTranslation("account");

  return (
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
  );
}
