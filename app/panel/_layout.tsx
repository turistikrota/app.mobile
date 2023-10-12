import { Stack } from "expo-router";
import React from "react";
import AccountGuard from "~guards/account";
import AuthGuard from "~guards/auth";
import HeaderLeft from "~partials/layout/HeaderLeft";
import HeaderTitle from "~partials/layout/HeaderTitle";

export default function PanelLayout() {
  return (
    <AuthGuard.Optional>
      <AccountGuard.Optional>
        <Stack
          screenOptions={{
            contentStyle: {
              backgroundColor: "$white",
            },
            headerLeft: (props) => <HeaderLeft {...props} />,
            headerTitle: (props) => <HeaderTitle {...props} />,
            headerRight: () => null,
          }}
          initialRouteName="board"
        >
          <Stack.Screen name="board" />
          <Stack.Screen name="auth" />
          <Stack.Screen name="help/index" />
          <Stack.Screen name="help/[id]" />
        </Stack>
      </AccountGuard.Optional>
    </AuthGuard.Optional>
  );
}
