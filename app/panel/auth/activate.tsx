import {
  Box,
  Button,
  ButtonText,
  Center,
  Divider,
  Text,
  VStack,
  View,
} from "@gluestack-ui/themed";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Turnstile from "~components/shared/Turnstile";
import { Config } from "~config/config";
import { Services, apiUrl } from "~config/services";
import { useAlert } from "~hooks/alert";
import { useHttpClient } from "~http/client";
import Loading from "~partials/state/Loading";
import { isVerifyFailResponse } from "~types/auth";
import { parseApiError } from "~utils/api-error";

type SearchParams = {
  code?: string;
};

export default function ActivatePage() {
  const { t } = useTranslation("auth");
  const params = useLocalSearchParams<SearchParams>();
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState("");
  const [turnstileKey, setTurnstileKey] = useState(0);
  const alert = useAlert();
  const http = useHttpClient();
  const router = useRouter();

  useEffect(() => {
    router.setParams({
      title: t("activate.title"),
    });
  }, []);

  const onSubmit = () => {
    if (!params.code) return alert.alert(t("activate.invalidCode"));
    setLoading(true);
    http
      .post(
        apiUrl(Services.Auth, `/${params.code}`),
        {},
        {
          headers: {
            [Config.headers.TurnstileToken]: token,
          },
        }
      )
      .then((res) => {
        if (res.status === 200) {
          alert.alert(t("activate.success"));
          router.back();
        }
      })
      .catch((error) => {
        setTurnstileKey(turnstileKey + 1);
        if (
          isVerifyFailResponse(error?.response?.data) &&
          error?.response?.data?.reSendable
        ) {
          return router.push({
            pathname: "/panel/auth/resend",
            params: {
              email: error?.response?.data?.email,
            },
          });
        }
        parseApiError({
          error: error?.response?.data,
          toast: (msg) => alert.alert(msg),
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <View
      sx={{
        bg: "$white",
        height: "100%",
        flex: 1,
      }}
    >
      <VStack space="md" p="$2">
        <Turnstile onVerify={setToken} key={turnstileKey} />
        <Button onPress={onSubmit} isDisabled={loading || !token}>
          <Loading value={loading}>
            <ButtonText color="$white" fontWeight="$medium" fontSize="$sm">
              {!token
                ? t("captcha.loading")
                : t(`activate.${loading ? "loading" : "submit"}`)}
            </ButtonText>
          </Loading>
        </Button>
        <Divider
          sx={{
            my: "$2",
          }}
        />
        <Box>
          <Center>
            <Text
              sx={{
                color: "$textLight500",
                fontSize: "$sm",
              }}
            >
              {t("activate.notHave")}
            </Text>
          </Center>
          <Center>
            <Text
              sx={{
                color: "$primary500",
                fontWeight: "$medium",
              }}
              onPress={() => router.push("/panel/auth/resend")}
            >
              {t("activate.link")}
            </Text>
          </Center>
        </Box>
      </VStack>
    </View>
  );
}
