import { useDayJS } from "./dayjs";

export const useDeviceDate = (date: string): [string, boolean] => {
  const dayjs = useDayJS();
  const now = dayjs();
  const last = dayjs(date);
  const diff = now.diff(last, "day");
  if (diff <= 30) {
    return [last.toNow(true), true];
  }
  return [last.format("DD MMM YYYY, HH:mm"), false];
};

export const useDeviceIcon = (deviceName: string): string => {
  switch (deviceName) {
    case "turistikrota":
      return "mobile";
    case "Chrome":
      return "chrome";
    case "Headless Chrome":
      return "chrome";
    case "Firefox":
      return "firefox";
    case "Opera":
      return "opera";
    case "Opera Mini":
      return "opera";
    case "Opera Touch":
      return "opera";
    case "Windows":
      return "windows";
    case "Mac OS":
      return "apple";
    default:
      return "question";
  }
};
