import { Stack } from "expo-router";
import React from "react";

export default function PanelLayout() {
  return (
    <Stack>
      <Stack.Screen name="auth" />
      <Stack.Screen name="agreement/[id]" />
      <Stack.Screen name="index" />
    </Stack>
  );
}
