import { AntDesign } from "@expo/vector-icons";
import { Box, Button, Text } from "@gluestack-ui/themed";
import { router } from "expo-router";
import React from "react";
import { useTranslation } from "react-i18next";

type Props = {
  title: String;
  onBack?: () => void;
};

const PageDetailHeader: React.FC<Props> = ({ title, onBack }) => {
  const { t } = useTranslation("common");

  const onPrevClick = () => {
    if (onBack) return onBack();
    return router.back();
  };
  return (
    <Box
      sx={{
        flexDirection: "row",
        w: "$full",
        alignItems: "center",
        borderBottomColor: "$borderLight100",
        borderBottomWidth: 1,
        h: "$11",
      }}
    >
      <Box w="$1/6">
        <Button variant="link" onPress={onPrevClick}>
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
      </Box>
      <Box
        w="$4/6"
        sx={{
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text
          sx={{
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          {title}
        </Text>
      </Box>
      <Box w="$1/6"></Box>
    </Box>
  );
};

export default PageDetailHeader;
