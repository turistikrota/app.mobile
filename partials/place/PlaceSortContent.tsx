import {
  Avatar,
  AvatarBadge,
  Box,
  Button,
  Pressable,
  Text,
  VStack,
  useToken,
} from "@gluestack-ui/themed";
import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { StyleSheet } from "react-native";
import BoxIcon from "~assets/Icons/BoxIcon";
import ScrollableModal from "~components/ScrollableModal";
import { usePlaceFilter } from "~contexts/place-filter";
import { usePlaceSort } from "~hooks/place";
import Loading from "~partials/state/Loading";
import { deepMerge } from "~utils/object";
import PlaceSortOrderGroup from "./sort/PlaceOrderGroup";
import PlaceSortGroup from "./sort/PlaceSortGorup";

type Props = {
  loading: boolean;
};

const PlaceSortContent: React.FC<Props> = ({ loading }) => {
  const color = useToken("colors", "textLight500");
  const [sortModalVisible, setSortModalVisible] = React.useState(false);
  const { defaultOrder, defaultSort } = usePlaceSort();
  const { query, setQuery } = usePlaceFilter();
  const { t } = useTranslation("place");

  const isDefault = useMemo(() => {
    const isSortDefault = query.filter.sort
      ? query.filter.sort == defaultSort
      : true;
    const isOrderDefault = query.filter.order
      ? query.filter.order == defaultOrder
      : true;
    return isSortDefault && isOrderDefault;
  }, [query.filter.sort, query.filter.order]);

  const clear = () => {
    setQuery(
      deepMerge(query, { filter: { sort: defaultSort, order: defaultOrder } })
    );
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
          borderRadius: 0,
          borderWidth: StyleSheet.hairlineWidth,
        }}
        onPress={() => setSortModalVisible(true)}
      >
        <Box>
          <Avatar bgColor="transparent" p={0} size="sm">
            <BoxIcon name="sort" color={color} width={20} height={20} />
            {!isDefault && (
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
        </Box>
        <Text fontSize="$sm">{t("titles.sort")}</Text>
      </Button>
      <ScrollableModal
        isVisible={sortModalVisible}
        setVisible={setSortModalVisible}
        title={t("titles.sort")}
        right={
          isDefault ? undefined : (
            <Pressable onPress={clear}>
              <Text color="$primary500" size="sm">
                {t("sort-by.clear-text")}
              </Text>
            </Pressable>
          )
        }
      >
        <VStack
          space="lg"
          sx={{
            p: "$2",
          }}
        >
          <PlaceSortGroup />
          <PlaceSortOrderGroup />
          <Button
            disabled={loading}
            onPress={() => setSortModalVisible(false)}
            mt="$4"
          >
            <Loading value={loading} color="$white">
              <Text color="$white">{t("filter.apply")}</Text>
            </Loading>
          </Button>
        </VStack>
      </ScrollableModal>
    </>
  );
};

export default PlaceSortContent;
