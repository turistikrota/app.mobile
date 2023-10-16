import { Button, Text, useToken } from "@gluestack-ui/themed";
import React from "react";
import { useTranslation } from "react-i18next";
import { StyleSheet } from "react-native";
import BoxIcon from "~assets/Icons/BoxIcon";
import ScrollableModal from "~components/ScrollableModal";

const PlaceSortContent: React.FC = () => {
  const color = useToken("colors", "textLight500");
  const [sortModalVisible, setSortModalVisible] = React.useState(false);
  const { t } = useTranslation("place");

  return (
    <>
      <Button
        size="md"
        variant="outline"
        sx={{
          w: "$1/2",
          borderColor: "$borderDark400",
          gap: "$2",
          borderRadius: 0,
          borderWidth: StyleSheet.hairlineWidth,
        }}
        onPress={() => setSortModalVisible(true)}
      >
        <BoxIcon name="sort" color={color} width={20} height={20} />
        <Text fontSize="$sm">{t("titles.sort")}</Text>
      </Button>
      <ScrollableModal
        isVisible={sortModalVisible}
        setVisible={setSortModalVisible}
        title={t("titles.sort")}
      >
        <Text>sa knk</Text>
      </ScrollableModal>
    </>
  );
};

export default PlaceSortContent;
