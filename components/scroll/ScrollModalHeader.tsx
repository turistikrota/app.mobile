import { Pressable } from "@gluestack-ui/themed";
import React from "react";
import { Animated } from "react-native";
import BoxIcon, { IconName } from "~assets/Icons/BoxIcon";
import Loading from "~partials/state/Loading";

export type ScrollHeadProps = {
  leftPress?: () => void;
  rightPress?: () => void;
  leftIcon?: IconName;
  rightIcon?: IconName;
  rightLoading?: boolean;
  leftLoading?: boolean;
};

type ScrolledProps = ScrollHeadProps & {
  title: string;
  animation: Animated.AnimatedInterpolation<string | number>;
};

type UnScrolledProps = ScrollHeadProps & {};

const ScrolledModalHeaderContent: React.FC<ScrolledProps> = ({
  title,
  animation,
  leftPress,
  leftIcon,
  rightIcon,
  rightPress,
  rightLoading = false,
  leftLoading = false,
}) => {
  return (
    <>
      <Animated.View
        style={{
          width: "16.666%",
          height: "100%",
          justifyContent: "center",
          alignItems: "flex-start",
          paddingLeft: 8,
          opacity: animation,
        }}
      >
        {leftIcon && (
          <Pressable onPress={leftPress}>
            <Loading value={leftLoading}>
              <BoxIcon name={leftIcon} />
            </Loading>
          </Pressable>
        )}
      </Animated.View>
      <Animated.View
        style={{
          width: "66.666%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Animated.Text
          style={{
            opacity: animation,
            textAlign: "center",
          }}
        >
          {title}
        </Animated.Text>
      </Animated.View>
      <Animated.View
        style={{
          width: "16.666%",
          height: "100%",
          justifyContent: "center",
          alignItems: "flex-end",
          paddingRight: 8,
          opacity: animation,
        }}
      >
        {rightIcon && (
          <Pressable onPress={rightPress}>
            <Loading value={rightLoading}>
              <BoxIcon name={rightIcon} />
            </Loading>
          </Pressable>
        )}
      </Animated.View>
    </>
  );
};

const UnScrolledModalHeaderContent: React.FC<UnScrolledProps> = ({
  leftPress,
  leftIcon,
  rightIcon,
  rightPress,
  rightLoading = false,
  leftLoading = false,
}) => {
  return (
    <>
      <Animated.View
        style={{
          width: "15%",
          height: "100%",
          justifyContent: "center",
          alignItems: "flex-start",
          paddingLeft: 8,
        }}
      >
        {leftIcon && (
          <Pressable
            style={{
              backgroundColor: "white",
              padding: 7,
              borderRadius: 100,
            }}
            onPress={leftPress}
          >
            <Loading value={leftLoading}>
              <BoxIcon name={leftIcon} />
            </Loading>
          </Pressable>
        )}
      </Animated.View>
      <Animated.View
        style={{
          width: "70%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      ></Animated.View>
      <Animated.View
        style={{
          width: "15%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {rightIcon && (
          <Pressable
            style={{
              backgroundColor: "white",
              padding: 7,
              borderRadius: 100,
            }}
            onPress={rightPress}
          >
            <Loading value={rightLoading}>
              <BoxIcon name={rightIcon} />
            </Loading>
          </Pressable>
        )}
      </Animated.View>
    </>
  );
};

export default {
  Scrolled: ScrolledModalHeaderContent,
  UnScrolled: UnScrolledModalHeaderContent,
};
