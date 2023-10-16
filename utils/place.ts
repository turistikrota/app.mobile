import { PaginationRequest } from "~types/pagination";
import { PlaceFilterRequest, PlaceSearchParams, Type, isDistance, isOrder, isPlaceType, isSort } from "~types/place";

export const getQueryByKeyBindings = (searchParams: PlaceSearchParams) => {
    const query: PaginationRequest<PlaceFilterRequest> = { filter: {} };
    const keyBindings = {
      page: (value: string) => {
        const val = parseInt(value);
        if (!isNaN(val)) {
          query.page = val;
        }
      },
      limit: (value: string) => {
        const val = parseInt(value);
        if (!isNaN(val)) {
          query.limit = val;
        }
      },
      lat: (value: string) => {
        const { lng } = searchParams;
        if (lng) {
          const lat = parseFloat(value);
          const lng2 = parseFloat(lng);
          if (!isNaN(lat) && !isNaN(lng2)) {
            query.filter.coordinates = [lat, lng2];
          }
        }
      },
      lng: (value: string) => {
        const { lat } = searchParams;
        if (lat) {
          const lng = parseFloat(value);
          const lat2 = parseFloat(lat);
          if (!isNaN(lng) && !isNaN(lat2)) {
            query.filter.coordinates = [lat2, lng];
          }
        }
      },
      features: (value: string) => {
        query.filter.featureUUIDs = value.split(",");
      },
      types: (value: string) => {
        const list = value.split(",");
        const types: Type[] = list.filter((type) => isPlaceType(type)) as Type[];
        if (types.length > 0) {
          query.filter.types = types;
        }
      },
      pay: (value: string) => {
        if (["on", "off"].includes(value)) {
          if (value === "on") {
            query.filter.isPayed = true;
          } else if (value === "off") {
            query.filter.isPayed = false;
          } else {
            query.filter.isPayed = undefined;
          }
        }
      },
      dist: (value: string) => {
        const val = parseInt(value);
        if (!isNaN(val) && isDistance(val)) {
          query.filter.distance = val;
        }
      },
      time: (value: string) => {
        const [min, max] = value.split(",");
        const minVal = parseInt(min);
        const maxVal = parseInt(max);
        if (!isNaN(minVal) && !isNaN(maxVal) && minVal < maxVal) {
          query.filter.timeSpent = {
            min: minVal,
            max: maxVal,
          };
        }
      },
      minRev: (value: string) => {
        const val = parseInt(value);
        if (!isNaN(val)) {
          query.filter.minReview = val;
        }
      },
      maxRev: (value: string) => {
        const val = parseInt(value);
        if (!isNaN(val)) {
          query.filter.maxReview = val;
        }
      },
      minPoint: (value: string) => {
        const val = parseInt(value);
        if (!isNaN(val)) {
          query.filter.minAveragePoint = val;
        }
      },
      maxPoint: (value: string) => {
        const val = parseInt(value);
        if (!isNaN(val)) {
          query.filter.maxAveragePoint = val;
        }
      },
      q: (value: string) => {
        query.filter.query = value;
      },
      sort: (value: string) => {
        if (isSort(value)) {
          query.filter.sort = value;
          return;
        }
        query.filter.sort = undefined;
      },
      order: (value: string) => {
        if (isOrder(value)) {
          query.filter.order = value;
          return;
        }
        query.filter.order = undefined;
      },
    };
    Object.keys(searchParams).forEach((key) => {
      if (key in keyBindings) {
        const val = searchParams[key as keyof typeof searchParams];
        keyBindings[key as keyof typeof keyBindings](val as string);
      }
    });
    return query;
  };
  
  export const toQueryString = (
    place: PaginationRequest<PlaceFilterRequest>
  ): string => {
    const query = new URLSearchParams();
    if (place.page) {
      query.append("page", place.page.toString());
    }
    if (place.limit) {
      query.append("limit", place.limit.toString());
    }
    if (place.filter.coordinates) {
      const [lat, lng] = place.filter.coordinates;
      query.append("lat", lat.toString());
      query.append("lng", lng.toString());
    }
    if (place.filter.featureUUIDs) {
      query.append("features", place.filter.featureUUIDs.join(","));
    }
    if (place.filter.types) {
      query.append("types", place.filter.types.join(","));
    }
    if (place.filter.isPayed !== undefined) {
      query.append("pay", place.filter.isPayed ? "on" : "off");
    }
    if (place.filter.distance) {
      query.append("dist", place.filter.distance.toString());
    }
    if (place.filter.timeSpent) {
      const { min, max } = place.filter.timeSpent;
      query.append("time", `${min},${max}`);
    }
    if (place.filter.minReview) {
      query.append("minRev", place.filter.minReview.toString());
    }
    if (place.filter.maxReview) {
      query.append("maxRev", place.filter.maxReview.toString());
    }
    if (place.filter.minAveragePoint) {
      query.append("minPoint", place.filter.minAveragePoint.toString());
    }
    if (place.filter.maxAveragePoint) {
      query.append("maxPoint", place.filter.maxAveragePoint.toString());
    }
    if (place.filter.query) {
      query.append("q", place.filter.query);
    }
    if (place.filter.sort) {
      query.append("sort", place.filter.sort);
    }
    if (place.filter.order) {
      query.append("order", place.filter.order);
    }
    return query.toString();
  };