import { Box, ScrollView, VStack, View } from "@gluestack-ui/themed";
import React, { useEffect } from "react";
import { Services, apiUrl } from "~config/services";
import { PlaceFilterProvider, usePlaceFilter } from "~contexts/place-filter";
import { useAlert } from "~hooks/alert";
import { usePlaceFeatures } from "~hooks/place-feature";
import { useHttpClient } from "~http/client";
import PlaceFilterContent from "~partials/place/PlaceFilterContent";
import PlaceFilterShareContent from "~partials/place/PlaceFilterShareContent";
import PlaceSortContent from "~partials/place/PlaceSortContent";
import PlaceListCard from "~partials/place/card/PlaceListCard";
import { PlaceListItem, isPlaceListResponse } from "~types/place";
import { ListResponse } from "~types/response";
import debounce from "~utils/debounce";

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
  const [contentType, setContentType] = React.useState<ContentType>("list");
  const { query } = usePlaceFilter();
  const [loading, setLoading] = React.useState<boolean>(false);
  const [data, setData] = React.useState<ListResponse<PlaceListItem>>({
    filteredTotal: 0,
    total: 0,
    isNext: false,
    isPrev: false,
    list: [],
    page: 0,
  });
  const http = useHttpClient();
  const alert = useAlert();
  usePlaceFeatures();

  useEffect(() => {
    if (loading) return;
    debouncedFetch();
  }, [query]);

  const fetch = () => {
    setLoading(true);
    http
      .post(
        apiUrl(
          Services.Place,
          `/?page=${query.page ?? 1}&limit=${query.page ?? 10}`
        ),
        query.filter
      )
      .then((res) => {
        if (isPlaceListResponse(res.data)) {
          if (!query.page || query.page === 1) {
            setData(res.data);
          } else {
            setData((prev) => ({
              ...res.data,
              list: [...prev.list, ...res.data.list],
            }));
          }
        }
      })
      .catch((err) => {
        // debuggg
        alert.alert(JSON.stringify(err));
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const debouncedFetch = debounce(() => {
    if (loading) return;
    fetch();
  }, 500);
  return (
    <View
      sx={{
        height: "100%",
        bg: "$white",
      }}
    >
      <ScrollView>
        <PlaceFilterSection data={data} loading={loading} />
        <VStack space="2xl">
          {data.list.map((li, index) => (
            <PlaceListCard key={index} {...li} />
          ))}
        </VStack>
      </ScrollView>
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
