import { Stack } from "expo-router";
import React from "react";
import HeaderLeft from "~partials/layout/HeaderLeft";
import HeaderTitle from "~partials/layout/HeaderTitle";

export default function PlaceLayout() {
  return (
    <Stack
      screenOptions={{
        contentStyle: {
          backgroundColor: "$white",
        },
        headerShadowVisible: true,
        headerLeft: (props) => <HeaderLeft {...props} />,
        headerTitle: (props) => <HeaderTitle {...props} />,
        headerRight: () => null,
        presentation: "modal",
        headerTransparent: true,
        headerShown: false,
        animation: "slide_from_right",
        animationDuration: 300,
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen
        name="[slug]"
        options={{
          presentation: "modal",
        }}
      />
    </Stack>
  );
}
