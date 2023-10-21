import { Button, useToken } from "@gluestack-ui/themed";
import React from "react";
import { StyleSheet } from "react-native";
import BoxIcon from "~assets/Icons/BoxIcon";
import { ContentType } from "~types/place";

type Props = {
  type: string;
  onChange: (type: ContentType) => void;
};

const PlaceFilterToggleContent: React.FC<Props> = ({ type, onChange }) => {
  const color = useToken("colors", "textLight500");

  const onPress = () => {
    if (type === "map") return onChange("list");
    return onChange("map");
  };

  return (
    <Button
      size="md"
      variant="outline"
      sx={{
        w: "$full",
        borderColor: "$borderDark400",
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
        borderWidth: StyleSheet.hairlineWidth,
      }}
      onPress={onPress}
    >
      <BoxIcon
        name={type === "map" ? "grid" : "map"}
        color={color}
        width={20}
        height={20}
      />
    </Button>
  );
};

export default PlaceFilterToggleContent;
