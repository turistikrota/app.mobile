import {
  Alert,
  AlertIcon,
  AlertText,
  Box,
  Checkbox,
  CheckboxIndicator,
  CheckboxLabel,
  InfoIcon,
  Input,
  InputField,
  InputIcon,
  InputSlot,
  Radio,
  RadioGroup,
  RadioIndicator,
  RadioLabel,
  SearchIcon,
  VStack,
} from "@gluestack-ui/themed";
import React, { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { FlatList, ListRenderItem } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import BoxIcon from "~assets/Icons/BoxIcon";
import { usePlaceFilter } from "~contexts/place-filter";
import { useCities, useLocation } from "~hooks/location";
import {
  City,
  findCityByCoordinates,
  findCityByName,
} from "~static/location/cities";
import { RootState } from "~store";
import { setUseForPlaceFilter } from "~store/location.store";
import { Coordinates } from "~types/place";

function PlaceFilterCityGroup() {
  const { t } = useTranslation("place");
  const [search, setSearch] = useState("");
  const cities = useCities(search);
  const [renderCount, setRenderCount] = useState(20);
  const { query, setQuery } = usePlaceFilter();
  const dispatch = useDispatch();
  const locationStore = useSelector((state: RootState) => state.location);
  const { askPermission } = useLocation(false);

  const currentCity = useMemo<undefined | string>(() => {
    if (!query.filter.coordinates) return;
    const name = findCityByCoordinates(query.filter.coordinates)?.name;
    return name;
  }, [query.filter.coordinates]);

  const onLocationChange = async (val: boolean) => {
    dispatch(setUseForPlaceFilter(val));
    let coordinates = undefined;
    if (val) {
      coordinates = await askPermission().catch(() => undefined);
    }
    const newQuery = {
      ...query,
      filter: {
        ...query.filter,
        coordinates: coordinates,
      },
    };
    setQuery(newQuery);
  };

  const onSelect = (cityName: string | undefined) => {
    let coordinates: Coordinates | undefined = undefined;
    if (cityName) {
      const city = findCityByName(cityName);
      if (city) {
        coordinates = city.coordinates as Coordinates;
      }
    }
    const newQuery = {
      ...query,
      filter: { ...query.filter, coordinates },
    };
    setQuery(newQuery);
  };

  const renderMore = () => {
    if (renderCount >= cities.length) return;
    setRenderCount((prev) => prev + 20);
  };

  const renderItem: ListRenderItem<City> = ({ item: city }) => (
    <Radio
      value={city.name}
      key={city.name}
      size="md"
      justifyContent="space-between"
      mt={"$2"}
      mb={"$2"}
    >
      <RadioLabel>{city.name}</RadioLabel>
      <RadioIndicator
        mr="$2"
        bgColor={currentCity === city.name ? "$primary500" : undefined}
      >
        <BoxIcon name="check" width={22} height={22} color={"white"} />
      </RadioIndicator>
    </Radio>
  );
  return (
    <VStack space="lg">
      <Alert mt="$2" action="info" variant="accent">
        <AlertIcon as={InfoIcon} mr="$3" />
        <AlertText>{t("filter.city-select.description")}</AlertText>
      </Alert>
      <Checkbox
        size="md"
        value={"1"}
        isChecked={locationStore.location && locationStore.useForPlaceFilter}
        justifyContent="space-between"
        aria-label={t("filter.location.label")}
        onChange={onLocationChange}
      >
        <CheckboxLabel>{t("filter.location.label")}</CheckboxLabel>
        <CheckboxIndicator
          mr="$2"
          bgColor={
            locationStore.location && locationStore.useForPlaceFilter
              ? "$primary500"
              : undefined
          }
        >
          <BoxIcon name="check" width={22} height={22} color={"white"} />
        </CheckboxIndicator>
      </Checkbox>
      {(!locationStore.location || !locationStore.useForPlaceFilter) && (
        <>
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
              h: "$56",
            }}
          >
            <RadioGroup value={currentCity ?? ""} onChange={onSelect}>
              <FlatList
                data={cities.slice(0, renderCount)}
                renderItem={renderItem}
                onEndReached={renderMore}
                keyExtractor={(item) => item.name}
              ></FlatList>
            </RadioGroup>
          </Box>
        </>
      )}
    </VStack>
  );
}

export default PlaceFilterCityGroup;
