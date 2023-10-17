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
import { Sort } from "~types/place";
import { deepMerge } from "~utils/object";

const PlaceSortGroup: React.FC = () => {
  const { defaultSort, sorts } = usePlaceSort();
  const { query, setQuery } = usePlaceFilter();
  const { t } = useTranslation("place");

  const currentSort = useMemo(() => {
    return query.filter.sort ? query.filter.sort : defaultSort;
  }, [query.filter.sort]);

  const onSelect = (sort: Sort) => {
    setQuery(deepMerge(query, { filter: { sort } }));
  };
  return (
    <RadioGroup value={currentSort} onChange={onSelect}>
      <Heading size="md" mb="$2">
        {t("sort-by.title")}
      </Heading>
      <VStack space="md">
        {sorts.map((sort, index) => (
          <Radio
            key={index}
            value={sort}
            size="md"
            justifyContent="space-between"
          >
            <RadioLabel>{t(`sort-by.${sort}`)}</RadioLabel>
            <RadioIndicator
              mr="$2"
              bgColor={currentSort === sort ? "$primary500" : undefined}
            >
              <BoxIcon name="check" width={22} height={22} color={"white"} />
            </RadioIndicator>
          </Radio>
        ))}
      </VStack>
    </RadioGroup>
  );
};

export default PlaceSortGroup;
