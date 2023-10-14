import { Box, Pressable, Text } from "@gluestack-ui/themed";
import { router } from "expo-router";
import React from "react";
import { useTranslation } from "react-i18next";
import BoxIcon from "~assets/Icons/BoxIcon";
import { useDeviceDate, useDeviceIcon } from "~hooks/device";
import { DeviceItem } from "~types/device";

const DeviceListItem: React.FC<DeviceItem> = ({
  device_name,
  device_os,
  device_type,
  device_uuid,
  ip_address,
  last_login,
}) => {
  const { t } = useTranslation("devices");
  const icon = useDeviceIcon(device_name);
  const alternativeIcon = useDeviceIcon(device_os);
  const [date, isAgo] = useDeviceDate(last_login);
  return (
    <Pressable
      sx={{
        p: "$2",
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        bg: "$backgroundLight100",
        mb: "$2",
        borderRadius: "$sm",
      }}
      onPress={() =>
        router.push({
          pathname: "/panel/devices/[id]",
          params: {
            device_name,
            device_os,
            device_type,
            device_uuid,
            ip_address,
            last_login,
          },
        })
      }
    >
      <Box
        sx={{
          w: "$1/6",
          justifyContent: "center",
          alignItems: "center",
          p: "$2",
        }}
      >
        <BoxIcon
          name={icon !== "question" ? icon : alternativeIcon}
          width={30}
          height={30}
        />
      </Box>
      <Box
        sx={{
          w: "$4/6",
        }}
      >
        <Text sx={{ fontWeight: "bold" }}>
          {device_os} / {device_name}
        </Text>
        <Text sx={{ fontSize: "$sm" }}>
          {t("lastSeen", {
            date: date,
          })}
          {isAgo && t("ago")}
        </Text>
      </Box>
      <Box
        sx={{
          w: "$1/6",
          justifyContent: "center",
          alignItems: "flex-end",
          p: "$2",
        }}
      >
        <BoxIcon name="chevron-right" />
      </Box>
    </Pressable>
  );
};

export default DeviceListItem;
