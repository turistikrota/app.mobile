import { Box, View } from "@gluestack-ui/themed";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Services, apiUrl } from "~config/services";
import { PlaceFilterProvider, usePlaceFilter } from "~contexts/place-filter";
import { usePlaceFeatures } from "~hooks/place-feature";
import { useHttpClient } from "~http/client";
import PlaceFilterContent from "~partials/place/PlaceFilterContent";
import PlaceFilterShareContent from "~partials/place/PlaceFilterShareContent";
import PlaceFilterToggleContent from "~partials/place/PlaceFilterToggleContent";
import PlaceList from "~partials/place/PlaceList";
import PlaceMap from "~partials/place/PlaceMap";
import PlaceSortContent from "~partials/place/PlaceSortContent";
import PlaceNotFoundCard from "~partials/place/card/PlaceNotFoundCard";
import PlaceDetail from "~partials/place/detail/PlaceDetail";
import LoadingListItem from "~partials/state/LoadingListItem";
import { getLocale } from "~types/i18n";
import {
  ContentType,
  PlaceListItem,
  TranslationItem,
  getTranslations,
  isPlaceListResponse,
} from "~types/place";
import { ListResponse } from "~types/response";
import debounce from "~utils/debounce";
import { deepMerge } from "~utils/object";

type Props = {
  data: ListResponse<PlaceListItem>;
  loading: boolean;
  type: string;
  onTypeChange: (type: ContentType) => void;
};

const PlaceFilterSection: React.FC<Props> = ({
  data,
  loading,
  type,
  onTypeChange,
}) => {
  return (
    <Box
      sx={{
        width: "100%",
        p: "$2",
        flexDirection: "row",
      }}
    >
      <Box
        sx={{
          w: "$1/6",
        }}
      >
        <PlaceFilterShareContent />
      </Box>
      <Box
        sx={{
          w: "$4/6",
          flexDirection: "row",
        }}
      >
        <PlaceSortContent loading={loading} />
        <PlaceFilterContent data={data} loading={loading} />
      </Box>
      <Box
        sx={{
          w: "$1/6",
        }}
      >
        <PlaceFilterToggleContent type={type} onChange={onTypeChange} />
      </Box>
    </Box>
  );
};

function PlaceListPage() {
  const flatRef = useRef<any>();
  const { t, i18n } = useTranslation("place");
  const [refreshing, setRefreshing] = useState(false);
  const [contentType, setContentType] = React.useState<ContentType>("list");
  const { query, isFiltered, isOnlyPageChanged, isQueryChanged, setQuery } =
    usePlaceFilter();
  const [loading, setLoading] = React.useState<boolean>(true);
  const [data, setData] = React.useState<ListResponse<PlaceListItem>>({
    filteredTotal: 0,
    total: 0,
    isNext: false,
    isPrev: false,
    list: [],
    page: 0,
  });
  const [selected, setSelected] = useState<PlaceListItem | undefined>(
    undefined
  );
  const http = useHttpClient();
  usePlaceFeatures();

  useEffect(() => {
    fetch();
  }, []);

  useEffect(() => {
    if (loading) return;
    debouncedFetch();
  }, [query]);

  const selectedTranslations = useMemo<TranslationItem | undefined>(() => {
    if (!selected) return undefined;
    return getTranslations<TranslationItem>(
      selected.translations,
      getLocale(i18n.language),
      {
        description: "",
        slug: "",
        title: "",
      }
    );
  }, [selected, i18n.language]);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    fetch();
  }, []);

  const fetch = (isNextFetch = false) => {
    setLoading(true);
    http
      .post(
        apiUrl(
          Services.Place,
          `/?page=${isNextFetch && query.page ? query.page : 1}&limit=${
            query.limit ?? 10
          }`
        ),
        query.filter
      )
      .then((res) => {
        if (isPlaceListResponse(res.data)) {
          if (!isNextFetch) {
            flatRef.current?.scrollToOffset({ offset: 0 });
            setData(res.data);
          } else {
            setData({
              ...res.data,
              list: [...data.list, ...res.data.list],
            });
          }
        }
      })
      .catch((err) => {})
      .finally(() => {
        setLoading(false);
        setRefreshing(false);
      });
  };

  const onSelect = (item: PlaceListItem) => {
    setSelected(item);
  };

  const onDeselect = () => {
    setSelected(undefined);
  };

  const debouncedFetch = debounce(() => {
    if (loading) return;
    fetch(!isQueryChanged && isOnlyPageChanged);
  }, 500);

  const onNextPage = () => {
    if (!data.isNext) return;
    setQuery(
      deepMerge(query, {
        page: query.page ? query.page + 1 : 2,
      })
    );
  };
  return (
    <View
      sx={{
        height: "100%",
        bg: "$white",
      }}
    >
      <PlaceDetail
        isVisible={!!selected}
        setVisible={() => onDeselect()}
        locale={i18n.language}
        images={selected?.images}
        title={selectedTranslations?.title}
        slug={selectedTranslations?.slug}
      />
      <PlaceFilterSection
        data={data}
        loading={loading}
        type={contentType}
        onTypeChange={setContentType}
      />
      {contentType === "list" && (
        <>
          {loading && data.list.length === 0 ? <LoadingListItem /> : null}
          {!loading && data.list.length === 0 && (
            <PlaceNotFoundCard
              isFiltered={isFiltered}
              onReset={() => setQuery({ filter: {} })}
            />
          )}
          <PlaceList
            data={data.list}
            loading={loading}
            refreshing={refreshing}
            onSelect={onSelect}
            onNextPage={onNextPage}
            onRefresh={onRefresh}
          />
        </>
      )}
      {contentType === "map" && (
        <PlaceMap data={data.list} loading={loading} onSelect={onSelect} />
      )}
    </View>
  );
}

export default function PlaceListPageWithProvider() {
  return (
    <PlaceFilterProvider>
      <PlaceListPage />
    </PlaceFilterProvider>
  );
}
