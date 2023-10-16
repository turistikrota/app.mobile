import { Button, useToken } from "@gluestack-ui/themed";
import React from "react";
import { Share, StyleSheet } from "react-native";
import BoxIcon from "~assets/Icons/BoxIcon";

const PlaceFilterShareContent: React.FC = () => {
  const color = useToken("colors", "textLight500");

  const onShare = async () => {
    // make filtered url from here
    Share.share({
      message: "Heyy",
      url: "https://turistikrota.com",
      title: "Turistikrota",
    }).then((res) => {});
  };

  return (
    <Button
      size="md"
      variant="outline"
      sx={{
        w: "$full",
        borderColor: "$borderDark400",
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
        borderRightWidth: 0,
        borderWidth: StyleSheet.hairlineWidth,
      }}
      onPress={onShare}
    >
      <BoxIcon name="export" color={color} width={20} height={20} />
    </Button>
  );
};

export default PlaceFilterShareContent;
