import {
  Alert,
  AlertCircleIcon,
  AlertIcon,
  AlertText,
  Button,
  ButtonText,
  FormControl,
  FormControlError,
  FormControlErrorIcon,
  FormControlErrorText,
  FormControlLabel,
  FormControlLabelText,
  InfoIcon,
  Input,
  InputField,
  VStack,
  View,
} from "@gluestack-ui/themed";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Turnstile from "~components/shared/Turnstile";
import { Config } from "~config/config";
import { Services, apiUrl } from "~config/services";
import { useAlert } from "~hooks/alert";
import { useHttpClient } from "~http/client";
import Loading from "~partials/state/Loading";
import { useReSendVerifySchema } from "~schemas/auth/resend.schema";
import { parseApiError } from "~utils/api-error";

type SearchParams = {
  email?: string;
};

export default function ResendTokenPage() {
  const params = useLocalSearchParams<SearchParams>();
  const { t } = useTranslation("auth");
  const [token, setToken] = useState("");
  const [turnstileKey, setTurnstileKey] = useState(0);
  const [loading, setLoading] = useState(false);
  const alert = useAlert();
  const schema = useReSendVerifySchema();
  const http = useHttpClient();
  const router = useRouter();

  useEffect(() => {
    router.setParams({
      title: t("resend.title"),
    });
  }, []);

  const form = useFormik({
    initialValues: {
      email: params.email ?? "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      setLoading(true);
      http
        .post(
          apiUrl(Services.Auth, "/re-verify"),
          {
            email: values.email,
          },
          {
            headers: {
              [Config.headers.TurnstileToken]: token,
            },
          }
        )
        .then((res) => {
          if (res.status === 200) {
            alert.alert(t("resend.success"));
            router.back();
          }
        })
        .catch((error) => {
          setTurnstileKey(turnstileKey + 1);
          parseApiError({
            error: error?.response?.data,
            toast: (msg) => alert.alert(msg),
            form,
          });
        })
        .finally(() => {
          setLoading(false);
        });
    },
  });
  return (
    <View
      sx={{
        bg: "$white",
        height: "100%",
        flex: 1,
      }}
    >
      <VStack space="md" p="$2">
        <Alert mt="$2" action="info" variant="accent">
          <AlertIcon as={InfoIcon} mr="$3" />
          <AlertText>{t("resend.alert")}</AlertText>
        </Alert>
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
        <Turnstile onVerify={setToken} key={turnstileKey} />
        <Button
          onPress={() => form.handleSubmit()}
          isDisabled={loading || !token}
        >
          <Loading value={loading} color="$white">
            <ButtonText color="$white" fontWeight="$medium" fontSize="$sm">
              {!token
                ? t("captcha.loading")
                : t(`resend.${loading ? "loading" : "submit"}`)}
            </ButtonText>
          </Loading>
        </Button>
      </VStack>
    </View>
  );
}
