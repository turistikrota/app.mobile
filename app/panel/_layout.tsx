import { View } from "@gluestack-ui/themed";
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
        <View
          sx={{
            flex: 1,
            bg: "$white",
          }}
        >
          <Stack
            screenOptions={{
              contentStyle: {
                backgroundColor: "$white",
              },
              headerShadowVisible: true,
              headerLeft: (props) => <HeaderLeft {...props} />,
              headerTitle: (props) => <HeaderTitle {...props} />,
              headerRight: () => null,
            }}
            initialRouteName="board"
          >
            <Stack.Screen name="board" />
            <Stack.Screen name="about" />
            <Stack.Screen name="change-password" />
            <Stack.Screen name="auth" />
            <Stack.Screen
              name="devices"
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="account"
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen name="help/[id]" />
          </Stack>
        </View>
      </AccountGuard.Optional>
    </AuthGuard.Optional>
  );
}
