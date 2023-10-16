import { useTranslation } from "react-i18next";
import * as Yup from "yup";

export const useReSendVerifySchema = () => {
  const { t } = useTranslation("validation");

  return Yup.object().shape({
    email: Yup.string().email(t("invalidEmail")).required(t("required")),
  });
};
