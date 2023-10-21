import {
  AlertCircleIcon,
  Box,
  Button,
  ButtonSpinner,
  ButtonText,
  CheckIcon,
  Checkbox,
  CheckboxIcon,
  CheckboxIndicator,
  CheckboxLabel,
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
import { Link, useLocalSearchParams, useRouter } from "expo-router";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { Trans, useTranslation } from "react-i18next";
import Turnstile from "~components/shared/Turnstile";
import { Config } from "~config/config";
import { Services, apiUrl } from "~config/services";
import { useAlert } from "~hooks/alert";
import { httpClient } from "~http/client";
import { getStaticRoute } from "~static/site";
import { getLocale } from "~types/i18n";
import { parseApiError } from "~utils/api-error";

type SearchParams = {
  email?: string;
  redirect?: string;
};

export default function RegisterPage() {
  const params = useLocalSearchParams<SearchParams>();
  const { t, i18n } = useTranslation("auth");
  const [token, setToken] = useState("");
  const [turnstileKey, setTurnstileKey] = useState(0);
  const [loading, setLoading] = useState(false);
  const alert = useAlert();
  const router = useRouter();

  useEffect(() => {
    router.setParams({
      title: t("register.title"),
    });
  }, []);

  const form = useFormik({
    initialValues: {
      email: params.email || "",
      password: "",
      privacy: false,
    },
    onSubmit: ({ email, password, privacy }) => {
      setLoading(true);
      httpClient
        .post(
          apiUrl(Services.Auth, "/register"),
          { email, password, privacy },
          {
            headers: {
              [Config.headers.TurnstileToken]: token,
              [Config.headers.AcceptLang]: i18n.language,
            },
          }
        )
        .then((res) => {
          alert.alert(t("register.success"));
          router.back();
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

  const PrivacyNotify = () => (
    <Link
      href={getStaticRoute(getLocale(i18n.language)).contracts.privacyNotify}
    >
      <Text color="$secondary500">{t("policy.privacyNotify")}</Text>
    </Link>
  );

  const PrivacyPolicy = () => (
    <Link href={getStaticRoute(getLocale(i18n.language)).contracts.privacy}>
      <Text color="$secondary500">{t("policy.privacyPolicy")}</Text>
    </Link>
  );

  const TermsOfUse = () => (
    <Link href={getStaticRoute(getLocale(i18n.language)).contracts.terms}>
      <Text color="$secondary500">{t("policy.termsOfUse")}</Text>
    </Link>
  );

  const Space = () => <Text> </Text>;

  return (
    <Box h="$full" w="$full" bg="$white">
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
        <FormControl
          size="md"
          isInvalid={!!form.errors.privacy && form.touched.privacy}
          isRequired={true}
          id="privacy"
          nativeID="privacy"
        >
          <Checkbox
            size="md"
            isInvalid={!!form.errors.privacy && form.touched.privacy}
            value={form.values.privacy ? "on" : "off"}
            onChange={(isSelected: boolean) => {
              form.setFieldValue("privacy", isSelected);
            }}
            onBlur={form.handleBlur("privacy")}
            aria-label={t("policy.label")}
          >
            <CheckboxIndicator mr="$2">
              <CheckboxIcon as={CheckIcon} />
            </CheckboxIndicator>
            <CheckboxLabel>
              {" "}
              <Text>
                <Trans
                  parent={Text as React.ComponentType<any>}
                  i18nKey={t("policy.text")}
                  components={{
                    termsOfUse: <TermsOfUse />,
                    privacyPolicy: <PrivacyPolicy />,
                    privacyNotify: <PrivacyNotify />,
                    space: <Space />,
                  }}
                />
              </Text>
            </CheckboxLabel>
          </Checkbox>
          <FormControlError>
            <FormControlErrorIcon as={AlertCircleIcon} />
            <FormControlErrorText>{form.errors.privacy}</FormControlErrorText>
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
              : t(`register.${loading ? "loading" : "submit"}`)}
          </ButtonText>
        </Button>
      </VStack>
    </Box>
  );
}
