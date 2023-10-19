import { Box, Heading, Text } from "@gluestack-ui/themed";
import React from "react";
import { useTranslation } from "react-i18next";
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
  variant,
  core = false,
}) => {
  const { t } = useTranslation("common");
  return (
    <Box
      sx={{
        w: "$full",
        flexDirection: "row",
      }}
      action={variant}
    >
      <Box
        sx={{
          w: "$1/6",
        }}
      >
        <BoxIcon name={icon} />
      </Box>
      <Box
        sx={{
          w: "$5/6",
        }}
      >
        <Heading>{text}</Heading>
        <Text>{subtext}</Text>
      </Box>
      {core && <Box></Box>}
    </Box>
  );
};

export default FeatureCard;
