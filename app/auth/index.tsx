import {
  AlertCircleIcon,
  Box,
  FormControl,
  FormControlError,
  FormControlErrorIcon,
  FormControlErrorText,
  FormControlLabel,
  FormControlLabelText,
  Input,
  InputField,
  View,
} from "@gluestack-ui/themed";
import { useFormik } from "formik";
import { useTranslation } from "react-i18next";
import PageDetailHeader from "../../components/layout/PageDetailHeader";

export default function AuthPage() {
  const { t } = useTranslation("auth");

  const form = useFormik({
    initialValues: {},
    onSubmit: () => {},
  });
  return (
    <Box h="$32" w="$full">
      <PageDetailHeader title={t("login.title")} />
      <View p="$2">
        <FormControl
          size="md"
          isDisabled={false}
          isInvalid={true}
          isReadOnly={false}
          isRequired={false}
          id="email"
          nativeID="email"
        >
          <FormControlLabel mb="$1">
            <FormControlLabelText>{t("email.label")}</FormControlLabelText>
          </FormControlLabel>
          <Input nativeID="email">
            <InputField
              type="text"
              defaultValue=""
              nativeID="email"
              placeholder={t("email.placeholder")}
            />
          </Input>
          <FormControlError>
            <FormControlErrorIcon as={AlertCircleIcon} />
            <FormControlErrorText>
              Atleast 6 characters are required.
            </FormControlErrorText>
          </FormControlError>
        </FormControl>
      </View>
    </Box>
  );
}
