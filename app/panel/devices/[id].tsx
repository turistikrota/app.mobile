import {
  Box,
  Button,
  Center,
  Text,
  View,
  useToken,
} from "@gluestack-ui/themed";
import * as Haptics from "expo-haptics";
import { router, useLocalSearchParams } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import BoxIcon, { IconName } from "~assets/Icons/BoxIcon";
import Logo from "~assets/Icons/Logo";
import LineTable from "~components/LineTable";
import { Services, apiUrl } from "~config/services";
import { useAlert } from "~hooks/alert";
import { useDeviceDate, useDeviceIcon } from "~hooks/device";
import { httpClient } from "~http/client";
import Loading from "~partials/state/Loading";
import { DeviceItemWithoutCurrent } from "~types/device";
import { parseApiError } from "~utils/api-error";

const DeviceDetailModal: React.FC = () => {
  const { t } = useTranslation("devices");
  const device = useLocalSearchParams<DeviceItemWithoutCurrent>();
  const icon = useDeviceIcon(device.device_name!);
  const alternativeIcon = useDeviceIcon(device.device_os!);
  const [date, isAgo] = useDeviceDate(device.last_login!);
  const iconColor = useToken("colors", "primary400");
  const [loading, setLoading] = useState(false);
  const alert = useAlert();

  const destroy = async () => {
    const res = await alert.confirm(t("confirm.destroy"));
    if (!res.confirmed) return;
    setLoading(true);
    httpClient
      .delete(apiUrl(Services.Auth, `/session/${device.device_uuid}`))
      .then((res) => {
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
        router.back();
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
    <View
      sx={{
        flex: 1,
        backgroundColor: "$white",
      }}
    >
      <Center
        sx={{
          pt: "$2",
          mb: "$4",
        }}
      >
        {device.device_name === "turistikrota" ? (
          <Logo size="2xl" borderRadius="$full" />
        ) : (
          <BoxIcon
            name={
              icon !== "question"
                ? (icon as IconName)
                : (alternativeIcon as IconName)
            }
            color={iconColor}
            width={120}
            height={120}
          ></BoxIcon>
        )}

        <Text sx={{ fontSize: "$lg", fontWeight: "bold" }}>
          {device.device_name}
        </Text>
      </Center>
      <Box
        sx={{
          px: "$2",
        }}
      >
        <LineTable>
          <LineTable.Item>
            <LineTable.Left>{t("device.ip")}</LineTable.Left>
            <LineTable.Right>{device.ip_address}</LineTable.Right>
          </LineTable.Item>
          <LineTable.Divider />
          <LineTable.Item>
            <LineTable.Left>{t("device.lastSeen")}</LineTable.Left>
            <LineTable.Right>
              {" "}
              {t("lastSeen", {
                date: date,
              })}
              {isAgo && t("ago")}
            </LineTable.Right>
          </LineTable.Item>
          <LineTable.Divider />
          <LineTable.Item>
            <LineTable.Left>{t("device.os")}</LineTable.Left>
            <LineTable.Right>{device.device_os}</LineTable.Right>
          </LineTable.Item>
          <LineTable.Divider />
          <LineTable.Item>
            <LineTable.Left>{t("device.type")}</LineTable.Left>
            <LineTable.Right>
              {t(`device.types.${device.device_type}`)}
            </LineTable.Right>
          </LineTable.Item>
        </LineTable>
        <Button onPress={destroy} action="negative" sx={{ mt: "$2" }}>
          <Loading value={loading} color="$white">
            <Text color="$white">{t("destroy")}</Text>
          </Loading>
        </Button>
      </Box>
      <StatusBar style="light" />
    </View>
  );
};

export default DeviceDetailModal;
