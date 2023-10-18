import React from "react";
import { StyleSheet, View } from "react-native";

export type Props = {
  total: number;
  currentPage: number;
  theme?: "dark" | "light";
};

const Pagination: React.FC<Props> = ({
  total,
  currentPage,
  theme = "light",
}) => {
  const opacities = theme === "dark" ? [0.5, 0.2] : [0.8, 0.4];

  return (
    <View style={styles.container}>
      {Array.from({ length: total }).map((_, index) => (
        <View
          key={`pagination-dot-${index}`}
          style={[
            styles.dot,
            {
              opacity: currentPage === index + 1 ? opacities[0] : opacities[1],
              marginLeft: index === 0 ? 0 : 8,
              backgroundColor: theme === "dark" ? "#000" : "#fff",
            },
          ]}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: "5%",
    left: 0,
    right: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
  },
});

export default Pagination;
