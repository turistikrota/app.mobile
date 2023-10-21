import React, { useEffect, useMemo, useState } from "react";

import {
  Alert,
  AlertIcon,
  AlertText,
  Button,
  Center,
  Heading,
  InfoIcon,
  ScrollView,
  Text,
  View,
} from "@gluestack-ui/themed";
import * as Haptics from "expo-haptics";
import { useNavigation } from "expo-router";
import { useTranslation } from "react-i18next";
import BoxIcon from "~assets/Icons/BoxIcon";
import { Services, apiUrl } from "~config/services";
import AuthGuard from "~guards/auth";
import { useAlert } from "~hooks/alert";
import { httpClient } from "~http/client";
import DeviceListItem from "~partials/device/DeviceListItem";
import LoadingListItem from "~partials/state/LoadingListItem";
import { DeviceItem, isDeviceItems } from "~types/device";
import { parseApiError } from "~utils/api-error";

const DeviceControlPage: React.FC = () => {
  const navigation = useNavigation();
  const { t } = useTranslation("devices");
  const [loading, setLoading] = useState(true);
  const [devices, setDevices] = useState<DeviceItem[]>([]);
  const alert = useAlert();

  const filteredItems = useMemo(
    () => devices.filter((d) => !d.is_current),
    [devices]
  );

  const fetch = () => {
    httpClient
      .get(apiUrl(Services.Auth, "/session"))
      .then((res) => {
        if (isDeviceItems(res.data)) {
          setDevices(
            res.data.map((d) => ({
              ...d,
              device_type:
                d.device_name === "turistikrota" ? "mobile" : d.device_type,
            }))
          );
        }
      })
      .catch(() => {})
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    navigation.addListener("focus", fetch);
  }, []);

  const destroyOthers = async () => {
    const res = await alert.confirm(t("confirm.others"));
    if (!res.confirmed) return;
    setLoading(true);
    httpClient
      .delete(apiUrl(Services.Auth, `/session/others`))
      .then((res) => {
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
        fetch();
      })
      .catch((err) => {
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
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
      <View sx={{ bg: "$white", h: "$full", px: "$2" }}>
        <ScrollView>
          <Alert mt="$2" action="info" variant="accent">
            <AlertIcon as={InfoIcon} mr="$3" />
            <AlertText>{t("browserInfo")}</AlertText>
          </Alert>
          <Center
            sx={{
              pt: "$2",
              mb: "$4",
            }}
          >
            <BoxIcon name="devices" width={100} height={100}></BoxIcon>
            <Heading sx={{ fontSize: "$lg", fontWeight: "bold" }}>
              {t("infoTitle")}
            </Heading>
            <Text sx={{ fontSize: "$sm", color: "$textLight600" }}>
              {t("infoDesc")}
            </Text>
            {filteredItems.length === 0 ? (
              <Alert mt="$2" action="info" variant="accent">
                <AlertIcon as={InfoIcon} mr="$3" />
                <AlertText>{t("noOtherDevices")}</AlertText>
              </Alert>
            ) : (
              <Button
                onPress={destroyOthers}
                action="negative"
                sx={{ mt: "$2" }}
              >
                <Text color="$white">{t("destroyOthers")}</Text>
              </Button>
            )}
          </Center>
          {loading ? (
            <LoadingListItem />
          ) : (
            <>
              {filteredItems.map((f) => (
                <DeviceListItem key={f.device_uuid} {...f} />
              ))}
            </>
          )}
        </ScrollView>
      </View>
    </AuthGuard.Required>
  );
};

export default DeviceControlPage;
