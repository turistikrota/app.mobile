import { Box, Heading, Text } from "@gluestack-ui/themed";
import React from "react";

type Props = {
  title: string;
  description: string;
};

const PlaceDetailTitleSection: React.FC<Props> = ({ title, description }) => {
  return (
    <Box>
      <Heading color="$textLight700" size="lg">
        {title}
      </Heading>
      <Text mt="$0.5" color="$textLight600">
        {description}
      </Text>
    </Box>
  );
};

export default PlaceDetailTitleSection;
