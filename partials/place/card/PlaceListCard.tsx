import { Pressable, Text, View } from "@gluestack-ui/themed";
import { router } from "expo-router";
import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { Dimensions, Image, StyleSheet } from "react-native";

import { PlaceListItem, getTranslations } from "~types/place";

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
  const translation = useMemo(() => {
    return getTranslations(translations, i18n.language, {
      description: "",
      slug: "",
      title: "",
    });
  }, [i18n.language, translations]);
  return (
    <Pressable onPress={() => router.push(`/place/${translation.slug}`)}>
     
    </Pressable>
  );
};


export default PlaceListCard;
