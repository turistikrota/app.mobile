import { Box, ScrollView, View, useToken } from "@gluestack-ui/themed";
import { StatusBar } from "expo-status-bar";
import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
import BoxIcon from "~assets/Icons/BoxIcon";
import AppCard, { AppCardProps } from "~components/AppCard";

export default function AppsPage() {
  const { t } = useTranslation("apps");
  const primary = useToken("colors", "primary500");
  const secondary = useToken("colors", "secondary500");
  const teal = useToken("colors", "teal500");
  const fuchsia = useToken("colors", "fuchsia500");
  const cyan = useToken("colors", "cyan500");
  const indigo = useToken("colors", "indigo500");
  const rose = useToken("colors", "rose500");
  const lightBlue = useToken("colors", "lightBlue500");
  const pink = useToken("colors", "pink500");

  const Apps = useMemo<AppCardProps[]>(
    () => [
      {
        name: "place.name",
        description: "place.description",
        href: "/places",
        icon: <BoxIcon name="map" color={primary} width={60} height={60} />,
        isReady: true,
        bg: "primary0",
        titleColor: "primary600",
        descriptionColor: "primary500",
      },
      {
        name: "owner.name",
        description: "owner.description",
        href: "/owner",
        icon: <BoxIcon name="owner" color={secondary} width={60} height={60} />,
        isReady: true,
        bg: "secondary50",
        titleColor: "secondary600",
        descriptionColor: "secondary500",
      },
      {
        name: "account.name",
        description: "account.description",
        href: `/account`,
        icon: <BoxIcon name="account" color={fuchsia} width={60} height={60} />,
        isReady: true,
        bg: "fuchsia50",
        titleColor: "fuchsia600",
        descriptionColor: "fuchsia500",
      },
      {
        name: "settings.name",
        description: "settings.description",
        href: "/settings",
        icon: (
          <BoxIcon name="settings" color={lightBlue} width={60} height={60} />
        ),
        isReady: true,
        bg: "lightBlue50",
        titleColor: "lightBlue600",
        descriptionColor: "lightBlue500",
      },
      {
        name: "booking.name",
        description: "booking.description",
        href: "/booking",
        icon: (
          <BoxIcon name="reservation" color={teal} width={60} height={60} />
        ),
        isReady: false,
        bg: "teal50",
        titleColor: "teal600",
        descriptionColor: "teal500",
      },
      {
        name: "chat.name",
        description: "chat.description",
        href: "/chat",
        icon: <BoxIcon name="chat" color={cyan} width={60} height={60} />,
        isReady: false,
        bg: "cyan50",
        titleColor: "cyan600",
        descriptionColor: "cyan500",
      },
      {
        name: "wallet.name",
        description: "wallet.description",
        href: "/wallet",
        icon: <BoxIcon name="wallet" color={indigo} width={60} height={60} />,
        isReady: false,
        bg: "indigo50",
        titleColor: "indigo600",
        descriptionColor: "indigo500",
      },
      {
        name: "invoice.name",
        description: "invoice.description",
        href: "/invoice",
        icon: (
          <BoxIcon name="file-archive" color={rose} width={60} height={60} />
        ),
        isReady: false,
        bg: "rose50",
        titleColor: "rose700",
        descriptionColor: "rose500",
      },
      {
        name: "support.name",
        description: "support.description",
        href: "/support",
        icon: <BoxIcon name="support" color={pink} width={60} height={60} />,
        isReady: false,
        bg: "pink50",
        titleColor: "pink600",
        descriptionColor: "pink500",
      },
    ],
    []
  );
  return (
    <View
      sx={{
        flex: 1,
        bg: "$white",
      }}
    >
      <ScrollView
        sx={{
          flex: 1,
          p: "$2",
        }}
      >
        {Apps.map((app) => (
          <AppCard
            key={app.name}
            {...app}
            description={t(app.description)}
            name={t(app.name)}
          />
        ))}
        <Box h="$16" />
      </ScrollView>
      <StatusBar style="light" />
    </View>
  );
}
