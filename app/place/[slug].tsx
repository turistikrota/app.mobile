import { Text, View } from "@gluestack-ui/themed";
import React from "react";

type Params = {
  slug?: string;
};

export default function PlaceDetailPage() {
  return (
    <View
      sx={{
        height: "100%",
        bg: "$white",
      }}
    >
      <Text>Place detail view</Text>
    </View>
  );
}
