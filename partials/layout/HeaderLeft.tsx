import { AntDesign } from "@expo/vector-icons";
import { Button, Text } from "@gluestack-ui/themed";
import type { HeaderBackButtonProps } from "@react-navigation/native-stack/lib/typescript/src/types";
import { router } from "expo-router";
import React from "react";
import { useTranslation } from "react-i18next";
import { Platform } from "react-native";

const HeaderLeft: React.FC<HeaderBackButtonProps> = () => {
  const { t } = useTranslation("common");

  if (Platform.OS === "android") return null;

  return (
    <Button variant="link" onPress={() => router.back()}>
      <AntDesign
        style={{
          backgroundColor: "transparent",
        }}
        name="left"
        size={20}
        color="black"
      />
      <Text>{t("back")}</Text>
    </Button>
  );
};

export default HeaderLeft;
