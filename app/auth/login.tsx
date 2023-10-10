import {
  AlertCircleIcon,
  Box,
  Button,
  ButtonSpinner,
  ButtonText,
  FormControl,
  FormControlError,
  FormControlErrorIcon,
  FormControlErrorText,
  FormControlLabel,
  FormControlLabelText,
  Input,
  InputField,
  VStack,
} from "@gluestack-ui/themed";
import { router, useLocalSearchParams } from "expo-router";
import { useFormik } from "formik";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import PageDetailHeader from "../../components/layout/PageDetailHeader";
import Turnstile from "../../components/shared/Turnstile";
import { Config } from "../../config/config";
import { Services, apiUrl } from "../../config/services";
import { useAlert } from "../../hooks/alert";
import { httpClient } from "../../http/client";
import { parseApiError } from "../../utils/api-error";

type SearchParams = {
  email?: string;
  redirect?: string;
};

export default function LoginPage() {
  const params = useLocalSearchParams<SearchParams>();
  const { t, i18n } = useTranslation("auth");
  const [token, setToken] = useState("");
  const [turnstileKey, setTurnstileKey] = useState(0);
  const [loading, setLoading] = useState(false);
  const alert = useAlert();

  const form = useFormik({
    initialValues: {
      email: params.email || "",
      password: "",
    },
    onSubmit: ({ email, password }) => {
      setLoading(true);
      httpClient
        .post(
          apiUrl(Services.Auth, "/login"),
          { email, password },
          {
            headers: {
              [Config.headers.TurnstileToken]: token,
              [Config.headers.AcceptLang]: i18n.language,
            },
          }
        )
        .then((res) => {
          let to: string = "/";
          if (params.redirect) {
            to = params.redirect;
          }
          router.replace(to);
        })
        .catch((res) => {
          setTurnstileKey(turnstileKey + 1);
          parseApiError({
            error: res?.response?.data,
            toast: (msg: string) => {
              alert.alert(msg, false);
            },
            form,
          });
        })
        .finally(() => {
          setLoading(false);
        });
    },
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
        <FormControl
          size="md"
          isInvalid={!!form.errors.password && form.touched.password}
          isRequired={true}
          id="password"
          nativeID="password"
        >
          <FormControlLabel mb="$1">
            <FormControlLabelText>{t("password.label")}</FormControlLabelText>
          </FormControlLabel>
          <Input nativeID="password">
            <InputField
              type="password"
              value={form.values.password}
              onChangeText={form.handleChange("password")}
              onBlur={form.handleBlur("password")}
              nativeID="password"
              placeholder={t("password.placeholder")}
            />
          </Input>
          <FormControlError>
            <FormControlErrorIcon as={AlertCircleIcon} />
            <FormControlErrorText>{form.errors.password}</FormControlErrorText>
          </FormControlError>
        </FormControl>
        <Turnstile onVerify={setToken} key={turnstileKey} />
        <Button
          onPress={() => form.handleSubmit()}
          isDisabled={loading || !token}
        >
          {loading && <ButtonSpinner mr="$1" />}
          <ButtonText color="$white" fontWeight="$medium" fontSize="$sm">
            {!token
              ? t("captcha.loading")
              : t(`login.${loading ? "loading" : "submit"}`)}
          </ButtonText>
        </Button>
      </VStack>
    </Box>
  );
}
