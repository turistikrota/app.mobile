import { Box, StatusBar, Text, View } from "@gluestack-ui/themed";
import React from "react";
import { Dimensions, TouchableOpacity } from "react-native";
import FastImage from "react-native-fast-image";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import BoxIcon from "~assets/Icons/BoxIcon";
import ScrollableModal from "./ScrollableModal";
import Carousel from "./carousel";

type Props = {
  isVisible: boolean;
  setVisible: (isVisible: boolean) => void;
  images: string[];
  defaultIndex?: number;
};

const { width, height } = Dimensions.get("window");

const ImagePreview: React.FC<Props> = ({
  images,
  isVisible,
  defaultIndex = 0,
  setVisible,
}) => {
  const insets = useSafeAreaInsets();

  const renderItem = ({ item }: { item: string }) => (
    <TouchableOpacity key={item} activeOpacity={1}>
      <FastImage
        style={{
          width: width,
          height: "100%",
        }}
        source={{
          uri: item,
          priority: FastImage.priority.high,
        }}
        resizeMode={FastImage.resizeMode.contain}
      />
    </TouchableOpacity>
  );

  const XPagination = ({
    total,
    currentPage,
  }: {
    total: number;
    currentPage: number;
  }) => (
    <View
      sx={{
        position: "absolute",
        top: 0,
        right: "$2",
      }}
    >
      <Text color="$white">
        {currentPage} / {total}
      </Text>
    </View>
  );

  return (
    <ScrollableModal
      isVisible={isVisible}
      setVisible={setVisible}
      height={100}
      customHead
      bg="$black"
      swipeDirection={"right"}
      animationIn="slideInRight"
      animationOut="slideOutRight"
    >
      <StatusBar barStyle={"light-content"} />
      <View pt={insets.top} bg="$black">
        <Box
          sx={{
            h: height - insets.top - insets.bottom - 44,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              width: "100%",
              px: "$2",
              justifyContent: "space-between",
              flexDirection: "row",
              position: "absolute",
              zIndex: 1,
              top: 0,
            }}
          >
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => setVisible(false)}
            >
              <BoxIcon name="arrow-back" color="white" />
            </TouchableOpacity>
          </Box>
          <Carousel
            Pagination={XPagination}
            renderItem={renderItem}
            initialPage={defaultIndex + 1}
            data={images.map((img) => ({ item: img }))}
          />
        </Box>
      </View>
    </ScrollableModal>
  );
};

export default ImagePreview;
