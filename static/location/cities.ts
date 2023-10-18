import { Coordinates } from "~types/place";
import { turkishSorting } from "~utils/sort";
import cities from "./tr-city-names.json";

export type City = (typeof cities)[0];

export default cities.sort((a, b) => turkishSorting(a.name, b.name));

export const findCityByName = (name: string): City | null => {
  const city = cities.find((city) => city.name === name);
  return city || null;
};

export const findCityByCoordinates = (
  coordinates: Coordinates
): City | null => {
  const city = cities.find(
    (city) =>
      city.coordinates[0] === coordinates[0] &&
      city.coordinates[1] === coordinates[1]
  );
  if (city) return city;
  return null;
};

const getDistanceFromLatLonInKm = (
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
) => {
  const R = 6371; // Yeryüzü ortalama yarıçapı (km)
  const dLat = deg2rad(lat2 - lat1);
  const dLon = deg2rad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) *
      Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c;
  return distance;
};

const deg2rad = (deg: number): number => {
  return deg * (Math.PI / 180);
};

export const findNearestCity = (coordinates: Coordinates): City | null => {
  let nearestCity = null;
  let minDistance = Number.MAX_VALUE;

  for (const city of cities) {
    const distance = getDistanceFromLatLonInKm(
      coordinates[0],
      coordinates[1],
      city.coordinates[0],
      city.coordinates[1]
    );
    if (distance < minDistance) {
      minDistance = distance;
      nearestCity = city;
    }
  }
  return nearestCity;
};

type BestOfBestEntity = {
  [key: string]: {
    city: City;
    distance: number;
  };
};

export const findBestOfBestNearestCities = (
  coordinates: Coordinates,
  cityCount: number
): City[] => {
  const data: BestOfBestEntity = {};
  const minimumDistances = [];
  for (const city of cities) {
    const distance = getDistanceFromLatLonInKm(
      coordinates[0],
      coordinates[1],
      city.coordinates[0],
      city.coordinates[1]
    );
    if (minimumDistances.length <= cityCount) {
      minimumDistances.push(distance);
      data[distance] = { city, distance };
    } else {
      const maxDistance = Math.max(...minimumDistances);
      if (distance < maxDistance) {
        minimumDistances.splice(minimumDistances.indexOf(maxDistance), 1);
        minimumDistances.push(distance);
        delete data[maxDistance];
        data[distance] = { city, distance };
      }
    }
  }
  return Object.values(data)
    .sort((a, b) => a.distance - b.distance)
    .slice(0, cityCount)
    .map((entry) => entry.city);
};

export const findBestNearestCities = (
  coordinates: Coordinates,
  count: number
): City[] => {
  let nearestCities = [];
  let minDistance = Number.MAX_VALUE;

  for (const city of cities) {
    const distance = getDistanceFromLatLonInKm(
      coordinates[0],
      coordinates[1],
      city.coordinates[0],
      city.coordinates[1]
    );
    if (distance < minDistance) {
      minDistance = distance;
      nearestCities.push(city);
    }
  }
  nearestCities = nearestCities.sort((a, b) => {
    const distanceA = getDistanceFromLatLonInKm(
      coordinates[0],
      coordinates[1],
      a.coordinates[0],
      a.coordinates[1]
    );
    const distanceB = getDistanceFromLatLonInKm(
      coordinates[0],
      coordinates[1],
      b.coordinates[0],
      b.coordinates[1]
    );
    return distanceA - distanceB;
  });
  return nearestCities.slice(0, count);
};

export const findNearestCities = (
  coordinates: Coordinates,
  count: number
): City[] => {
  const cityDistances = cities.map((city) => ({
    city,
    distance: getDistanceFromLatLonInKm(
      coordinates[0],
      coordinates[1],
      city.coordinates[0],
      city.coordinates[1]
    ),
  }));

  const sortedCities = cityDistances.sort((a, b) => a.distance - b.distance);

  return sortedCities.slice(0, count).map((entry) => entry.city);
};
