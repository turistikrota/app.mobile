import "dayjs/locale/en";
import "dayjs/locale/tr";

import dayjs from "dayjs";
import { useTranslation } from "react-i18next";

export const useDayJS = () => {
  const { i18n } = useTranslation();
  dayjs.locale(i18n.language);
  return dayjs;
};
