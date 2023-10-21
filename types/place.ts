import { Region } from "react-native-maps";
import { IconName } from "~assets/Icons/BoxIcon";
import { I18nTranslation, isLocale } from "./i18n";
import { ListResponse } from "./response";
import { BadgeAction } from "./theme";

export type PlaceSearchParams = {
  page?: string;
  limit?: string;
  lat?: string;
  lng?: string;
  features?: string;
  types?: string;
  pay?: string;
  dist?: string;
  time?: string;
  minRev?: string;
  maxRev?: string;
  minPoint?: string;
  maxPoint?: string;
  q?: string;
  sort?: string;
  order?: string;
};

export type PlaceFilterRequest = {
  query?: string;
  coordinates?: Coordinates;
  featureUUIDs?: string[];
  types?: Type[];
  isPayed?: boolean;
  distance?: number;
  timeSpent?: TimeSpent;
  minReview?: number;
  maxReview?: number;
  minAveragePoint?: number;
  maxAveragePoint?: number;
  sort?: Sort;
  order?: Order;
};

export enum Sort {
  Popular = "most_popular",
  Liked = "most_liked",
  Recent = "most_recent",
  Near = "nearest",
}

export enum Order {
  Asc = "asc",
  Desc = "desc",
}

export type TimeSpent = {
  min: number;
  max: number;
};

export type PlaceFeatureListItem = {
  uuid: string;
  icon: string;
  translations: I18nTranslation<PlaceFeatureListItemTranslations>;
};

export type PlaceFeatureListItemTranslations = {
  title: string;
  description: string;
};

export type PlaceListItem = {
  images: PlaceImage[];
  translations: I18nTranslation<TranslationItem>;
  averageTimeSpent: TimeSpent;
  review: Review;
  coordinates: Coordinates;
  isPayed: boolean;
  type: Type;
};

export type Restoration = {
  startDate: string;
  endDate: string;
};

export type PlaceDetail = {
  features: FeatureItem[];
  restorations: Restoration[];
  images: PlaceImage[];
  translations: I18nTranslation<FullTranslation>;
  averageTimeSpent: TimeSpent;
  review: Review;
  coordinates: Coordinates;
  isPayed: boolean;
  type: Type;
  createdAt: Date;
  updatedAt: Date;
};

export type FeatureItem = {
  uuid: string;
  icon: string;
  translations: I18nTranslation<FeatureTranslation>;
};

export type FeatureTranslation = {
  title: string;
  description: string;
};

export type PlaceImage = Orderable & {
  url: string;
};

export type Orderable = {
  order: number;
};

export type TranslationItem = {
  title: string;
  description: string;
  slug: string;
};

export type FullTranslation = TranslationItem & {
  markdownUrl: string;
  seo: Seo;
};

type Seo = {
  title: string;
  description: string;
  keywords: string;
};

export type Review = {
  total: number;
  averagePoint: number;
};

export type Coordinates = [number, number];

export type ContentProps = {
  loading: boolean;
  data: ListResponse<PlaceListItem> | null;
  onNextPage?: () => void;
};

export enum Type {
  Eating = "eating",
  Coffee = "coffee",
  Bar = "bar",
  Beach = "beach",
  Amaze = "amaze",
  Shopping = "shopping",
  Transport = "transport",
  Culture = "culture",
  Nature = "nature",
  Health = "health",
  Sport = "sport",
  Nightlife = "nightlife",
  Other = "other",
}

export type PlaceTypeItems = {
  icon: IconName;
  text: string;
  color: string;
  variant?: BadgeAction;
};

export const PlaceTypes: Record<Type, PlaceTypeItems> = {
  [Type.Eating]: {
    icon: "food-menu",
    text: "types.eating",
    color: "bg-secondary-100 dark:bg-secondary-900",
    variant: "warning",
  },
  [Type.Coffee]: {
    icon: "coffee",
    text: "types.coffee",
    color: "bg-yellow-100 dark:bg-yellow-900",
    variant: "yellow",
  },
  [Type.Bar]: {
    icon: "drink",
    text: "types.bar",
    color: "bg-blue-100 dark:bg-blue-900",
    variant: "cyan",
  },
  [Type.Beach]: {
    icon: "swim",
    text: "types.beach",
    color: "bg-green-100 dark:bg-green-900",
    variant: "emerald",
  },
  [Type.Amaze]: {
    icon: "cycling",
    text: "types.amaze",
    color: "bg-purple-100 dark:bg-purple-900",
    variant: "purple",
  },
  [Type.Shopping]: {
    icon: "shopping-bag",
    text: "types.shopping",
    color: "bg-orange-100 dark:bg-orange-900",
    variant: "amber",
  },
  [Type.Transport]: {
    icon: "bus",
    text: "types.transport",
    color: "bg-indigo-100 dark:bg-indigo-900",
    variant: "indigo",
  },
  [Type.Culture]: {
    icon: "landmark",
    text: "types.culture",
    color: "bg-gray-100 dark:bg-gray-900",
  },
  [Type.Nature]: {
    icon: "tree",
    text: "types.nature",
    color: "bg-teal-100 dark:bg-teal-900",
    variant: "teal",
  },
  [Type.Health]: {
    icon: "heart",
    text: "types.health",
    color: "bg-blue-100 dark:bg-blue-900",
    variant: "cyan",
  },
  [Type.Sport]: {
    icon: "football",
    text: "types.sport",
    color: "bg-green-100 dark:bg-green-900",
    variant: "emerald",
  },
  [Type.Nightlife]: {
    icon: "moon",
    text: "types.nightlife",
    color: "bg-indigo-100 dark:bg-indigo-900",
    variant: "indigo",
  },
  [Type.Other]: {
    icon: "plus",
    text: "types.other",
    color: "bg-gray-100 dark:bg-gray-900",
  },
};
export type Distance = 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15;

export type DistanceDelta = {
  latitudeDelta: number;
  longitudeDelta: number;
};

export function isPlaceListResponse(
  response: any
): response is ListResponse<PlaceListItem> {
  return response && response.list && response.total;
}

export function isPlaceFeatureList(
  response: any
): response is PlaceFeatureListItem[] {
  return Array.isArray(response) && response.length > 0;
}

export function isPlaceDetail(response: any): response is PlaceDetail {
  return (
    typeof response !== "undefined" &&
    response !== null &&
    typeof response.translations !== "undefined" &&
    typeof response.images !== "undefined" &&
    typeof response.coordinates !== "undefined" &&
    typeof response.isPayed !== "undefined" &&
    typeof response.type !== "undefined" &&
    typeof response.updatedAt !== "undefined"
  );
}

export function isPlaceType(type: string): type is Type {
  return Object.values(Type).includes(type as Type);
}

export function isSort(sort: string): sort is Sort {
  return Object.values(Sort).includes(sort as Sort);
}

export function isOrder(order: string): order is Order {
  return Object.values(Order).includes(order as Order);
}

export function isTimeSpent(timeSpent: any): timeSpent is TimeSpent {
  return (
    timeSpent &&
    typeof timeSpent.min === "number" &&
    typeof timeSpent.max === "number"
  );
}

export function isDistance(distance: any): distance is Distance {
  return typeof distance === "number" && distance >= 7 && distance <= 15;
}

export function isCoordinates(value: any): value is Coordinates {
  return (
    Array.isArray(value) &&
    value.length === 2 &&
    typeof value[0] === "number" &&
    typeof value[1] === "number"
  );
}

export const getTranslations = <T>(
  obj: I18nTranslation<T>,
  locale: string,
  fb: T
): T => {
  if (isLocale(locale) && obj[locale]) {
    return obj[locale];
  }
  if (obj.en) {
    return obj.en;
  }
  if (obj.tr) {
    return obj.tr;
  }
  return fb;
};

export type PlaceFilterComponents =
  | "city-select"
  | "distance"
  | "features"
  | "time-spent"
  | "query"
  | "is-payed"
  | "types"
  | "review";

export const DistanceDeltas: Record<Distance, DistanceDelta> = {
  7: {
    latitudeDelta: 0.09,
    longitudeDelta: 0.09,
  },
  8: {
    latitudeDelta: 0.1,
    longitudeDelta: 0.1,
  },
  9: {
    latitudeDelta: 0.5,
    longitudeDelta: 0.5,
  },
  10: {
    latitudeDelta: 0.7,
    longitudeDelta: 0.7,
  },
  11: {
    latitudeDelta: 1.1,
    longitudeDelta: 1.1,
  },
  12: {
    latitudeDelta: 1.3,
    longitudeDelta: 1.3,
  },
  13: {
    latitudeDelta: 1.6,
    longitudeDelta: 1.6,
  },
  14: {
    latitudeDelta: 1.9,
    longitudeDelta: 1.9,
  },
  15: {
    latitudeDelta: 2.5,
    longitudeDelta: 2.5,
  },
};

export const findClosestDistance = (delta: DistanceDelta): Distance => {
  let closestDistance: Distance = 7;
  let closestDistanceDelta: DistanceDelta = DistanceDeltas[7];

  for (const distance in DistanceDeltas) {
    const currentDistanceDelta = DistanceDeltas[+distance as Distance];

    const distanceSquared =
      Math.pow(currentDistanceDelta.latitudeDelta - delta.latitudeDelta, 2) +
      Math.pow(currentDistanceDelta.longitudeDelta - delta.longitudeDelta, 2);

    if (
      distanceSquared <
      Math.pow(closestDistanceDelta.latitudeDelta - delta.latitudeDelta, 2) +
        Math.pow(closestDistanceDelta.longitudeDelta - delta.longitudeDelta, 2)
    ) {
      closestDistance = +distance as Distance;
      closestDistanceDelta = currentDistanceDelta;
    }
  }

  return closestDistance;
};

export const IstanbulCoordinates: Coordinates = [41.015137, 28.97953];

export const makeRegion = (
  coordinates: Coordinates,
  delta?: DistanceDelta
): Region => ({
  latitude: coordinates[0],
  longitude: coordinates[1],
  latitudeDelta: delta?.latitudeDelta || DistanceDeltas[10].latitudeDelta,
  longitudeDelta: delta?.longitudeDelta || DistanceDeltas[10].longitudeDelta,
});
