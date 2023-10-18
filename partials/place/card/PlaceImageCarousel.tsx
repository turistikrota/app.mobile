import { View } from "@gluestack-ui/themed";
import React from "react";
import { Dimensions, Image, StyleSheet } from "react-native";
import Carousel, { Pagination } from "~components/carousel";
import { PlaceImage } from "~types/place";

const { width } = Dimensions.get("window");

type Props = {
  list: PlaceImage[];
};

const PlaceImageCarousel: React.FC<Props> = ({ list }) => {
  const renderItem = ({ order, url }: PlaceImage) => (
    <View key={url} style={styles.cardContainer}>
      <View style={styles.cardWrapper}>
        <Image style={styles.card} source={{ uri: url }} />
      </View>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  cardContainer: {
    alignItems: "center",
    justifyContent: "center",
    width,
  },
  cardWrapper: {
    borderRadius: 8,
    overflow: "hidden",
  },
  card: {
    width: width * 0.9,
    height: width * 0.5,
  },
  cornerLabel: {
    position: "absolute",
    bottom: 0,
    right: 0,
    borderTopLeftRadius: 8,
  },
  cornerLabelText: {
    fontSize: 12,
    color: "#fff",
    fontWeight: "600",
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 2,
    paddingBottom: 2,
  },
});

export default PlaceImageCarousel;
