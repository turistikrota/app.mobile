import { useTranslation } from "react-i18next";
import * as Yup from "yup";

export const useAccountCreateSchema = () => {
  const { t } = useTranslation("validation");

  return Yup.object().shape({
    userName: Yup.string().required(t("required")),
  });
};
