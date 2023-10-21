import * as Location from "expo-location";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import cities, { City } from "~static/location/cities";
import { setLoading, setLocation } from "~store/location.store";
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
  askPermission: () => Promise<Coordinates | undefined>;
};

export const useLocation = (askInit?: boolean): LocationHookResult => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!askInit) return;
    askPermission();
  }, [askInit]);

  const askPermission = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      dispatch(setLoading(false));
      return;
    }
    const location = await Location.getCurrentPositionAsync({});
    dispatch(
      setLocation([location.coords.longitude, location.coords.latitude])
    );
    dispatch(setLoading(false));
    return [location.coords.longitude, location.coords.latitude] as Coordinates;
  };

  return {
    askPermission,
  };
};
