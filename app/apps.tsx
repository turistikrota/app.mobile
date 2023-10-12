import { Box, View, useToken } from "@gluestack-ui/themed";
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
        href: "/places",
        icon: <BoxIcon name="map" color={primary} width={60} height={60} />,
        isReady: true,
        bg: "primary0",
        titleColor: "primary600",
        descriptionColor: "primary500",
      },
      {
        name: "owner.name",
        href: "/owner",
        icon: <BoxIcon name="owner" color={secondary} width={60} height={60} />,
        isReady: true,
        bg: "secondary50",
        titleColor: "secondary600",
        descriptionColor: "secondary500",
      },
      {
        name: "account.name",
        href: `/account`,
        icon: <BoxIcon name="account" color={fuchsia} width={60} height={60} />,
        isReady: true,
        bg: "fuchsia50",
        titleColor: "fuchsia600",
        descriptionColor: "fuchsia500",
      },
      {
        name: "booking.name",
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
        href: "/chat",
        icon: <BoxIcon name="chat" color={cyan} width={60} height={60} />,
        isReady: false,
        bg: "cyan50",
        titleColor: "cyan600",
        descriptionColor: "cyan500",
      },
      {
        name: "wallet.name",
        href: "/wallet",
        icon: <BoxIcon name="wallet" color={indigo} width={60} height={60} />,
        isReady: false,
        bg: "indigo50",
        titleColor: "indigo600",
        descriptionColor: "indigo500",
      },
    ],
    []
  );
  return (
    <View
      sx={{
        flex: 1,
        bg: "$white",
        height: "100%",
        p: "$2",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        width: "100%",
        gap: "$2",
      }}
    >
      {Apps.map((app) => (
        <AppCard key={app.name} {...app} name={t(app.name)} />
      ))}
      <Box h="$8" />
    </View>
  );
}
