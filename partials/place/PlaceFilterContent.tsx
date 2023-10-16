import { useToken } from "@gluestack-style/react";
import { Button, Text } from "@gluestack-ui/themed";
import React from "react";
import { useTranslation } from "react-i18next";
import BoxIcon from "~assets/Icons/BoxIcon";

const PlaceFilterContent: React.FC = () => {
  const { t } = useTranslation("place");
  const color = useToken("colors", "textLight500");
  const [filterModalVisible, setFilterModalVisible] = React.useState(false);

  return (
    <>
      <Button
        size="md"
        variant="outline"
        sx={{
          w: "$1/2",
          borderColor: "$textLight300",
          gap: "$2",
          borderTopLeftRadius: 0,
          borderBottomLeftRadius: 0,
          borderLeftWidth: 0,
        }}
        onPress={() => setFilterModalVisible(true)}
      >
        <BoxIcon name="filter" color={color} width={20} height={20} />
        <Text fontSize="$sm">{t("titles.filter")}</Text>
      </Button>
    </>
  );
};

export default PlaceFilterContent;
