import "dayjs/locale/en";
import "dayjs/locale/tr";

import dayjs from "dayjs";
import relative from "dayjs/plugin/relativeTime";
import { useTranslation } from "react-i18next";

export const useDayJS = () => {
  const { i18n } = useTranslation();
  dayjs.extend(relative);
  dayjs.locale(i18n.language);
  return dayjs;
};
