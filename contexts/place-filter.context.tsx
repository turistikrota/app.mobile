import { useLocalSearchParams } from "expo-router";
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { PaginationRequest } from "~types/pagination";
import { PlaceFilterRequest, PlaceSearchParams } from "~types/place";
import { deepEqual, findDiff } from "~utils/object";
import { getQueryByKeyBindings, toQueryString } from "~utils/place";

type PlaceFilterContextType = {
  query: PaginationRequest<PlaceFilterRequest>;
  setQuery: React.Dispatch<
    React.SetStateAction<PaginationRequest<PlaceFilterRequest>>
  >;
  isQueryChanged: boolean;
  isOnlyPageChanged: boolean;
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
  const [isQueryChanged, setIsQueryChanged] = useState(false);
  const [isOnlyPageChanged, setIsOnlyPageChanged] = useState(false);
  const searchParams = useLocalSearchParams<PlaceSearchParams>();

  const setAllQueries = useCallback(
    (newQuery: PaginationRequest<PlaceFilterRequest>) => {
      const oldQuery = { ...query };
      setQuery(newQuery);
      if (deepEqual(oldQuery, newQuery)) {
        return;
      }
      const diff = Object.keys(findDiff(oldQuery, newQuery));
      if (diff.length === 1 && diff.includes("page")) {
        setIsOnlyPageChanged(true);
        setIsQueryChanged(false);
        return;
      } else if (diff.length === 0 && !deepEqual(oldQuery, newQuery)) {
        setIsOnlyPageChanged(false);
        setIsQueryChanged(false);
        return;
      }
      setIsOnlyPageChanged(false);
      setIsQueryChanged(true);
    },
    []
  );

  useEffect(() => {
    const newQuery = getQueryByKeyBindings(searchParams);
    if (
      query.page === newQuery.page &&
      !deepEqual(query.filter, newQuery.filter)
    ) {
      newQuery.page = 1;
    }
    if (query && toQueryString(query) === toQueryString(newQuery)) return;
    setAllQueries(newQuery);
  }, [searchParams]);

  const contextValue = useMemo(() => {
    return {
      query,
      setQuery,
      isQueryChanged,
      isOnlyPageChanged,
    };
  }, [query, setQuery, isQueryChanged, isOnlyPageChanged]);

  return (
    <PlaceFilterContext.Provider value={contextValue}>
      {children}
    </PlaceFilterContext.Provider>
  );
};
