import {
  Heading,
  Radio,
  RadioGroup,
  RadioIndicator,
  RadioLabel,
  VStack,
} from "@gluestack-ui/themed";
import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
import BoxIcon from "~assets/Icons/BoxIcon";
import { usePlaceFilter } from "~contexts/place-filter";
import { usePlaceSort } from "~hooks/place";
import { Order } from "~types/place";
import { deepMerge } from "~utils/object";

const PlaceSortOrderGroup: React.FC = () => {
  const { defaultOrder, orders } = usePlaceSort();
  const { query, setQuery } = usePlaceFilter();
  const { t } = useTranslation("place");

  const currentOrder = useMemo(() => {
    return query.filter.order ? query.filter.order : defaultOrder;
  }, [query.filter.order]);

  const onSelect = (order: Order) => {
    setQuery(deepMerge(query, { filter: { order } }));
  };
  return (
    <RadioGroup value={currentOrder} onChange={onSelect}>
      <Heading size="md" mb="$2">
        {t("order-by.title")}
      </Heading>
      <VStack space="md">
        {orders.map((order) => (
          <Radio
            value={order}
            key={order}
            size="md"
            justifyContent="space-between"
          >
            <RadioLabel>{t(`order-by.${order}`)}</RadioLabel>
            <RadioIndicator
              mr="$2"
              bgColor={currentOrder === order ? "$primary500" : undefined}
            >
              <BoxIcon name="check" width={22} height={22} color={"white"} />
            </RadioIndicator>
          </Radio>
        ))}
      </VStack>
    </RadioGroup>
  );
};

export default PlaceSortOrderGroup;
