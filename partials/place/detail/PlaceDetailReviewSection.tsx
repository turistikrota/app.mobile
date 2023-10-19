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
      <FiveStars star={averagePoint} />
      <Box
        sx={{
          flexDirection: "row",
          gap: "$1",
        }}
      >
        <Text>{total}</Text>
        <Text>{t("review.label")}</Text>
      </Box>
    </Box>
  );
};

export default PlaceDetailReviewSection;
