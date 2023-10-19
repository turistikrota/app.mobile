import { Heading, Text } from "@gluestack-ui/themed";
import React from "react";

type Props = {
  title: string;
  description: string;
};

const PlaceDetailTitleSection: React.FC<Props> = ({ title, description }) => {
  return (
    <>
      <Heading>{title}</Heading>
      <Text>{description}</Text>
    </>
  );
};

export default PlaceDetailTitleSection;
