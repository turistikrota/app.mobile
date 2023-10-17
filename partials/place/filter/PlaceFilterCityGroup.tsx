import {
  Box,
  Input,
  InputField,
  InputIcon,
  InputSlot,
  Radio,
  RadioGroup,
  RadioIndicator,
  RadioLabel,
  ScrollView,
  SearchIcon,
  VStack,
} from "@gluestack-ui/themed";
import React, { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import BoxIcon from "~assets/Icons/BoxIcon";
import { usePlaceFilter } from "~contexts/place-filter";
import { useCities } from "~hooks/location";
import { findCityByCoordinates, findCityByName } from "~static/location/cities";
import { Coordinates } from "~types/place";
import { deepMerge } from "~utils/object";

function PlaceFilterCityGroup() {
  const { t } = useTranslation("place");
  const [search, setSearch] = useState("");
  const cities = useCities(search);
  const { query, setQuery } = usePlaceFilter();

  const currentCity = useMemo<undefined | string>(() => {
    if (!query.filter.coordinates) return;
    const name = findCityByCoordinates(query.filter.coordinates)?.name;
    return name;
  }, [query.filter.coordinates]);

  const onSelect = (cityName: string | undefined) => {
    let coordinates: Coordinates | undefined = undefined;
    if (cityName) {
      const city = findCityByName(cityName);
      if (city) {
        coordinates = city.coordinates as Coordinates;
      }
    }
    setQuery(deepMerge(query, { filter: { coordinates } }));
  };
  return (
    <VStack space="lg">
      <Input>
        <InputSlot pl="$3">
          <InputIcon as={SearchIcon} />
        </InputSlot>
        <InputField
          placeholder={t("filter.city-select.placeholder")}
          onChangeText={(text) => setSearch(text)}
          value={search}
        />
      </Input>
      <Box
        sx={{
          h: "$96",
        }}
      >
        <ScrollView>
          <RadioGroup value={currentCity ?? ""} onChange={onSelect}>
            <VStack space="md">
              {cities.map((city, idx) => (
                <Radio
                  value={city.name}
                  key={city.name}
                  size="md"
                  justifyContent="space-between"
                >
                  <RadioLabel>{city.name}</RadioLabel>
                  <RadioIndicator
                    mr="$2"
                    bgColor={
                      currentCity === city.name ? "$primary500" : undefined
                    }
                  >
                    <BoxIcon
                      name="check"
                      width={22}
                      height={22}
                      color={"white"}
                    />
                  </RadioIndicator>
                </Radio>
              ))}
            </VStack>
          </RadioGroup>
          <Box h="$2"></Box>
        </ScrollView>
      </Box>
    </VStack>
  );
}

export default PlaceFilterCityGroup;
