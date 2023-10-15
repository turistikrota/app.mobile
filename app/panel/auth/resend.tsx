import {
  AlertCircleIcon,
  Button,
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
  View,
} from "@gluestack-ui/themed";
import { router, useLocalSearchParams } from "expo-router";
import { useFormik } from "formik";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Turnstile from "~components/shared/Turnstile";
import { Config } from "~config/config";
import { Services, apiUrl } from "~config/services";
import AuthGuard from "~guards/auth";
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
    <AuthGuard.Forbidden>
      <View
        sx={{
          bg: "$white",
          height: "100%",
          flex: 1,
        }}
      >
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
          <Turnstile onVerify={setToken} key={turnstileKey} />
          <Button
            onPress={() => form.handleSubmit()}
            isDisabled={loading || !token}
          >
            <Loading value={loading}>
              <ButtonText color="$white" fontWeight="$medium" fontSize="$sm">
                {!token
                  ? t("captcha.loading")
                  : t(`resend.${loading ? "loading" : "submit"}`)}
              </ButtonText>
            </Loading>
          </Button>
        </VStack>
      </View>
    </AuthGuard.Forbidden>
  );
}
