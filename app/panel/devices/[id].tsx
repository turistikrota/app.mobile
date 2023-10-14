import {
  Box,
  Button,
  Center,
  Text,
  View,
  useToken,
} from "@gluestack-ui/themed";
import { useLocalSearchParams } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import BoxIcon from "~assets/Icons/BoxIcon";
import LineTable from "~components/LineTable";
import { useAlert } from "~hooks/alert";
import { useDeviceDate, useDeviceIcon } from "~hooks/device";
import Loading from "~partials/state/Loading";
import { DeviceItemWithoutCurrent } from "~types/device";

const DeviceDetailModal: React.FC = () => {
  const { t } = useTranslation("devices");
  const device = useLocalSearchParams<DeviceItemWithoutCurrent>();
  const icon = useDeviceIcon(device.device_name!);
  const alternativeIcon = useDeviceIcon(device.device_os!);
  const [date, isAgo] = useDeviceDate(device.last_login!);
  const iconColor = useToken("colors", "primary400");
  const [loading, setLoading] = useState(false);
  const alert = useAlert();

  const destroy = async () => {};
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
        <BoxIcon
          name={icon !== "question" ? icon : alternativeIcon}
          color={iconColor}
          width={120}
          height={120}
        ></BoxIcon>
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
          <Loading value={loading}>
            <Text color="$white">{t("destroy")}</Text>
          </Loading>
        </Button>
      </Box>
      <StatusBar style="light" />
    </View>
  );
};

export default DeviceDetailModal;
