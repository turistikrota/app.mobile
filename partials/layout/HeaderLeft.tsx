import { AntDesign } from "@expo/vector-icons";
import { Button, Text } from "@gluestack-ui/themed";
import type { HeaderBackButtonProps } from "@react-navigation/native-stack/lib/typescript/src/types";
import { Link, router } from "expo-router";
import React from "react";
import { useTranslation } from "react-i18next";
import CategoryIcon from "~assets/Icons/CategoryIcon";

const HeaderLeft: React.FC<HeaderBackButtonProps> = ({ canGoBack }) => {
  const { t } = useTranslation("common");
  if (canGoBack) {
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
  }
  return (
    <Link href="/apps">
      <CategoryIcon />
    </Link>
  );
};

export default HeaderLeft;
