import { useLocalSearchParams } from "expo-router";
import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { PaginationRequest } from "~types/pagination";
import { PlaceFilterRequest, PlaceSearchParams } from "~types/place";
import { deepEqual } from "~utils/object";
import { getQueryByKeyBindings, toQueryString } from "~utils/place";

type PlaceFilterContextType = {
  query: PaginationRequest<PlaceFilterRequest>;
  setQuery: (q: PaginationRequest<PlaceFilterRequest>) => void;
  isFiltered: boolean;
};

const PlaceFilterContext = createContext<PlaceFilterContextType | undefined>(
  undefined
);

export const usePlaceFilter = (): PlaceFilterContextType => {
  const context = useContext(PlaceFilterContext);
  if (!context) {
    throw new Error("usePlaceFilter must be used within a PlaceFilterProvider");
  }
  return context;
};

export const PlaceFilterProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [query, setQuery] = useState<PaginationRequest<PlaceFilterRequest>>({
    filter: {},
  });
  const searchParams = useLocalSearchParams<PlaceSearchParams>();

  useEffect(() => {
    const newQuery = getQueryByKeyBindings(searchParams);
    if (
      query.page === newQuery.page &&
      !deepEqual(query.filter, newQuery.filter)
    ) {
      newQuery.page = 1;
    }
    if (query && toQueryString(query) === toQueryString(newQuery)) return;
    setQuery(newQuery);
  }, []);

  const contextValue = useMemo(() => {
    return {
      query,
      setQuery,
      isFiltered:
        Object.keys(query.filter).filter((q) => !["sort", "order"].includes(q))
          .length > 0,
    };
  }, [query, setQuery]);

  return (
    <PlaceFilterContext.Provider value={contextValue}>
      {children}
    </PlaceFilterContext.Provider>
  );
};
