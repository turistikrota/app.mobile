import { ViewStyle } from "@expo/html-elements/build/primitives/View";
import { SxProps } from "@gluestack-style/react/lib/typescript/types";
import { Box, Text } from "@gluestack-ui/themed";
import React from "react";
import { StyleProp } from "react-native";

type Props = {
  sx?: SxProps<StyleProp<ViewStyle>>;
};

type FormType = React.FC<React.PropsWithChildren<Props>> & {
  Left: React.FC<React.PropsWithChildren>;
  Right: React.FC<React.PropsWithChildren>;
  Title: React.FC<React.PropsWithChildren>;
  Description: React.FC<React.PropsWithChildren>;
};

const Title: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <Text
      sx={{
        fontSize: "$lg",
        fontWeight: "$semibold",
      }}
    >
      {children}
    </Text>
  );
};

const Description: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <Text
      sx={{
        fontSize: "$sm",
        textAlign: "left",
      }}
    >
      {children}
    </Text>
  );
};

const Left: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <Box
      sx={{
        w: "$5/6",
        justifyContent: "flex-start",
      }}
    >
      {children}
    </Box>
  );
};

const Right: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <Box
      sx={{
        w: "$1/6",
        justifyContent: "flex-end",
      }}
    >
      {children}
    </Box>
  );
};

const LineForm: FormType = ({ children, sx }) => {
  return (
    <Box
      sx={{
        ...sx,
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      {children}
    </Box>
  );
};

LineForm.Left = Left;
LineForm.Right = Right;
LineForm.Title = Title;
LineForm.Description = Description;

export default LineForm;
