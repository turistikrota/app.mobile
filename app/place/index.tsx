import { Box, View } from "@gluestack-ui/themed";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { FlatList } from "react-native";
import { Services, apiUrl } from "~config/services";
import { PlaceFilterProvider, usePlaceFilter } from "~contexts/place-filter";
import { usePlaceFeatures } from "~hooks/place-feature";
import { useHttpClient } from "~http/client";
import PlaceFilterContent from "~partials/place/PlaceFilterContent";
import PlaceFilterShareContent from "~partials/place/PlaceFilterShareContent";
import PlaceSortContent from "~partials/place/PlaceSortContent";
import PlaceListCard from "~partials/place/card/PlaceListCard";
import PlaceDetail from "~partials/place/detail/PlaceDetail";
import { getLocale } from "~types/i18n";
import {
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
};

const PlaceFilterSection: React.FC<Props> = ({ data, loading }) => {
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
          w: "$5/6",
          flexDirection: "row",
        }}
      >
        <PlaceSortContent loading={loading} />
        <PlaceFilterContent data={data} loading={loading} />
      </Box>
    </Box>
  );
};

type ContentType = "map" | "list";

function PlaceListPage() {
  const flatRef = useRef<any>();
  const { t, i18n } = useTranslation("place");
  const [contentType, setContentType] = React.useState<ContentType>("list");
  const { query, isOnlyPageChanged, isQueryChanged, setQuery } =
    usePlaceFilter();
  const [loading, setLoading] = React.useState<boolean>(false);
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

  const nextPage = () => {
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
      <PlaceFilterSection data={data} loading={loading} />
      <FlatList
        ref={flatRef}
        data={data.list}
        renderItem={({ item }) => (
          <PlaceListCard {...item} onSelect={() => onSelect(item)} />
        )}
        onEndReached={nextPage}
      />
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
