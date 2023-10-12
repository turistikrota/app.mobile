import { Text, View } from "@gluestack-ui/themed";
import { Link } from "expo-router";
import React from "react";

export default function PanelPage() {
  return (
    <View
      sx={{
        backgroundColor: "$white",
        h: "$full",
      }}
    >
      <Link href="/panel/auth">
        <Text>Login</Text>
      </Link>
    </View>
  );
}
