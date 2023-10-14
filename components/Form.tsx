import { Text } from "@gluestack-ui/themed";
import React from "react";

export const FormTitle: React.FC<React.PropsWithChildren> = ({ children }) => {
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

export const FormDescription: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
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
