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
import { router } from "expo-router";
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
import { parseApiError } from "~utils/api-error";

export default function ChangePasswordPage() {
  const { t } = useTranslation("changePassword");
  const [token, setToken] = useState("");
  const [turnstileKey, setTurnstileKey] = useState(0);
  const [loading, setLoading] = useState(false);
  const http = useHttpClient();
  const alert = useAlert();

  const form = useFormik({
    initialValues: {
      old_password: "",
      new_password: "",
    },
    onSubmit: async ({ old_password, new_password }) => {
      const res = await alert.confirm(t("confirm"));
      if (!res.confirmed) return;
      setLoading(true);
      http
        .patch(
          apiUrl(Services.Auth, "/password"),
          { old_password, new_password },
          {
            headers: {
              [Config.headers.TurnstileToken]: token,
            },
          }
        )
        .then((res) => {
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
  return (
    <AuthGuard.Required>
      <View
        sx={{
          bg: "$white",
          height: "100%",
          flex: 1,
          p: "$2",
        }}
      >
        <VStack space="md" p="$2">
          <Alert mt="$2" action="info" variant="accent">
            <AlertIcon as={InfoIcon} mr="$3" />
            <AlertText>{t("alert")}</AlertText>
          </Alert>
          <FormControl
            size="md"
            isInvalid={!!form.errors.old_password && form.touched.old_password}
            isRequired={true}
            id="old_password"
            nativeID="old_password"
          >
            <FormControlLabel mb="$1">
              <FormControlLabelText>
                {t("old_password.label")}
              </FormControlLabelText>
            </FormControlLabel>
            <Input nativeID="old_password">
              <InputField
                type="password"
                value={form.values.old_password}
                onChangeText={form.handleChange("old_password")}
                onBlur={form.handleBlur("old_password")}
                nativeID="old_password"
                placeholder={t("old_password.placeholder")}
              />
            </Input>
            <FormControlError>
              <FormControlErrorIcon as={AlertCircleIcon} />
              <FormControlErrorText>
                {form.errors.old_password}
              </FormControlErrorText>
            </FormControlError>
          </FormControl>
          <FormControl
            size="md"
            isInvalid={!!form.errors.new_password && form.touched.new_password}
            isRequired={true}
            id="new_password"
            nativeID="new_password"
          >
            <FormControlLabel mb="$1">
              <FormControlLabelText>
                {t("new_password.label")}
              </FormControlLabelText>
            </FormControlLabel>
            <Input nativeID="new_password">
              <InputField
                type="password"
                value={form.values.new_password}
                onChangeText={form.handleChange("new_password")}
                onBlur={form.handleBlur("new_password")}
                nativeID="new_password"
                placeholder={t("new_password.placeholder")}
              />
            </Input>
            <FormControlError>
              <FormControlErrorIcon as={AlertCircleIcon} />
              <FormControlErrorText>
                {form.errors.new_password}
              </FormControlErrorText>
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
                  : t(`${loading ? "loading" : "submit"}`)}
              </ButtonText>
            </Loading>
          </Button>
        </VStack>
      </View>
    </AuthGuard.Required>
  );
}
