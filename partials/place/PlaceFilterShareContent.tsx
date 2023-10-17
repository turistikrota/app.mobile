import { Button, useToken } from "@gluestack-ui/themed";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Share, StyleSheet } from "react-native";
import BoxIcon from "~assets/Icons/BoxIcon";
import { Sites, getSiteByLocale } from "~config/sites";
import { usePlaceFilter } from "~contexts/place-filter";
import Loading from "~partials/state/Loading";
import { getLocale } from "~types/i18n";
import { toQueryString } from "~utils/place";

const PlaceFilterShareContent: React.FC = () => {
  const { query } = usePlaceFilter();
  const { i18n } = useTranslation("place");
  const color = useToken("colors", "textLight500");
  const [loading, setLoading] = useState(false);

  const onShare = async () => {
    setLoading(true);
    Share.share({
      url:
        getSiteByLocale(Sites.Place, getLocale(i18n.language)) +
        "/?" +
        toQueryString(query),
      title: "Turistikrota",
    })
      .then((res) => {})
      .catch(() => {})
      .finally(() => setLoading(false));
  };

  return (
    <Button
      size="md"
      variant="outline"
      sx={{
        w: "$full",
        borderColor: "$borderDark400",
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
        borderRightWidth: 0,
        borderWidth: StyleSheet.hairlineWidth,
      }}
      onPress={onShare}
    >
      <Loading value={loading}>
        <BoxIcon name="export" color={color} width={20} height={20} />
      </Loading>
    </Button>
  );
};

export default PlaceFilterShareContent;
