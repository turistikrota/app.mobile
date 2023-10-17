import {
  Alert,
  AlertIcon,
  AlertText,
  Checkbox,
  CheckboxGroup,
  CheckboxIndicator,
  CheckboxLabel,
  InfoIcon,
  ScrollView,
  VStack,
} from "@gluestack-ui/themed";
import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
import BoxIcon from "~assets/Icons/BoxIcon";
import { usePlaceFilter } from "~contexts/place-filter";
import { Type } from "~types/place";

const types = Object.values(Type);

function PlaceFilterTypeGroup() {
  const { query, setQuery } = usePlaceFilter();
  const { t } = useTranslation("place");

  const currentTypes = useMemo(() => {
    return query.filter.types ?? [];
  }, [query.filter.types]);

  const onChange = (types: Type[]) => {
    setQuery({ filter: { types } });
  };

  return (
    <VStack space="lg">
      <Alert mt="$2" action="info" variant="accent">
        <AlertIcon as={InfoIcon} mr="$3" />
        <AlertText>{t("filter.types.description")}</AlertText>
      </Alert>
      <ScrollView>
        <CheckboxGroup value={currentTypes} onChange={onChange}>
          <VStack space="md">
            {types.map((type, idx) => (
              <Checkbox
                value={type}
                key={type}
                size="md"
                justifyContent="space-between"
                aria-label={t(`types.${type}`)}
              >
                <CheckboxLabel>{t(`types.${type}`)}</CheckboxLabel>
                <CheckboxIndicator
                  mr="$2"
                  bgColor={
                    currentTypes.includes(type) ? "$primary500" : undefined
                  }
                >
                  <BoxIcon
                    name="check"
                    width={22}
                    height={22}
                    color={"white"}
                  />
                </CheckboxIndicator>
              </Checkbox>
            ))}
          </VStack>
        </CheckboxGroup>
      </ScrollView>
    </VStack>
  );
}

export default PlaceFilterTypeGroup;
