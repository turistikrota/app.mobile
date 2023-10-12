import { Box, Pressable } from "@gluestack-ui/themed";
import { router } from "expo-router";
import React from "react";
import BoxIcon from "~assets/Icons/BoxIcon";

type Props = {
  href: string;
  icon?: React.ReactNode;
};

const ListLinkItem: React.FC<React.PropsWithChildren<Props>> = ({
  href,
  icon,
  children,
}) => {
  return (
    <Pressable
      onPress={() => router.push(href)}
      sx={{
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
          <BoxIcon name="chevron-right" />
        </Box>
      )}
    </Pressable>
  );
};

export default ListLinkItem;
