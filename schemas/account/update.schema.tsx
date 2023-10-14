import { useTranslation } from "react-i18next";
import * as Yup from "yup";

export const useAccountUpdateSchema = () => {
  const { t } = useTranslation("validation");

  return Yup.object().shape({
    fullName: Yup.string().required(t("required")),
    description: Yup.string().required(t("required")),
  });
};
