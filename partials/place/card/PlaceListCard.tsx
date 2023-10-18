import { Box, Heading, Pressable, Text, VStack } from "@gluestack-ui/themed";
import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";

import { GestureResponderEvent } from "react-native";
import { useAlert } from "~hooks/alert";
import { useStringMerger } from "~hooks/string";
import { findBestOfBestNearestCities } from "~static/location/cities";
import { PlaceListItem, getTranslations } from "~types/place";
import { imageSort } from "~utils/sort";
import PlaceImageCarousel from "./PlaceImageCarousel";
import {
  IsPayedCard,
  PlaceTypeCard,
  ReviewCard,
  TimeSpentCard,
} from "./Shared";

type Props = {
  onSelect: () => void;
} & PlaceListItem;

const PlaceListCard: React.FC<Props> = ({
  averageTimeSpent,
  coordinates,
  images,
  isPayed,
  review,
  translations,
  type,
  onSelect,
}) => {
  const { t, i18n } = useTranslation("place");
  const alert = useAlert();
  const cities = useMemo(
    () => findBestOfBestNearestCities(coordinates, 3),
    [coordinates]
  );
  const cityText = useStringMerger(cities.map((c) => c.name));

  const translation = useMemo(() => {
    return getTranslations(translations, i18n.language, {
      description: "",
      slug: "",
      title: "",
    });
  }, [i18n.language, translations]);

  const openDetail = () => {
    onSelect();
  };

  const onPress = (event: GestureResponderEvent) => {
    if (event.target !== event.currentTarget) return;
  };
  return (
    <Box
      sx={{
        mb: "$8",
      }}
    >
      <PlaceImageCarousel
        list={imageSort(images)}
        title={translation.title}
        onPress={openDetail}
      />
      <VStack
        sx={{
          px: "$2",
          pt: "$2",
        }}
        space="md"
      >
        <Pressable onPress={openDetail}>
          <Heading
            sx={{
              color: "$textLight700",
            }}
            size="md"
          >
            {translation.title}
          </Heading>
          <Text color="$textLight600" mt="$0.5">
            {t("features.location.subtext", {
              location: cityText,
            })}
          </Text>
        </Pressable>
        <Pressable
          sx={{
            flexDirection: "row",
            w: "100%",
            justifyContent: "space-between",
          }}
          onPress={openDetail}
        >
          <ReviewCard star={review.averagePoint} total={review.total} />
          <TimeSpentCard
            max={averageTimeSpent.max}
            min={averageTimeSpent.min}
          />
        </Pressable>
        <Pressable
          sx={{
            flexDirection: "row",
            w: "100%",
            justifyContent: "space-between",
          }}
          onPress={openDetail}
        >
          <IsPayedCard isPayed={isPayed} />
          <PlaceTypeCard type={type} />
        </Pressable>
      </VStack>
    </Box>
  );
};

export default PlaceListCard;
