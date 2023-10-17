import {
  Alert,
  AlertIcon,
  AlertText,
  Box,
  FormControl,
  FormControlLabel,
  InfoIcon,
  Input,
  InputField,
  Text,
  VStack,
} from "@gluestack-ui/themed";
import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { usePlaceFilter } from "~contexts/place-filter";
import { deepMerge } from "~utils/object";

function PlaceFilterTimeSpentGroup() {
  const { t } = useTranslation("place");
  const { query, setQuery } = usePlaceFilter();

  const currentValue = useMemo(() => {
    const min = query.filter.timeSpent?.min ?? undefined;
    const max = query.filter.timeSpent?.max ?? undefined;
    return { min, max };
  }, [query.filter.timeSpent]);

  const onMinChange = (val: number) => {
    setQuery(deepMerge(query, { filter: { timeSpent: { min: val } } }));
  };

  const onMaxChange = (val: number) => {
    setQuery(deepMerge(query, { filter: { timeSpent: { max: val } } }));
  };

  return (
    <VStack space="lg">
      <Alert mt="$2" action="info" variant="accent">
        <AlertIcon as={InfoIcon} mr="$3" />
        <AlertText>{t("filter.time-spent.description")}</AlertText>
      </Alert>
      <Box
        sx={{
          flexDirection: "row",
          alignItems: "center",
          mb: 0,
          w: "100%",
        }}
      >
        <Box
          sx={{
            w: "45%",
          }}
        >
          <FormControl size="md">
            <FormControlLabel mb="$1">
              <Text size="sm">{t("filter.time-spent.minText")}</Text>
            </FormControlLabel>
            <Input>
              <InputField
                keyboardType="numeric"
                placeholder={t("filter.time-spent.minText")}
                onChangeText={(w) => onMinChange(+w)}
                value={currentValue.min?.toString()}
              />
            </Input>
          </FormControl>
        </Box>
        <Box
          sx={{
            w: "10%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>-</Text>
        </Box>
        <Box
          sx={{
            w: "45%",
          }}
        >
          <FormControl size="md">
            <FormControlLabel mb="$1">
              <Text size="sm">{t("filter.time-spent.maxText")}</Text>
            </FormControlLabel>
            <Input>
              <InputField
                keyboardType="numeric"
                placeholder={t("filter.time-spent.maxText")}
                onChangeText={(w) => onMaxChange(+w)}
                value={currentValue.max?.toString()}
              />
            </Input>
          </FormControl>
        </Box>
      </Box>
    </VStack>
  );
}

export default PlaceFilterTimeSpentGroup;
