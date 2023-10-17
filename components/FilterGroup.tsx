import { Box, Heading, Pressable, Text, useToken } from "@gluestack-ui/themed";
import React from "react";
import { StyleSheet } from "react-native";
import BoxIcon from "~assets/Icons/BoxIcon";

type Props = {
  title: string;
  value: string;
  onPress: () => void;
};

const FilterGroup: React.FC<Props> = ({ title, value, onPress }) => {
  const activeColor = useToken("colors", "secondary500");
  return (
    <Pressable
      onPress={onPress}
      sx={{
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: "$borderDark400",
        py: "$2",
        w: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Box
        sx={{
          w: "94%",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          pr: "$1",
        }}
      >
        <Heading
          sx={{
            w: "auto",
            color: "$textLight600",
          }}
          size="md"
        >
          {title}
        </Heading>
        <Text
          color="$secondary500"
          size="xs"
          maxWidth={"70%"}
          textAlign="right"
        >
          {value}
        </Text>
      </Box>
      <Box
        sx={{
          w: "6%",
          justifyContent: "center",
          alignItems: "flex-end",
          py: "$2",
        }}
      >
        <BoxIcon name="chevron-right" />
      </Box>
    </Pressable>
  );
};

export default FilterGroup;
