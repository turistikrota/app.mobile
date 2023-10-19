import { Box, Heading, Text, useToken } from "@gluestack-ui/themed";
import React from "react";
import BoxIcon, { IconName } from "~assets/Icons/BoxIcon";
import { BadgeAction } from "~types/theme";

type Props = {
  text: string;
  subtext: string;
  icon: IconName;
  variant?: BadgeAction;
  core?: boolean;
};

const FeatureCard: React.FC<Props> = ({
  text,
  subtext,
  icon,
  variant = "info",
  core = false,
}) => {
  const iconColor = useToken("colors", `${variant}600`);
  return (
    <Box
      sx={{
        w: "$full",
        flexDirection: "row",
        borderRadius: "$sm",
        p: "$2",
      }}
      action={variant}
    >
      <Box
        sx={{
          w: "20%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <BoxIcon name={icon} color={iconColor} width={35} height={35} />
      </Box>
      <Box
        sx={{
          w: "80%",
        }}
      >
        <Heading
          size="md"
          sx={{
            color: `$${variant}600`,
          }}
        >
          {text}
        </Heading>
        <Text
          size="sm"
          sx={{
            color: `$${variant}700`,
          }}
        >
          {subtext}
        </Text>
      </Box>
    </Box>
  );
};

export default FeatureCard;
