import {
  Alert,
  AlertIcon,
  AlertText,
  Button,
  InfoIcon,
  Text,
  VStack,
  View,
} from "@gluestack-ui/themed";
import { router } from "expo-router";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import Turnstile from "~components/shared/Turnstile";
import { Config } from "~config/config";
import { Services, apiUrl } from "~config/services";
import AuthGuard from "~guards/auth";
import { useAlert } from "~hooks/alert";
import { useHttpClient } from "~http/client";
import Loading from "~partials/state/Loading";
import { reset as resetAccountStore } from "~store/account.store";
import { reset as resetAuthStore } from "~store/auth.store";
import { parseApiError } from "~utils/api-error";

export default function ManageAccountPage() {
  const { t } = useTranslation("manage");
  const [token, setToken] = useState("");
  const [turnstileKey, setTurnstileKey] = useState(0);
  const alert = useAlert();
  const http = useHttpClient();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const deleteAccount = async () => {
    const res = await alert.confirm(t("confirm"));
    if (!res.confirmed) return;
    setLoading(true);
    http
      .delete(apiUrl(Services.Auth, `/`), {
        headers: {
          [Config.headers.TurnstileToken]: token,
        },
      })
      .then((res) => {
        router.replace("/panel");
        dispatch(resetAuthStore());
        dispatch(resetAccountStore());
      })
      .catch((err) => {
        setTurnstileKey(turnstileKey + 1);
        parseApiError({
          error: err?.response?.data,
          toast: (msg) => alert.alert(msg),
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <AuthGuard.Required>
      <View
        sx={{
          height: "100%",
          backgroundColor: "$white",
          p: "$2",
        }}
      >
        <VStack space="md">
          <Alert mt="$2" action="info" variant="accent">
            <AlertIcon as={InfoIcon} mr="$3" />
            <AlertText>{t("alert")}</AlertText>
          </Alert>
          <Turnstile onVerify={setToken} key={turnstileKey} />
          <Button
            action="negative"
            disabled={loading || token == ""}
            onPress={deleteAccount}
          >
            <Loading value={loading} color="$white">
              <Text color="$white">
                {!token ? t("captcha.loading") : t("button")}
              </Text>
            </Loading>
          </Button>
        </VStack>
      </View>
    </AuthGuard.Required>
  );
}
