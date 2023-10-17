import {
  Alert,
  AlertIcon,
  AlertText,
  InfoIcon,
  Input,
  InputField,
  InputIcon,
  InputSlot,
  SearchIcon,
  VStack,
} from "@gluestack-ui/themed";
import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { usePlaceFilter } from "~contexts/place-filter";
import { deepMerge } from "~utils/object";

function PlaceFilterQueryGroup() {
  const { t } = useTranslation("place");
  const { query, setQuery } = usePlaceFilter();

  const currentQuery = useMemo(() => {
    return query.filter.query ?? "";
  }, [query.filter.query]);

  const onChange = (q: string) => {
    setQuery(deepMerge(query, { filter: { query: q } }));
  };

  return (
    <VStack space="lg">
      <Alert mt="$2" action="info" variant="accent">
        <AlertIcon as={InfoIcon} mr="$3" />
        <AlertText>{t("filter.query.description")}</AlertText>
      </Alert>
      <Input>
        <InputSlot pl="$3">
          <InputIcon as={SearchIcon} />
        </InputSlot>
        <InputField
          placeholder={t("filter.query.placeholder")}
          onChangeText={onChange}
          value={currentQuery}
        />
      </Input>
    </VStack>
  );
}

export default PlaceFilterQueryGroup;
