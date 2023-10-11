import { Box } from "@gluestack-ui/themed";
import { Link } from "expo-router";
import React from "react";
import { useTranslation } from "react-i18next";
import MainHeader from "~partials/layout/MainHeader";

export default function App() {
  const { t } = useTranslation("common");
  return (
    <Box>
      <MainHeader />
      <Link href="/auth">{t("auth")}</Link>
      <Link href="/agreement/termsOfUse">{t("termsOfUse")}</Link>
    </Box>
  );
}
