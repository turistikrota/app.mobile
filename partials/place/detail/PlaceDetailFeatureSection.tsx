import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { IconName } from "~assets/Icons/BoxIcon";
import FeatureCard from "~components/FeatureCard";
import { useStringMerger } from "~hooks/string";
import { useTimeSpentUnit } from "~hooks/timespent";
import { findBestOfBestNearestCities } from "~static/location/cities";
import {
  Coordinates,
  FeatureItem,
  FeatureTranslation,
  PlaceTypeItems,
  PlaceTypes,
  TimeSpent,
  Type,
  getTranslations,
} from "~types/place";
import { BadgeAction } from "~types/theme";
import { getCurrencyByLocale } from "~utils/i18n";

type Props = {
  features: FeatureItem[];
  coordinates: Coordinates;
  type: Type;
  timeSpent: TimeSpent;
  isPayed: boolean;
};

type MainFeatureItem = {
  condition: boolean;
  title: string;
  text: string;
  icon: IconName;
  variant?: BadgeAction;
};

const IconMapping: Record<string, IconName> = {
  "bx bx-heart": "heart",
  "bx bx-group": "group",
  "bx bxs-baby-carriage": "baby",
};

const defaultFeature: FeatureTranslation = {
  title: "No title",
  description: "No description",
};

const PlaceDetailFeatureSection: React.FC<Props> = ({
  features,
  type,
  coordinates,
  timeSpent,
  isPayed,
}) => {
  const { t, i18n } = useTranslation("place");

  const cities = useMemo(
    () => findBestOfBestNearestCities(coordinates, 3),
    [coordinates]
  );
  const timeSpentUnit = useTimeSpentUnit(timeSpent);
  const cityText = useStringMerger(cities.map((c) => c.name));

  const currentType = useMemo<PlaceTypeItems>(() => {
    return PlaceTypes[type] ? PlaceTypes[type] : PlaceTypes[Type.Other];
  }, [type]);

  const mainFeatures = useMemo<MainFeatureItem[]>(
    () =>
      [
        {
          condition: cityText !== "",
          variant: "info",
          icon: "map",
          title: t("features.location.text"),
          text: t("features.location.subtext", {
            location: cityText,
          }),
        },
        {
          condition: true,
          variant: currentType.variant,
          icon: currentType.icon,
          title: t(currentType.text),
          text: t(`types.desc.${type ?? Type.Other}`),
        },
        {
          condition: true,
          variant: "teal",
          icon: "time",
          title: t("features.time.text"),
          text: t("features.time.subtext", {
            min: timeSpent.min,
            max: timeSpent.max,
            unit: t(timeSpentUnit),
          }),
        },
        {
          condition: isPayed,
          variant: "warning",
          icon: getCurrencyByLocale(i18n.language),
          title: t("features.payed.text"),
          text: t("features.payed.subtext"),
        },
        {
          condition: !isPayed,
          variant: "success",
          icon: getCurrencyByLocale(i18n.language),
          title: t("features.free.text"),
          text: t("features.free.subtext"),
        },
      ].filter((f) => f.condition) as MainFeatureItem[],
    [features, cityText, currentType, timeSpent, isPayed, i18n.language, t]
  );
  return (
    <>
      {mainFeatures.map((feature, index) => (
        <FeatureCard
          key={index}
          icon={feature.icon}
          text={feature.title}
          subtext={feature.text}
          variant={feature.variant}
          core
        />
      ))}
      {features.map((feature, index) => (
        <FeatureCard
          key={index}
          icon={IconMapping[feature.icon] ?? "question"}
          text={
            getTranslations<FeatureTranslation>(
              feature.translations,
              i18n.language,
              defaultFeature
            ).title
          }
          subtext={
            getTranslations<FeatureTranslation>(
              feature.translations,
              i18n.language,
              defaultFeature
            ).description
          }
          variant="info"
          core
        />
      ))}
    </>
  );
};

export default PlaceDetailFeatureSection;
