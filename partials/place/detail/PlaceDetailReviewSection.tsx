import { Box, Text } from "@gluestack-ui/themed";
import React from "react";
import { useTranslation } from "react-i18next";
import FiveStars from "~components/Stars";
import { Review } from "~types/place";

type Props = {} & Review;

const PlaceDetailReviewSection: React.FC<Props> = ({ averagePoint, total }) => {
  const { t } = useTranslation("place");
  return (
    <Box
      sx={{
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <FiveStars star={averagePoint} iconSize={30} />
      <Box
        sx={{
          flexDirection: "row",
          alignItems: "flex-end",
          gap: "$1",
        }}
      >
        <Text color="$textLight700" size="2xl">
          {total}
        </Text>
        <Text color="$textLight600">{t("review.label")}</Text>
      </Box>
    </Box>
  );
};

export default PlaceDetailReviewSection;
