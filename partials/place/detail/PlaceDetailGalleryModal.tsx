import { Box, Image, Pressable, StatusBar, View } from "@gluestack-ui/themed";
import React, { useState } from "react";
import { Dimensions, ScrollView, TouchableOpacity } from "react-native";

import { useSafeAreaInsets } from "react-native-safe-area-context";
import ImagePreview from "~components/ImagePreview";
import ScrollableModal from "~components/ScrollableModal";
import ModalHeader from "~partials/layout/ModalHeader";
import { PlaceImage } from "~types/place";

type Props = {
  images: PlaceImage[];
  isVisible: boolean;
  setVisible: (visible: boolean) => void;
};

const { width } = Dimensions.get("window");

const PlaceDetailGalleryModal: React.FC<Props> = ({
  images,
  isVisible,
  setVisible,
}) => {
  const insets = useSafeAreaInsets();
  const [previewVisible, setPreviewVisible] = useState(false);
  const [previewIndex, setPreviewIndex] = useState(1);

  const backGuard = (): boolean => {
    return !previewVisible;
  };
  return (
    <ScrollableModal
      isVisible={isVisible}
      setVisible={setVisible}
      backGuard={backGuard}
      height={100}
      customHead
      swipeDirection={"right"}
      animationIn="slideInRight"
      animationOut="slideOutRight"
    >
      <StatusBar barStyle={"dark-content"} />
      <ImagePreview
        images={images.map((i) => i.url)}
        isVisible={previewVisible}
        setVisible={setPreviewVisible}
        defaultIndex={previewIndex}
      />
      <View pt={insets.top} bg="white">
        <ModalHeader
          title={""}
          onClose={() => setVisible(false)}
          leftIconName={"arrow-back"}
        />
        <ScrollView>
          <TouchableOpacity activeOpacity={1}>
            <Box
              sx={{
                flexDirection: "row",
                flexWrap: "wrap",
                gap: "$2",
                p: "$2",
                justifyContent: "space-between",
              }}
            >
              {images.map((image, idx) => (
                <Pressable
                  key={image.url}
                  sx={{
                    w: idx % 3 === 0 ? "100%" : "48%",
                  }}
                  onPress={() => {
                    setPreviewVisible(true);
                    setPreviewIndex(idx);
                  }}
                >
                  <Image
                    source={{ uri: image.url }}
                    alt={image.url}
                    sx={{
                      w: width,
                      h: width * 0.7,
                      borderRadius: "$sm",
                    }}
                  />
                </Pressable>
              ))}
            </Box>
            <Box h={"$12"}></Box>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </ScrollableModal>
  );
};

export default PlaceDetailGalleryModal;
