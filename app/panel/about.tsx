import { Box, Center, Text, View } from "@gluestack-ui/themed";
import * as Application from "expo-application";
import React from "react";
import { useTranslation } from "react-i18next";
import Logo from "~assets/Icons/Logo";

export default function AboutPage() {
  const { t } = useTranslation("about");
  const appVersion =
    Application.nativeApplicationVersion || Application.nativeBuildVersion;
  return (
    <View
      sx={{
        height: "100%",
        backgroundColor: "$white",
        p: "$2",
      }}
    >
      <Center>
        <Box sx={{}}>
          <Logo size="2xl" borderRadius="$full" />
        </Box>
      </Center>
      <Text sx={{ mt: "$2", textAlign: "center" }}>{appVersion}</Text>
      <Text sx={{ mt: "$2", textAlign: "center", color: "$textLight500" }}>
        {t("description")}
      </Text>
    </View>
  );
}
