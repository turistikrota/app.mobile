import { Button } from "@gluestack-ui/themed";
import type { HeaderBackButtonProps } from "@react-navigation/native-stack/lib/typescript/src/types";
import { router } from "expo-router";
import React from "react";
import { useTranslation } from "react-i18next";
import { Platform } from "react-native";
import BoxIcon from "~assets/Icons/BoxIcon";

const HeaderLeft: React.FC<HeaderBackButtonProps> = () => {
  const { t } = useTranslation("common");

  if (Platform.OS === "android") return null;

  const onPress = () => {
    if (router.canGoBack()) return router.back();
    return router.push("/");
  };

  return (
    <Button variant="link" onPress={onPress}>
      <BoxIcon name="arrow-back" color="black" />
    </Button>
  );
};

export default HeaderLeft;
