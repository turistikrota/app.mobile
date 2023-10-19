import {
  Center,
  Heading,
  ScrollView,
  StatusBar,
  Text,
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
import { FullTranslation, PlaceImage } from "~types/place";
import { imageSort } from "~utils/sort";
import PlaceImageCarousel from "../card/PlaceImageCarousel";

type Props = {
  loading: boolean;
  translations: FullTranslation;
  onShare: () => Promise<any>;
  onBack: () => void;
  images?: PlaceImage[];
};

const PlaceDetailContent: React.FC<Props> = ({
  loading,
  translations,
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
            <>
              <Heading>{translations.title}</Heading>
              <Text>{translations.description}</Text>
            </>
          )}
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default PlaceDetailContent;
