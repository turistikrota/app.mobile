import { View } from "@gluestack-ui/themed";
import { Stack } from "expo-router";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import AccountGuard from "~guards/account";
import AuthGuard from "~guards/auth";
import HeaderLeft from "~partials/layout/HeaderLeft";
import HeaderTitle from "~partials/layout/HeaderTitle";

export default function PanelLayout() {
  const insets = useSafeAreaInsets();
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
              headerLeft: (props) => <HeaderLeft {...props} />,
              headerTitle: (props) => <HeaderTitle {...props} />,
              headerRight: () => null,
            }}
            initialRouteName="board"
          >
            <Stack.Screen name="board" />
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
            <Stack.Screen name="help/index" />
            <Stack.Screen name="help/[id]" />
          </Stack>
        </View>
      </AccountGuard.Optional>
    </AuthGuard.Optional>
  );
}
