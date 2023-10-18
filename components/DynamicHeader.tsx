import * as React from "react";
import { Animated, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import ScrollModalHeader, { ScrollHeadProps } from "./scroll/ScrollModalHeader";

const Header_Max_Height = 350;
const Header_Min_Height = 44;

type Props = ScrollHeadProps & {
  animHeaderValue: Animated.Value;
  title: string;
};

const DynamicHeader: React.FC<React.PropsWithChildren<Props>> = ({
  animHeaderValue,
  children,
  title,
  ...scrollProps
}) => {
  const insets = useSafeAreaInsets();

  const animations = React.useMemo(
    () => ({
      headerBg: animHeaderValue.interpolate({
        inputRange: [
          0,
          Header_Min_Height,
          Header_Max_Height - Header_Min_Height - 20,
          Header_Max_Height - Header_Min_Height,
        ],
        outputRange: ["transparent", "transparent", "transparent", "white"],
        extrapolate: "clamp",
      }),
      headerHeight: animHeaderValue.interpolate({
        inputRange: [0, Header_Max_Height - Header_Min_Height],
        outputRange: [Header_Max_Height, Header_Min_Height + insets.top],
        extrapolate: "clamp",
      }),
      paddingTop: animHeaderValue.interpolate({
        inputRange: [0, Header_Max_Height - Header_Min_Height],
        outputRange: [0, insets.top],
        extrapolate: "clamp",
      }),
      paddingTopNegative: animHeaderValue.interpolate({
        inputRange: [0, Header_Max_Height - Header_Min_Height],
        outputRange: [insets.top, insets.top * -1],
        extrapolate: "clamp",
      }),
      fadeIn: animHeaderValue.interpolate({
        inputRange: [
          0,
          Header_Min_Height,
          Header_Max_Height - Header_Min_Height - 10,
          Header_Max_Height - Header_Min_Height,
        ],
        outputRange: [0, 0, 0, 1],
        extrapolate: "clamp",
      }),
      fadeOut: animHeaderValue.interpolate({
        inputRange: [0, Header_Max_Height - Header_Min_Height * 2],
        outputRange: [1, 0],
        extrapolate: "clamp",
      }),
      border: animHeaderValue.interpolate({
        inputRange: [
          0,
          Header_Min_Height,
          Header_Max_Height - Header_Min_Height - 10,
          Header_Max_Height,
        ],
        outputRange: [0, 0, 0, StyleSheet.hairlineWidth],
        extrapolate: "clamp",
      }),
    }),
    [animHeaderValue]
  );

  return (
    <Animated.View
      style={[
        styles.header,
        {
          height: animations.headerHeight,
          backgroundColor: animations.headerBg,
          paddingTop: 0,
        },
      ]}
    >
      <Animated.View
        style={[
          {
            backgroundColor: animations.headerBg,
            position: "absolute",
            paddingTop: animations.paddingTop,
            height: Header_Min_Height + insets.top,
            top: 0,
            left: 0,
            right: 0,
            zIndex: 5,
            borderBottomWidth: animations.border,
            borderBottomColor: "$borderDark400",
            flexDirection: "row",
          },
        ]}
      >
        <ScrollModalHeader.Scrolled
          animation={animations.fadeIn}
          title={title}
          {...scrollProps}
        />
      </Animated.View>

      <Animated.View
        style={{
          position: "absolute",
          paddingTop: insets.top,
          height: Header_Min_Height + insets.top,
          top: 0,
          left: 0,
          right: 0,
          zIndex: 5,
          flexDirection: "row",
          opacity: animations.fadeOut,
        }}
      >
        <ScrollModalHeader.UnScrolled {...scrollProps} />
      </Animated.View>

      {children}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  header: {
    justifyContent: "center",
    alignItems: "center",
    left: 0,
    right: 0,
    paddingTop: 10,
  },
  headerText: {
    color: "#fff",
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default DynamicHeader;
