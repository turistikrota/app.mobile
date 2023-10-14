import { ViewStyle } from "@expo/html-elements/build/primitives/View";
import { SxProps } from "@gluestack-style/react/lib/typescript/types";
import { Box, Divider, Text, VStack } from "@gluestack-ui/themed";
import React from "react";
import { StyleProp } from "react-native";

type Props = {
  sx?: SxProps<StyleProp<ViewStyle>>;
};

type LineTableType = React.FC<React.PropsWithChildren<Props>> & {
  Left: typeof Left;
  Right: typeof Right;
  Item: typeof Item;
  Divider: typeof TableDivider;
};

const Left: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <Text color="$textLight950" fontWeight="semibold">
      {children}
    </Text>
  );
};

const TableDivider: React.FC = () => {
  return <Divider bgColor="$backgroundDark100" />;
};

const Right: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <Text color="$textLight600" fontSize="$sm">
      {children}
    </Text>
  );
};

const Item: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <Box
      sx={{
        p: "$2",
        flexDirection: "row",
        alignItems: "center",
        mb: "$2",
        justifyContent: "space-between",
      }}
    >
      {children}
    </Box>
  );
};

const LineTable: LineTableType = ({ children, sx }) => {
  return (
    <VStack
      sx={{
        ...sx,
        width: "100%",
        bg: "$backgroundLightMuted",
        borderRadius: "$sm",
      }}
    >
      {children}
    </VStack>
  );
};

LineTable.Left = Left;
LineTable.Right = Right;
LineTable.Item = Item;
LineTable.Divider = TableDivider;

export default LineTable;
