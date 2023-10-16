import axios from "axios";
import { useTranslation } from "react-i18next";

export const httpClient = axios.create({
  withCredentials: true,
});

export const useHttpClient = () => {
  const { i18n } = useTranslation();
  httpClient.defaults.headers.common["Accept-Language"] = i18n.language;
  return httpClient;
};
