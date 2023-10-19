import React, { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { Share } from "react-native";
import ScrollableModal from "~components/ScrollableModal";
import { Services, apiUrl } from "~config/services";
import { Sites, getSiteByLocale } from "~config/sites";
import { useHttpClient } from "~http/client";
import { getLocale } from "~types/i18n";
import {
  FullTranslation,
  PlaceDetail as PlaceDetailType,
  PlaceImage,
  getTranslations,
  isPlaceDetail,
} from "~types/place";
import { getMdContent } from "~utils/md";
import PlaceDetailContent from "./PlaceDetailContent";

type Props = {
  isVisible: boolean;
  slug?: string;
  locale: string;
  title?: string;
  images?: PlaceImage[];
  setVisible: (isVisible: boolean) => void;
};

const emptyTranslations: FullTranslation = {
  description: "",
  markdownUrl: "",
  seo: {
    title: "",
    description: "",
    keywords: "",
  },
  slug: "",
  title: "",
};

const PlaceDetail: React.FC<Props> = ({
  isVisible,
  slug,
  locale,
  title,
  images: listImages,
  setVisible,
}) => {
  const { t, i18n } = useTranslation("place");
  const [loading, setLoading] = useState<boolean>(false);
  const [isNotFound, setIsNotFound] = useState<boolean>(false);
  const [mdContent, setMdContent] = useState<string>("");
  const [placeDetail, setPlaceDetail] = useState<PlaceDetailType | null>(null);
  const http = useHttpClient();

  useEffect(() => {
    if (!slug || slug === "") return;
    setLoading(true);
    http
      .get(apiUrl(Services.Place, `/${slug}`), {
        headers: {
          "Accept-Language": getLocale(i18n.language),
        },
      })
      .then((res) => {
        if (isPlaceDetail(res.data)) {
          setPlaceDetail(res.data);
        }
      })
      .catch((err) => {
        if (err.response?.status === 404) {
          setIsNotFound(true);
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }, [slug]);

  const translations = useMemo<FullTranslation>(() => {
    if (placeDetail == null)
      return {
        ...emptyTranslations,
        slug: slug ?? "",
        title: title ?? "",
      };
    return getTranslations<FullTranslation>(
      placeDetail.translations,
      getLocale(i18n.language),
      emptyTranslations
    );
  }, [placeDetail?.translations, i18n.language]);

  useEffect(() => {
    getMdContent(translations.markdownUrl)
      .then((res) => {
        setMdContent(res);
      })
      .catch((err) => {
        setMdContent("");
      });
  }, [placeDetail?.translations]);

  const images = useMemo<PlaceImage[]>(() => {
    if (placeDetail == null) return listImages ?? [];
    return placeDetail.images;
  }, [listImages, placeDetail?.images]);

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
      isVisible={slug !== "" && isVisible}
      setVisible={setVisible}
      backGuard={backGuard}
      height={100}
      customHead
    >
      <PlaceDetailContent
        onBack={() => setVisible(false)}
        onShare={onShare}
        translations={translations}
        markdownContent={mdContent}
        images={images}
        review={placeDetail?.review}
        loading={loading}
      />
    </ScrollableModal>
  );
};

export default PlaceDetail;
