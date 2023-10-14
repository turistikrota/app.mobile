import React, { useEffect, useMemo, useState } from "react";

import {
  Alert,
  AlertIcon,
  AlertText,
  Button,
  Center,
  InfoIcon,
  ScrollView,
  Text,
  View,
} from "@gluestack-ui/themed";
import { useTranslation } from "react-i18next";
import BoxIcon from "~assets/Icons/BoxIcon";
import { Services, apiUrl } from "~config/services";
import AuthGuard from "~guards/auth";
import { useAlert } from "~hooks/alert";
import { httpClient } from "~http/client";
import DeviceListItem from "~partials/device/DeviceListItem";
import LoadingListItem from "~partials/state/LoadingListItem";
import { DeviceItem, isDeviceItems } from "~types/device";

const DeviceControlPage: React.FC = () => {
  const { t } = useTranslation("devices");
  const [loading, setLoading] = useState(true);
  const [devices, setDevices] = useState<DeviceItem[]>([]);
  const alert = useAlert();
  const current = useMemo(
    () => devices.find((item) => item.is_current),
    [devices]
  );

  const filteredItems = useMemo(
    () => devices.filter((d) => !d.is_current),
    [devices]
  );

  useEffect(() => {
    httpClient
      .get(apiUrl(Services.Auth, "/session"))
      .then((res) => {
        if (isDeviceItems(res.data)) {
          setDevices(res.data);
        }
      })
      .catch(() => {})
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const destroyOthers = () => {};
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
            <Text sx={{ fontSize: "$lg", fontWeight: "bold" }}>
              {t("infoTitle")}
            </Text>
            <Text sx={{ fontSize: "$sm", color: "$gray500" }}>
              {t("infoDesc")}
            </Text>
            <Button onPress={destroyOthers} action="negative" sx={{ mt: "$2" }}>
              <Text color="$white">{t("destroyOthers")}</Text>
            </Button>
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
