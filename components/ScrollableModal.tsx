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
  swipeDirection?: Direction | Direction[];
  height?: number;
};

const ScrollableModal: React.FC<React.PropsWithChildren<Props>> = ({
  title,
  isVisible,
  setVisible,
  children,
  right,
  leftIconName,
  swipeDirection = ["down", "left", "right", "up"],
  backGuard,
  height = 87,
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
      useNativeDriverForBackdrop
      useNativeDriver
      swipeDirection={swipeDirection}
      style={{
        width: "100%",
        margin: 0,
        padding: 0,
      }}
      propagateSwipe
    >
      <View
        sx={{
          justifyContent: "center",
          alignItems: "center",
          bg: "$white",
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
