import { Box } from "@gluestack-ui/themed";
import { Link } from "expo-router";
import { useTranslation } from "react-i18next";

export default function App() {
  const { t } = useTranslation("common");
  return (
    <Box>
      <Link href="/auth">{t("auth")}</Link>
    </Box>
  );
}
