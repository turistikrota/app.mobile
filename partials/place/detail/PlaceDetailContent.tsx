import {
  Center,
  ScrollView,
  StatusBar,
  VStack,
  View,
} from "@gluestack-ui/themed";
import React, { useRef, useState } from "react";
import {
  Animated,
  NativeScrollEvent,
  NativeSyntheticEvent,
  TouchableOpacity,
} from "react-native";
import ScrollHeader from "~components/ScrollHeader";
import LoadingListItem from "~partials/state/LoadingListItem";
import { FullTranslation, PlaceImage, Review } from "~types/place";
import { imageSort } from "~utils/sort";
import PlaceImageCarousel from "../card/PlaceImageCarousel";
import PlaceDetailReviewSection from "./PlaceDetailReviewSection";
import PlaceDetailTitleSection from "./PlaceDetailTitleSection";

type Props = {
  loading: boolean;
  translations: FullTranslation;
  review?: Review;
  onShare: () => Promise<any>;
  onBack: () => void;
  images?: PlaceImage[];
};

const PlaceDetailContent: React.FC<Props> = ({
  loading,
  translations,
  review,
  images,
  onShare,
  onBack,
}) => {
  let scrollOffsetY = useRef(new Animated.Value(0)).current;
  const [statusBarIsLight, setStatusBarIsLight] = useState(true);
  const [shareLoading, setShareLoading] = useState(false);

  const onScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    Animated.event([{ nativeEvent: { contentOffset: { y: scrollOffsetY } } }], {
      useNativeDriver: false,
    })(e);
    if (e.nativeEvent.contentOffset.y > 314 && statusBarIsLight) {
      setStatusBarIsLight(false);
    } else if (e.nativeEvent.contentOffset.y < 314 && !statusBarIsLight) {
      setStatusBarIsLight(true);
    }
  };

  const onDetailShare = () => {
    setShareLoading(true);
    onShare().finally(() => {
      setShareLoading(false);
    });
  };
  return (
    <View
      sx={{
        height: "100%",
        bg: "$white",
      }}
    >
      <StatusBar
        backgroundColor="transparent"
        barStyle={statusBarIsLight ? "light-content" : "dark-content"}
      />
      <ScrollHeader
        animHeaderValue={scrollOffsetY}
        title={translations.title}
        leftIcon="arrow-back"
        leftPress={onBack}
        rightIcon="export"
        rightLoading={shareLoading}
        rightPress={onDetailShare}
      >
        {images && (
          <PlaceImageCarousel
            list={imageSort(images)}
            title={translations.title}
            calcWidth={(w) => w}
            calcHeight={(w) => w}
            rounded={false}
          />
        )}
      </ScrollHeader>
      <ScrollView
        scrollEventThrottle={16}
        onScroll={onScroll}
        style={{
          height: "100%",
        }}
      >
        <TouchableOpacity>
          {loading ? (
            <Center
              sx={{
                py: "$2",
              }}
            >
              <LoadingListItem />
            </Center>
          ) : (
            <VStack space="sm" px="$2" py="$2">
              <PlaceDetailTitleSection
                description={translations.description}
                title={translations.title}
              />
              <PlaceDetailReviewSection
                averagePoint={review?.averagePoint ?? 0}
                total={review?.total ?? 0}
              />
            </VStack>
          )}
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default PlaceDetailContent;
