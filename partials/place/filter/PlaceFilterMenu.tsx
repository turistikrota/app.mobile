import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import FilterGroup from "~components/FilterGroup";
import { usePlaceFilter } from "~contexts/place-filter";
import { findCityByCoordinates } from "~static/location/cities";
import { RootState } from "~store";
import { Locales } from "~types/i18n";
import {
  PlaceFeatureListItem,
  PlaceFeatureListItemTranslations,
  PlaceFilterComponents,
  PlaceFilterRequest,
  getTranslations,
  isCoordinates,
  isDistance,
  isPlaceType,
} from "~types/place";
import { DistanceLabels } from "~utils/place";

type Props = {
  onOpen: (
    component: PlaceFilterComponents,
    key: keyof PlaceFilterRequest
  ) => void;
};

type Item = {
  component: PlaceFilterComponents;
  queryKey: keyof PlaceFilterRequest;
};

const items: Item[] = [
  {
    component: "city-select",
    queryKey: "coordinates",
  },
  {
    component: "distance",
    queryKey: "distance",
  },
  {
    component: "features",
    queryKey: "featureUUIDs",
  },
  {
    component: "time-spent",
    queryKey: "timeSpent",
  },
  {
    component: "query",
    queryKey: "query",
  },
  {
    component: "is-payed",
    queryKey: "isPayed",
  },
  {
    component: "types",
    queryKey: "types",
  },
  {
    component: "review",
    queryKey: "minReview",
  },
];

type ParserOptions = {
  features: PlaceFeatureListItem[];
  locale: Locales;
  t: ReturnType<typeof useTranslation>["t"];
};

const componentValueParsers: Record<
  PlaceFilterComponents,
  (value: any, options: ParserOptions) => any
> = {
  "city-select": (value) => {
    if (isCoordinates(value)) {
      const city = findCityByCoordinates(value);
      if (city) return city.name;
    }
    return "";
  },
  distance: (value) => {
    if (!isDistance(value)) return "";
    return DistanceLabels[value];
  },
  features: (value, options) => {
    if (!value || !Array.isArray(value)) return "";
    return options.features.reduce((acc, feature) => {
      if (value.includes(feature.uuid)) {
        if (acc.length > 0) {
          acc += ", ";
        }
        acc += getTranslations<PlaceFeatureListItemTranslations>(
          feature.translations,
          options.locale,
          {
            title: "",
            description: "",
          }
        )?.title;
      }
      return acc;
    }, "");
  },
  "time-spent": (value, opts) => {
    if (!value) return "";
    if (value.min > 0) {
      if (value.max > 0) {
        return opts.t("tools.range", {
          min: value.min,
          max: value.max,
        });
      }
      return opts.t("tools.min", {
        time: value.min,
      });
    }
    if (value.max > 0) {
      return opts.t("tools.max", {
        time: value.max,
      });
    }
    return "";
  },
  query: (value) => {
    if (!value) return "";
    return value;
  },
  "is-payed": (value, opts) => {
    if (typeof value === "undefined") return "";
    return value ? opts.t("tools.paid") : opts.t("tools.free");
  },
  types: (value, opts) => {
    if (!value || !Array.isArray(value)) return "";
    return value.reduce((acc, type) => {
      if (!isPlaceType(type)) return acc;
      if (acc.length > 0) {
        acc += ", ";
      }
      acc += opts.t(`types.${type}`);
      return acc;
    }, "");
  },
  review: (value, opts) => {
    const val = Number(value);
    if (isNaN(val)) return "";

    return opts.t(
      val === 5 ? "filter.review.labels.last" : "filter.review.labels.x",
      {
        star: val,
      }
    );
  },
};

const PlaceFilterMenu: React.FC<Props> = ({ onOpen }) => {
  const { t, i18n } = useTranslation("place");
  const { query } = usePlaceFilter();
  const features = useSelector((state: RootState) => state.place.features.list);

  return (
    <>
      {items.map((item) => (
        <FilterGroup
          key={item.component}
          title={t(`filter.${item.component}.text`)}
          onPress={() => onOpen(item.component, item.queryKey)}
          value={componentValueParsers[item.component](
            query.filter[item.queryKey],
            {
              features,
              locale: i18n.language as Locales,
              t,
            }
          )}
        ></FilterGroup>
      ))}
    </>
  );
};

export default PlaceFilterMenu;
