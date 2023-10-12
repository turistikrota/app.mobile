import { Text, View } from "@gluestack-ui/themed";
import React from "react";
import { useTranslation } from "react-i18next";

export default function CreateAccountPage() {
  const { t } = useTranslation("account");
  return (
    <View
      sx={{
        height: "100%",
        backgroundColor: "$white",
      }}
    >
      <Text>Create Account</Text>
    </View>
  );
}
