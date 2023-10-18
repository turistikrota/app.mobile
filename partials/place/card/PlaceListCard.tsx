import { Box, Heading, Text, VStack } from "@gluestack-ui/themed";
import { router } from "expo-router";
import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";

import { GestureResponderEvent } from "react-native";
import { useAlert } from "~hooks/alert";
import { PlaceListItem, getTranslations } from "~types/place";
import { imageSort } from "~utils/sort";
import PlaceImageCarousel from "./PlaceImageCarousel";
import {
  IsPayedCard,
  PlaceTypeCard,
  ReviewCard,
  TimeSpentCard,
} from "./Shared";

type Props = {} & PlaceListItem;

const PlaceListCard: React.FC<Props> = ({
  averageTimeSpent,
  coordinates,
  images,
  isPayed,
  review,
  translations,
  type,
}) => {
  const { t, i18n } = useTranslation("place");
  const alert = useAlert();
  const translation = useMemo(() => {
    return getTranslations(translations, i18n.language, {
      description: "",
      slug: "",
      title: "",
    });
  }, [i18n.language, translations]);

  const openDetail = () => {
    router.push(`/place/${translation.slug}`);
  };

  const onPress = (event: GestureResponderEvent) => {
    if (event.target !== event.currentTarget) return;
  };
  return (
    <Box>
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
        space="sm"
      >
        <Box>
          <Heading
            sx={{
              color: "$textLight700",
            }}
            size="md"
          >
            {translation.title}
          </Heading>
          <Text color="$textLight600" mt="$0.5">
            Bu yer Sakarya ve cart curt'a yakındır
          </Text>
        </Box>
        <Box
          sx={{
            flexDirection: "row",
            w: "100%",
            justifyContent: "space-between",
          }}
        >
          <ReviewCard star={review.averagePoint} total={review.total} />
          <TimeSpentCard
            max={averageTimeSpent.max}
            min={averageTimeSpent.min}
          />
        </Box>
        <Box
          sx={{
            flexDirection: "row",
            w: "100%",
            justifyContent: "space-between",
          }}
        >
          <IsPayedCard isPayed={isPayed} />
          <PlaceTypeCard type={type} />
        </Box>
      </VStack>
    </Box>
  );
};

export default PlaceListCard;
