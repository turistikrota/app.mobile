import { Image, Pressable, View } from "@gluestack-ui/themed";
import React from "react";
import { Dimensions } from "react-native";
import Carousel, { Pagination } from "~components/carousel";
import { PlaceImage } from "~types/place";

const { width } = Dimensions.get("window");

type Props = {
  title: string;
  list: PlaceImage[];
  onPress?: () => void;
};

const PlaceImageCarousel: React.FC<Props> = ({ list, title, onPress }) => {
  const renderItem = ({ order, url }: PlaceImage) => (
    <View
      key={url}
      sx={{
        width: width,
        alignItems: "center",
        justifyContent: "center",
        px: "$2",
      }}
    >
      <Pressable
        sx={{
          overflow: "hidden",
          borderRadius: "$sm",
        }}
        onPress={onPress}
      >
        <Image
          sx={{
            width: width,
            height: width * 0.5,
          }}
          alt={title}
          source={{ uri: url }}
        />
      </Pressable>
    </View>
  );
  return (
    <Carousel
      Pagination={Pagination}
      renderItem={renderItem}
      data={list.sort((a, b) => a.order - b.order)}
      loop
    />
  );
};

export default PlaceImageCarousel;
