import {
  Alert,
  AlertIcon,
  AlertText,
  InfoIcon,
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
import { deepMerge } from "~utils/object";
import { DistanceLabels } from "~utils/place";

const DefaultDistance = 10;

function PlaceFilterDistanceGroup() {
  const { t } = useTranslation("place");
  const { query, setQuery } = usePlaceFilter();

  const currentDistance = useMemo(() => {
    if (!query.filter.distance) return DefaultDistance;
    return query.filter.distance;
  }, [query.filter.distance]);

  const onSelect = (dist: string | undefined) => {
    setQuery(
      deepMerge(query, { filter: { distance: dist ? +dist : undefined } })
    );
  };

  return (
    <VStack space="lg">
      <Alert mt="$2" action="info" variant="accent">
        <AlertIcon as={InfoIcon} mr="$3" />
        <AlertText>{t("filter.distance.description")}</AlertText>
      </Alert>
      <RadioGroup value={`${currentDistance}`} onChange={onSelect}>
        <VStack space="lg">
          {Object.entries(DistanceLabels).map(([dist, label]) => (
            <Radio
              value={dist}
              key={dist}
              size="md"
              justifyContent="space-between"
            >
              <RadioLabel>{label}</RadioLabel>
              <RadioIndicator
                mr="$2"
                bgColor={currentDistance === +dist ? "$primary500" : undefined}
              >
                <BoxIcon name="check" width={22} height={22} color={"white"} />
              </RadioIndicator>
            </Radio>
          ))}
        </VStack>
      </RadioGroup>
    </VStack>
  );
}

export default PlaceFilterDistanceGroup;
