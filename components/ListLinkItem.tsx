import { ViewStyle } from "@expo/html-elements/build/primitives/View";
import { SxProps } from "@gluestack-style/react/lib/typescript/types";
import { Box, Pressable } from "@gluestack-ui/themed";
import { router } from "expo-router";
import React from "react";
import { StyleProp } from "react-native";
import BoxIcon from "~assets/Icons/BoxIcon";

type Props = {
  href: string;
  icon?: React.ReactNode;
  sx?: SxProps<StyleProp<ViewStyle>>;
  onPress?: () => void;
  iconColor?: string;
};

const ListLinkItem: React.FC<React.PropsWithChildren<Props>> = ({
  href,
  icon,
  children,
  sx,
  onPress,
  iconColor,
}) => {
  return (
    <Pressable
      onPress={() => (onPress ? onPress() : router.push(href))}
      sx={{
        ...sx,
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      {icon && (
        <Box
          sx={{
            w: "$1/6",
            justifyContent: "center",
            alignItems: "center",
            p: "$2",
          }}
        >
          {icon}
        </Box>
      )}
      <Box
        sx={{
          w: "$5/6",
          p: "$2",
        }}
      >
        {children}
      </Box>
      {!icon && (
        <Box
          sx={{
            w: "$1/6",
            justifyContent: "center",
            alignItems: "center",
            p: "$2",
          }}
        >
          <BoxIcon name="chevron-right" color={iconColor} />
        </Box>
      )}
    </Pressable>
  );
};

export default ListLinkItem;
