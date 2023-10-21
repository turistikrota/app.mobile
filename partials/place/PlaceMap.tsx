import { Box, Spinner, View, useToken } from "@gluestack-ui/themed";
import React, { useMemo, useState } from "react";
import MapView, { Marker, Region } from "react-native-maps";
import { useSelector } from "react-redux";
import BoxIcon from "~assets/Icons/BoxIcon";
import { usePlaceFilter } from "~contexts/place-filter";
import { useLocation } from "~hooks/location";
import LoadingListItem from "~partials/state/LoadingListItem";
import { RootState } from "~store";
import {
  Coordinates,
  DistanceDeltas,
  IstanbulCoordinates,
  PlaceListItem,
  findClosestDistance,
  isDistance,
  makeRegion,
} from "~types/place";
import debounce from "~utils/debounce";
import PlaceMapCard from "./card/PlaceMapCard";

type Props = {
  loading: boolean;
  data: PlaceListItem[];
  onSelect: (item: PlaceListItem) => void;
};

const PlaceMap: React.FC<Props> = ({ loading, data, onSelect }) => {
  const { query, setQuery } = usePlaceFilter();
  const locationStore = useSelector((state: RootState) => state.location);
  const [selected, setSelected] = useState<PlaceListItem | null>(null);
  useLocation(locationStore.useForPlaceFilter);
  const markerColor = useToken("colors", "primary500");

  const region = useMemo(() => {
    const zoom = isDistance(query.filter.distance)
      ? DistanceDeltas[query.filter.distance]
      : undefined;
    if (query.filter.coordinates)
      return makeRegion(query.filter.coordinates, zoom);
    if (locationStore.useForPlaceFilter && locationStore.location)
      return makeRegion(locationStore.location, zoom);
    return makeRegion(IstanbulCoordinates, zoom);
  }, [
    query.filter.coordinates,
    locationStore.location,
    locationStore.useForPlaceFilter,
    query.filter.distance,
  ]);

  const debouncedRegionSetter = debounce((newRegion: Region) => {
    if (
      region.latitude === newRegion.latitude &&
      region.longitude === newRegion.longitude &&
      findClosestDistance(region) === findClosestDistance(newRegion)
    )
      return;
    const newQuery = {
      ...query,
      filter: {
        ...query.filter,
        coordinates: [newRegion.latitude, newRegion.longitude] as Coordinates,
        distance: findClosestDistance(newRegion) as number,
      },
    };
    setQuery(newQuery);
  }, 1000);
  return (
    <>
      {locationStore.loading ? (
        <LoadingListItem />
      ) : (
        <>
          <MapView
            style={{
              width: "100%",
              height: "100%",
            }}
            region={region}
            onRegionChange={debouncedRegionSetter}
          >
            {data.map((item, idx) => (
              <Marker
                key={idx}
                coordinate={{
                  latitude: item.coordinates[0],
                  longitude: item.coordinates[1],
                }}
                onSelect={() => setSelected(item)}
                onDeselect={() => setSelected(null)}
              >
                <View>
                  <BoxIcon
                    name="location"
                    color={markerColor}
                    width={30}
                    height={30}
                  />
                </View>
              </Marker>
            ))}
          </MapView>
          {loading && (
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: 8,
                right: 8,
                justifyContent: "center",
                alignItems: "center",
                w: "$full",
              }}
            >
              <Box
                sx={{
                  backgroundColor: "$white",
                  borderRadius: "$sm",
                  p: "$1",
                  w: "$10",
                }}
              >
                <Spinner />
              </Box>
            </Box>
          )}
          {selected && (
            <Box
              sx={{
                position: "absolute",
                bottom: 8,
                left: 8,
                right: 8,
              }}
            >
              <PlaceMapCard
                {...selected}
                onSelect={() => onSelect(selected)}
                onClose={() => setSelected(null)}
              />
            </Box>
          )}
        </>
      )}
    </>
  );
};

export default PlaceMap;
