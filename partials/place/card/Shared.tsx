import { Badge, BadgeText, Box, Text, useToken } from "@gluestack-ui/themed";
import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
import BoxIcon from "~assets/Icons/BoxIcon";
import FiveStars from "~components/Stars";
import { useTimeSpent, useTimeSpentUnit } from "~hooks/timespent";
import { PlaceTypeItems, PlaceTypes, TimeSpent, Type } from "~types/place";

type ReviewCardProps = {
  star: number;
  total: number;
};

type IsPayedProps = {
  isPayed: boolean;
};

type PlaceTypeProps = {
  type: Type;
};

type TimeSpentProps = TimeSpent & {};

export const ReviewCard: React.FC<ReviewCardProps> = ({ star, total }) => {
  return (
    <Box
      sx={{
        flexDirection: "row",
        alignItems: "center",
        gap: "$1.5",
      }}
    >
      <FiveStars star={star} iconSize={20} />
      <Text size="sm">{total}</Text>
    </Box>
  );
};

export const IsPayedCard: React.FC<IsPayedProps> = ({ isPayed }) => {
  const { t, i18n } = useTranslation("place");
  return (
    <Box
      sx={{
        flexDirection: "row",
      }}
    >
      <Badge
        size="md"
        variant="solid"
        borderRadius="$sm"
        action={isPayed ? "info" : "success"}
      >
        <BadgeText>{t(`card.${isPayed ? "paid" : "free"}`)}</BadgeText>
      </Badge>
    </Box>
  );
};

export const PlaceTypeCard: React.FC<PlaceTypeProps> = ({ type }) => {
  const { t } = useTranslation("place");
  const current = useMemo<PlaceTypeItems>(() => {
    return PlaceTypes[type] ? PlaceTypes[type] : PlaceTypes[Type.Other];
  }, [type]);
  const color = useToken("colors", `${current.variant ?? "primary"}600`);
  return (
    <Box
      sx={{
        flexDirection: "row",
      }}
    >
      <Badge
        size="md"
        variant="solid"
        borderRadius="$sm"
        action={current.variant}
        sx={{
          gap: "$1",
        }}
      >
        <BadgeText>{t(current.text)}</BadgeText>
        <BoxIcon name={current.icon} color={color} width={19} height={19} />
      </Badge>
    </Box>
  );
};

export const TimeSpentCard: React.FC<TimeSpentProps> = (data) => {
  const { t } = useTranslation("place");
  const unit = useTimeSpentUnit(data);
  const spent = useTimeSpent(data);
  return (
    <Box
      sx={{
        flexDirection: "row",
      }}
    >
      <Text size="sm">
        {t("card.time-spent", {
          min: spent.min,
          max: spent.max,
          unit: t(unit),
        })}
      </Text>
    </Box>
  );
};
