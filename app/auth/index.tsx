import {
  AlertCircleIcon,
  Box,
  Button,
  FormControl,
  FormControlError,
  FormControlErrorIcon,
  FormControlErrorText,
  FormControlLabel,
  FormControlLabelText,
  Input,
  InputField,
  Text,
  VStack,
} from "@gluestack-ui/themed";
import { useFormik } from "formik";
import React from "react";
import { useTranslation } from "react-i18next";
import PageDetailHeader from "../../components/layout/PageDetailHeader";

export default function AuthPage() {
  const { t } = useTranslation("auth");

  const form = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: () => {},
  });
  return (
    <Box h="$32" w="$full">
      <PageDetailHeader title={t("login.title")} />
      <VStack space="md" p="$2">
        <FormControl
          size="md"
          isInvalid={!!form.errors.email && form.touched.email}
          isRequired={true}
          id="email"
          nativeID="email"
        >
          <FormControlLabel mb="$1">
            <FormControlLabelText>{t("email.label")}</FormControlLabelText>
          </FormControlLabel>
          <Input nativeID="email">
            <InputField
              type="text"
              value={form.values.email}
              onChangeText={form.handleChange("email")}
              onBlur={form.handleBlur("email")}
              nativeID="email"
              placeholder={t("email.placeholder")}
            />
          </Input>
          <FormControlError>
            <FormControlErrorIcon as={AlertCircleIcon} />
            <FormControlErrorText>{form.errors.email}</FormControlErrorText>
          </FormControlError>
        </FormControl>
        <Button>
          <Text color="$white">{t("login.submit")}</Text>
        </Button>
      </VStack>
    </Box>
  );
}
