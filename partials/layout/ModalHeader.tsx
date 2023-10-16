import { Box, Pressable, Text } from "@gluestack-ui/themed";
import React from "react";
import { StyleSheet } from "react-native";
import BoxIcon from "~assets/Icons/BoxIcon";

type Props = {
  title: string;
  onClose: () => void;
};

const ModalHeader: React.FC<Props> = ({ title, onClose }) => {
  return (
    <Box
      sx={{
        width: "100%",
        height: 44,
        flexDirection: "row",
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: "$borderDark400",
      }}
    >
      <Box
        sx={{
          w: "$1/6",
          h: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Pressable onPress={onClose}>
          <BoxIcon name="x" />
        </Pressable>
      </Box>
      <Box
        sx={{
          w: "$4/6",
          h: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>{title}</Text>
      </Box>
      <Box
        sx={{
          w: "$1/6",
          h: "100%",
        }}
      ></Box>
    </Box>
  );
};

export default ModalHeader;
