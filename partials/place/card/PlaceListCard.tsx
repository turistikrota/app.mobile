import { Box, Heading, Text } from "@gluestack-ui/themed";
import { router } from "expo-router";
import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";

import { GestureResponderEvent } from "react-native";
import { useAlert } from "~hooks/alert";
import { PlaceListItem, getTranslations } from "~types/place";
import { imageSort } from "~utils/sort";
import PlaceImageCarousel from "./PlaceImageCarousel";

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
      <Box sx={{}}>
        <Heading>{translation.title}</Heading>
        <Text>Bu yer Sakarya ve cart curt'a yakındır</Text>
      </Box>
      <Box sx={{}}></Box>
      <Box sx={{}}></Box>
    </Box>
  );
};

export default PlaceListCard;
