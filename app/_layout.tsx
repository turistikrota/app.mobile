import { GluestackUIProvider } from "@gluestack-ui/themed";
import { Slot } from "expo-router";
import React from "react";
import { View } from "react-native";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { Provider } from "react-redux";
import { config } from "~config/gluestack-ui.config";
import "~localization/i18n";
import { store } from "~store";

function HomeLayout() {
  const insets = useSafeAreaInsets();
  return (
    <View style={{ flex: 1, paddingTop: insets.top }}>
      <Slot />
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
