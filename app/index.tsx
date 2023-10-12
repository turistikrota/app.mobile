import { Box, Text } from "@gluestack-ui/themed";
import { Link, useLocalSearchParams } from "expo-router";
import React from "react";
import { useTranslation } from "react-i18next";

export default function App() {
  const { t } = useTranslation("common");
  const params = useLocalSearchParams();
  return (
    <Box>
      <Link href="/auth">{t("auth")}</Link>
      <Link href="/agreement/termsOfUse">{t("termsOfUse")}</Link>
      <Link href="/home/messages">Navigate to nested route</Link>
      <Text>{JSON.stringify(params)}</Text>
    </Box>
  );
}
