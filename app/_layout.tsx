import { GluestackUIProvider } from "@gluestack-ui/themed";
import { Slot } from "expo-router";
import { View } from "react-native";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { config } from "../config/gluestack-ui.config";

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
      <GluestackUIProvider config={config}>
        <HomeLayout />
      </GluestackUIProvider>
    </SafeAreaProvider>
  );
}
