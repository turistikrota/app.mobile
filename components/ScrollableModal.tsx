import { Box, View } from "@gluestack-ui/themed";
import React from "react";
import Modal, { Direction } from "react-native-modal";
import { IconName } from "~assets/Icons/BoxIcon";
import ModalHeader from "~partials/layout/ModalHeader";

type Props = {
  isVisible: boolean;
  setVisible: (isVisible: boolean) => void;
  title?: string;
  right?: React.ReactNode;
  leftIconName?: IconName;
  backGuard?: () => boolean;
  customHead?: boolean;
  bg?: string;
  swipeDirection?: Direction | Direction[];
  height?: number;
  propagateSwipe?: boolean;
  scrollHorizontal?: boolean;
  animationIn?: AnimationDirection;
  animationOut?: AnimationDirection;
};

type AnimationDirection =
  | "bounce"
  | "flash"
  | "jello"
  | "pulse"
  | "rotate"
  | "rubberBand"
  | "shake"
  | "swing"
  | "tada"
  | "wobble"
  | "bounceIn"
  | "bounceInDown"
  | "bounceInUp"
  | "bounceInLeft"
  | "bounceInRight"
  | "bounceOut"
  | "bounceOutDown"
  | "bounceOutUp"
  | "bounceOutLeft"
  | "bounceOutRight"
  | "fadeIn"
  | "fadeInDown"
  | "fadeInDownBig"
  | "fadeInUp"
  | "fadeInUpBig"
  | "fadeInLeft"
  | "fadeInLeftBig"
  | "fadeInRight"
  | "fadeInRightBig"
  | "fadeOut"
  | "fadeOutDown"
  | "fadeOutDownBig"
  | "fadeOutUp"
  | "fadeOutUpBig"
  | "fadeOutLeft"
  | "fadeOutLeftBig"
  | "fadeOutRight"
  | "fadeOutRightBig"
  | "flipInX"
  | "flipInY"
  | "flipOutX"
  | "flipOutY"
  | "lightSpeedIn"
  | "lightSpeedOut"
  | "slideInDown"
  | "slideInUp"
  | "slideInLeft"
  | "slideInRight"
  | "slideOutDown"
  | "slideOutUp"
  | "slideOutLeft"
  | "slideOutRight"
  | "zoomIn"
  | "zoomInDown"
  | "zoomInUp"
  | "zoomInLeft"
  | "zoomInRight"
  | "zoomOut"
  | "zoomOutDown"
  | "zoomOutUp"
  | "zoomOutLeft"
  | "zoomOutRight";

const ScrollableModal: React.FC<React.PropsWithChildren<Props>> = ({
  title,
  isVisible,
  setVisible,
  children,
  right,
  leftIconName,
  animationIn,
  animationOut,
  bg = "$white",
  swipeDirection = ["down", "left", "right", "up"],
  backGuard,
  height = 87,
  propagateSwipe = true,
  scrollHorizontal = true,
  customHead = false,
}) => {
  const checkClose = () => {
    let closeable = true;
    if (backGuard) {
      closeable = backGuard();
    }
    if (!closeable) return;
    setVisible(false);
  };
  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={checkClose}
      onSwipeComplete={() => setVisible(false)}
      swipeDirection={swipeDirection}
      style={{
        width: "100%",
        margin: 0,
        padding: 0,
      }}
      animationIn={animationIn}
      animationOut={animationOut}
      propagateSwipe={propagateSwipe}
      scrollHorizontal={scrollHorizontal}
    >
      <View
        sx={{
          justifyContent: "center",
          alignItems: "center",
          bg: bg,
          width: "100%",
          height: `${height}%`,
          flex: 1,
          position: "absolute",
          bottom: 0,
          borderTopLeftRadius: "$sm",
          borderTopRightRadius: "$sm",
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.23,
          shadowRadius: 2.62,
          elevation: 4,
        }}
      >
        <Box
          sx={{
            height: "100%",
            width: "100%",
          }}
        >
          {!customHead && (
            <ModalHeader
              title={title!}
              onClose={checkClose}
              right={right}
              leftIconName={leftIconName}
            />
          )}
          {children}
        </Box>
      </View>
    </Modal>
  );
};

export default ScrollableModal;
