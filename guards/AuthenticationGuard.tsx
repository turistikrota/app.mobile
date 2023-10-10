import { Center, Spinner, View } from "@gluestack-ui/themed";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Services, apiUrl } from "../config/services";
import { useAlert } from "../hooks/alert";
import { httpClient } from "../http/client";

const AuthenticationGuard: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const { i18n } = useTranslation();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isServerError, setIsServerError] = useState<boolean>(false);
  const alert = useAlert();

  useEffect(() => {
    httpClient
      .get(apiUrl(Services.Auth, "/"))
      .then((res) => {
        if (res.status === 200) {
          setIsLoading(false);
        }
      })
      .catch((err) => {
        if (err && err.response && err.response.status === 401) {
          // add login page
          alert.alert("open login page knk");
          return;
        }
        setIsServerError(true);
      });
  }, []);

  if (isLoading)
    return (
      <Center h="$full" w="$full">
        <View>
          <Spinner />
        </View>
      </Center>
    );

  return <>{children}</>;
};

export default AuthenticationGuard;
