import { Box, Heading, Image, Pressable } from "@gluestack-ui/themed";
import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
import BoxIcon from "~assets/Icons/BoxIcon";
import { PlaceListItem, getTranslations } from "~types/place";
import { imageSort } from "~utils/sort";
import { PlaceTypeCard, TimeSpentCard } from "./Shared";

type Props = {
  onSelect: () => void;
  onClose: () => void;
} & PlaceListItem;

const PlaceMapCard: React.FC<Props> = ({
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
  const translation = useMemo(() => {
    return getTranslations(translations, i18n.language, {
      description: "",
      slug: "",
      title: "",
    });
  }, [i18n.language, translations]);
  return (
    <Box
      sx={{
        width: "100%",
        flexDirection: "row",
        backgroundColor: "$white",
        borderRadius: "$sm",
      }}
    >
      <Box
        sx={{
          width: "$1/3",
          position: "relative",
        }}
      >
        <Pressable
          sx={{
            position: "absolute",
            top: "$1",
            left: "$1",
            backgroundColor: "rgba(0,0,0,0.5)",
            borderRadius: "$full",
            p: "$1",
            zIndex: 1,
          }}
          onPress={onSelect}
        >
          <BoxIcon name="x" width={17} height={17} color="white" />
        </Pressable>
        <Image
          sx={{
            width: "100%",
            height: "100%",
            borderTopLeftRadius: "$sm",
            borderBottomLeftRadius: "$sm",
          }}
          source={{
            uri:
              imageSort.length > 0
                ? imageSort(images)[0].url
                : "https://via.placeholder.com/150",
          }}
          alt={translation.title}
        />
      </Box>
      <Pressable
        sx={{
          width: "$2/3",
          p: "$2",
        }}
        onPress={onSelect}
      >
        <Heading color="$textLight700" size="md">
          {translation.title}
        </Heading>
        <Box
          sx={{
            flexDirection: "row",
            w: "100%",
            justifyContent: "space-between",
          }}
        >
          <TimeSpentCard
            max={averageTimeSpent.max}
            min={averageTimeSpent.min}
          />
          <PlaceTypeCard type={type} />
        </Box>
      </Pressable>
    </Box>
  );
};

export default PlaceMapCard;
