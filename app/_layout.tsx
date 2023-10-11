import { GluestackUIProvider } from "@gluestack-ui/themed";
import { Stack } from "expo-router";
import React from "react";
import { View } from "react-native";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { Provider } from "react-redux";
import { config } from "~config/gluestack-ui.config";
import "~localization/i18n";
import HeaderLeft from "~partials/layout/HeaderLeft";
import HeaderRight from "~partials/layout/HeaderRight";
import HeaderTitle from "~partials/layout/HeaderTitle";
import { store } from "~store";

function HomeLayout() {
  const insets = useSafeAreaInsets();
  return (
    <View style={{ flex: 1, paddingTop: insets.top }}>
      <Stack
        screenOptions={{
          contentStyle: {
            backgroundColor: "$white",
          },
          headerLeft: (props) => <HeaderLeft {...props} />,
          headerTitle: (props) => <HeaderTitle {...props} />,
          headerRight: (props) => <HeaderRight {...props} />,
        }}
      >
        <Stack.Screen name="apps" />
        <Stack.Screen name="auth" />
        <Stack.Screen name="agreement/[id]" />
        <Stack.Screen name="index" />
        <Stack.Screen name="account/index" />
      </Stack>
    </View>
  );
}

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <GluestackUIProvider config={config}>
          <HomeLayout />
        </GluestackUIProvider>
      </Provider>
    </SafeAreaProvider>
  );
}
