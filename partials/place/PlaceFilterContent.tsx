import { useToken } from "@gluestack-style/react";
import { Button, Text } from "@gluestack-ui/themed";
import React from "react";
import { useTranslation } from "react-i18next";
import { StyleSheet } from "react-native";
import BoxIcon from "~assets/Icons/BoxIcon";
import ScrollableModal from "~components/ScrollableModal";

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
          borderColor: "$borderDark400",
          gap: "$2",
          borderTopLeftRadius: 0,
          borderBottomLeftRadius: 0,
          borderLeftWidth: 0,
          borderWidth: StyleSheet.hairlineWidth,
        }}
        onPress={() => setFilterModalVisible(true)}
      >
        <BoxIcon name="filter" color={color} width={20} height={20} />
        <Text fontSize="$sm">{t("titles.filter")}</Text>
      </Button>
      <ScrollableModal
        isVisible={filterModalVisible}
        setVisible={setFilterModalVisible}
        title={t("titles.filter")}
      >
        <Text>as knk</Text>
      </ScrollableModal>
    </>
  );
};

export default PlaceFilterContent;
