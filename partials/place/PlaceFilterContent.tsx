import { useToken } from "@gluestack-style/react";
import { Avatar, AvatarBadge, Button, Text, View } from "@gluestack-ui/themed";
import React, { Suspense, lazy, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { Pressable, StyleSheet } from "react-native";
import BoxIcon from "~assets/Icons/BoxIcon";
import ScrollableModal from "~components/ScrollableModal";
import {
  ContentProps,
  PlaceFilterComponents,
  PlaceFilterRequest,
} from "~types/place";

import { FC } from "react";
import { usePlaceFilter } from "~contexts/place-filter";
import Loading from "~partials/state/Loading";
import LoadingListItem from "~partials/state/LoadingListItem";
import PlaceFilterMenu from "./filter/PlaceFilterMenu";

type CloseableProps = {
  onClose: () => void;
};

type Props = ContentProps;

const Components: Record<PlaceFilterComponents, FC<CloseableProps>> = {
  review: lazy(() => import("./filter/PlaceFilterReviewGroup")),
  distance: lazy(() => import("./filter/PlaceFilterDistanceGroup")),
  "city-select": lazy(() => import("./filter/PlaceFilterCityGroup")),
  features: lazy(() => import("./filter/PlaceFilterFeaturesGroup")),
  "time-spent": lazy(() => import("./filter/PlaceFilterTimeSpentGroup")),
  query: lazy(() => import("./filter/PlaceFilterQueryGroup")),
  "is-payed": lazy(() => import("./filter/PlaceFilterIsPayedGroup")),
  types: lazy(() => import("./filter/PlaceFilterTypeGroup")),
};

const PlaceFilterContent: React.FC<Props> = ({ data, loading }) => {
  const { t } = useTranslation("place");
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const color = useToken("colors", "textLight500");
  const { query, isFiltered, setQuery } = usePlaceFilter();
  const [filterModalVisible, setFilterModalVisible] = React.useState(false);
  const [filterComponent, setFilterComponent] =
    useState<PlaceFilterComponents | null>(null);
  const [title, setTitle] = useState<string | null>(null);
  const [key, setKey] = useState<keyof PlaceFilterRequest | null>(null);

  const clean = () => {
    setQuery({ filter: {} });
  };

  const onOpenFilter = (
    component: PlaceFilterComponents,
    key: keyof PlaceFilterRequest
  ) => {
    setIsDetailOpen(true);
    setFilterComponent(component);
    setKey(key);
    setTitle(t(`filter.${component}.title`));
  };

  const onCloseDetail = () => {
    setFilterComponent(null);
    setTitle(null);
    setKey(null);
    setIsDetailOpen(false);
  };

  const onClearFilter = () => {
    clean();
    setIsDetailOpen(false);
  };

  const ActiveComponent = useMemo(() => {
    return filterComponent ? Components[filterComponent] : null;
  }, [filterComponent]);

  const checkModalCloseable = () => {
    if (isDetailOpen) {
      setIsDetailOpen(false);
      return false;
    }
    return true;
  };

  const closeAll = () => {
    setFilterComponent(null);
    setTitle(null);
    setKey(null);
    setIsDetailOpen(false);
    setFilterModalVisible(false);
  };

  return (
    <>
      <Button
        size="md"
        variant="outline"
        sx={{
          w: "$1/2",
          borderColor: "$borderDark400",
          gap: "$2",
          borderTopLeftRadius: 0,
          borderBottomLeftRadius: 0,
          borderLeftWidth: 0,
          borderWidth: StyleSheet.hairlineWidth,
        }}
        onPress={() => setFilterModalVisible(true)}
      >
        <Avatar bgColor="transparent" p={0} size="sm">
          <BoxIcon name="filter" color={color} width={20} height={20} />
          {isFiltered && (
            <AvatarBadge
              bgColor="$primary500"
              w="$2"
              h="$2"
              top={3}
              right={3}
              borderRadius={"$full"}
              maxHeight="$2"
              minHeight="$2"
            />
          )}
        </Avatar>
        <Text fontSize="$sm">{t("titles.filter")}</Text>
      </Button>
      <ScrollableModal
        isVisible={filterModalVisible}
        setVisible={setFilterModalVisible}
        backGuard={checkModalCloseable}
        leftIconName={isDetailOpen ? "arrow-back" : "x"}
        right={
          !isFiltered ? undefined : (
            <Pressable onPress={clean}>
              <Text color="$primary500" size="sm">
                {t("filter.clean")}
              </Text>
            </Pressable>
          )
        }
        title={title ? title : t("titles.filter")}
      >
        <View sx={{ p: "$2" }}>
          {isDetailOpen && ActiveComponent ? (
            <>
              <Suspense fallback={<LoadingListItem />}>
                <ActiveComponent onClose={onCloseDetail} />
                <Button disabled={loading} onPress={onCloseDetail} mt="$4">
                  <Loading value={loading} color="$white">
                    <Text color="$white"> {t("filter.apply")}</Text>
                  </Loading>
                </Button>
              </Suspense>
            </>
          ) : (
            <>
              <PlaceFilterMenu onOpen={onOpenFilter} />
              {isFiltered && (
                <Button disabled={loading} onPress={closeAll} mt="$4">
                  <Loading value={loading} color="$white">
                    <Text color="$white">
                      {t("filter.see-results", {
                        count: data?.filteredTotal ?? 0,
                      })}
                    </Text>
                  </Loading>
                </Button>
              )}
            </>
          )}
        </View>
      </ScrollableModal>
    </>
  );
};

export default PlaceFilterContent;
