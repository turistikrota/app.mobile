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
import { useSelector } from "react-redux";
import BoxIcon from "~assets/Icons/BoxIcon";
import { usePlaceFilter } from "~contexts/place-filter";
import LoadingListItem from "~partials/state/LoadingListItem";
import { RootState } from "~store";
import { Locales } from "~types/i18n";
import {
  PlaceFeatureListItemTranslations,
  getTranslations,
} from "~types/place";
import { deepMerge } from "~utils/object";

function PlaceFilterFeaturesGroup() {
  const { query, setQuery } = usePlaceFilter();
  const list = useSelector((state: RootState) => state.place.features.list);
  const isLoading = useSelector(
    (state: RootState) => state.place.features.isLoading
  );
  const { t, i18n } = useTranslation("place");

  const currentFeatures = useMemo(() => {
    return query.filter.featureUUIDs ?? [];
  }, [query.filter.featureUUIDs]);

  const onChange = (featureUUIDs: string[]) => {
    setQuery(deepMerge(query, { filter: { featureUUIDs } }));
  };

  return (
    <VStack space="lg">
      <Alert mt="$2" action="info" variant="accent">
        <AlertIcon as={InfoIcon} mr="$3" />
        <AlertText>{t("filter.features.description")}</AlertText>
      </Alert>
      {isLoading && <LoadingListItem />}
      <ScrollView>
        <CheckboxGroup value={currentFeatures} onChange={onChange}>
          <VStack space="md">
            {(list ?? []).map((feature, idx) => (
              <Checkbox
                value={feature.uuid}
                key={feature.uuid}
                size="md"
                justifyContent="space-between"
                aria-label={t("filter.features.select")}
              >
                <CheckboxLabel>
                  {
                    getTranslations<PlaceFeatureListItemTranslations>(
                      feature.translations,
                      i18n.language as Locales,
                      {
                        title: "",
                        description: "",
                      }
                    )?.title
                  }
                </CheckboxLabel>
                <CheckboxIndicator
                  mr="$2"
                  bgColor={
                    currentFeatures.includes(feature.uuid)
                      ? "$primary500"
                      : undefined
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

export default PlaceFilterFeaturesGroup;
