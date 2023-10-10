import { GluestackUIProvider } from "@gluestack-ui/themed";
import { useFonts } from "expo-font";
import { Slot } from "expo-router";
import React from "react";
import { View } from "react-native";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { config } from "../config/gluestack-ui.config";
import "../localization/i18n";

function HomeLayout() {
  const insets = useSafeAreaInsets();
  return (
    <View style={{ flex: 1, paddingTop: insets.top }}>
      <Slot />
    </View>
  );
}

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    boxicons: require("../assets/icon/boxicons.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <SafeAreaProvider>
      <GluestackUIProvider config={config}>
        <HomeLayout />
      </GluestackUIProvider>
    </SafeAreaProvider>
  );
}
