import {
  Alert,
  AlertIcon,
  AlertText,
  Checkbox,
  CheckboxIndicator,
  CheckboxLabel,
  InfoIcon,
  VStack,
} from "@gluestack-ui/themed";
import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
import BoxIcon from "~assets/Icons/BoxIcon";
import { usePlaceFilter } from "~contexts/place-filter";
import { deepMerge } from "~utils/object";

function PlaceFilterIsPayedGroup() {
  const { query, setQuery } = usePlaceFilter();
  const { t } = useTranslation("place");

  const currentValue = useMemo(() => {
    return query.filter.isPayed;
  }, [query.filter.isPayed]);

  const onPayedChange = (val: boolean) => {
    setQuery(deepMerge(query, { filter: { isPayed: val } }));
  };

  const onFreeChange = (val: boolean) => {
    setQuery(deepMerge(query, { filter: { isPayed: !val } }));
  };

  return (
    <VStack space="lg">
      <Alert mt="$2" action="info" variant="accent">
        <AlertIcon as={InfoIcon} mr="$3" />
        <AlertText>{t("filter.is-payed.description")}</AlertText>
      </Alert>
      <Checkbox
        size="md"
        value={"1"}
        isChecked={currentValue === true}
        justifyContent="space-between"
        aria-label={t("filter.is-payed.label")}
        onChange={onPayedChange}
      >
        <CheckboxLabel>{t("filter.is-payed.label")}</CheckboxLabel>
        <CheckboxIndicator
          mr="$2"
          bgColor={currentValue === true ? "$primary500" : undefined}
        >
          <BoxIcon name="check" width={22} height={22} color={"white"} />
        </CheckboxIndicator>
      </Checkbox>
      <Checkbox
        value={"0"}
        isChecked={currentValue === false}
        justifyContent="space-between"
        aria-label={t("filter.is-free.label")}
        onChange={onFreeChange}
      >
        <CheckboxLabel>{t("filter.is-free.label")}</CheckboxLabel>
        <CheckboxIndicator
          mr="$2"
          bgColor={currentValue === false ? "$primary500" : undefined}
        >
          <BoxIcon name="check" width={22} height={22} color={"white"} />
        </CheckboxIndicator>
      </Checkbox>
    </VStack>
  );
}

export default PlaceFilterIsPayedGroup;
