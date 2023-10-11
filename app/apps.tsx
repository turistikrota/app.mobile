import { Text, View } from "@gluestack-ui/themed";
import { StatusBar } from "expo-status-bar";
import React from "react";

export default function AppsPage() {
  return (
    <View
      sx={{
        flex: 1,
        bg: "$white",
      }}
    >
      <Text>Modal</Text>
      <StatusBar style="light" />
    </View>
  );
}
