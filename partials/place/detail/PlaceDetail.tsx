import React from "react";
import { Share } from "react-native";
import ScrollableModal from "~components/ScrollableModal";
import { Sites, getSiteByLocale } from "~config/sites";
import { getLocale } from "~types/i18n";
import { PlaceImage } from "~types/place";
import PlaceDetailContent from "./PlaceDetailContent";

type Props = {
  isVisible: boolean;
  slug?: string;
  locale: string;
  title?: string;
  images?: PlaceImage[];
  setVisible: (isVisible: boolean) => void;
};

const PlaceDetail: React.FC<Props> = ({
  isVisible,
  slug,
  locale,
  title,
  images,
  setVisible,
}) => {
  const backGuard = (): boolean => {
    return false;
  };

  const onShare = async () => {
    const res = await Share.share({
      url: `${getSiteByLocale(Sites.Place, getLocale(locale))}/${slug}`,
      title: "Turistikrota",
    }).catch(() => {});
  };
  return (
    <ScrollableModal
      isVisible={isVisible}
      setVisible={setVisible}
      backGuard={backGuard}
      height={100}
      customHead
    >
      <PlaceDetailContent
        onBack={() => setVisible(false)}
        onShare={onShare}
        title={title ?? ""}
        images={images}
      />
    </ScrollableModal>
  );
};

export default PlaceDetail;
