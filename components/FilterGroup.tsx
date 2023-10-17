import { Heading, Pressable, Text } from "@gluestack-ui/themed";
import React from "react";
import { StyleSheet } from "react-native";

type Props = {
  title: string;
  value: string;
  onPress: () => void;
};

const FilterGroup: React.FC<Props> = ({ title, value, onPress }) => {
  return (
    <Pressable
      onPress={onPress}
      sx={{
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: "$borderLight500",
        py: "$2",
        w: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Heading
        sx={{
          w: "auto",
        }}
      >
        {title}
      </Heading>
      <Text color="$secondary500" maxWidth={"70%"}>
        {value}
      </Text>
    </Pressable>
  );
};

export default FilterGroup;
