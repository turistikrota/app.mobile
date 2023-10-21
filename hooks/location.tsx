import * as Location from "expo-location";
import { useEffect, useState } from "react";
import cities, { City } from "~static/location/cities";
import { Coordinates } from "~types/place";

export const useCities = (filter: string | null): City[] => {
  if (filter === null) {
    return cities;
  }
  return cities.filter((city: City) => {
    return city.name
      .toLocaleLowerCase("tr")
      .includes(filter.toLocaleLowerCase("tr"));
  });
};

type LocationHookResult = {
  loading: boolean;
  location?: Coordinates;
};

export const useLocation = (): LocationHookResult => {
  const [loading, setLoading] = useState(false);
  const [location, setLocation] = useState<Coordinates | undefined>(undefined);

  useEffect(() => {
    askPermission();
  }, []);

  const askPermission = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") return setLoading(false);
    const location = await Location.getCurrentPositionAsync({});
    setLocation([location.coords.latitude, location.coords.longitude]);
  };

  return {
    loading,
    location,
  };
};
