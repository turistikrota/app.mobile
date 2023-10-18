import { Pressable, View, useToken } from "@gluestack-ui/themed";
import React from "react";
import { Dimensions } from "react-native";
import FastImage from "react-native-fast-image";
import Carousel, { Pagination } from "~components/carousel";
import { PlaceImage } from "~types/place";

const { width } = Dimensions.get("window");

type Props = {
  title: string;
  list: PlaceImage[];
  onPress?: () => void;
  calcWidth?: (width: number) => number;
  calcHeight?: (height: number) => number;
  rounded?: boolean;
};

const PlaceImageCarousel: React.FC<Props> = ({
  list,
  title,
  onPress,
  calcHeight,
  calcWidth,
  rounded = true,
}) => {
  const space = useToken("space", "2");
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
          borderRadius: rounded ? "$sm" : undefined,
        }}
        onPress={onPress}
      >
        <FastImage
          style={{
            width: calcWidth ? calcWidth(width) : width - 2 * space,
            height: calcHeight ? calcHeight(width) : width * 0.7,
          }}
          aria-label={title}
          source={{
            uri: url,
            priority:
              order === 0 ? FastImage.priority.high : FastImage.priority.low,
          }}
        />
      </Pressable>
    </View>
  );
  return (
    <Carousel
      Pagination={Pagination}
      renderItem={renderItem}
      data={list.sort((a, b) => a.order - b.order)}
    />
  );
};

export default PlaceImageCarousel;
