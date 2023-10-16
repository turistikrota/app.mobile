import { Box, View } from "@gluestack-ui/themed";
import React from "react";
import Modal from "react-native-modal";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import ModalHeader from "~partials/layout/ModalHeader";

type Props = {
  title: string;
  isVisible: boolean;
  setVisible: (isVisible: boolean) => void;
};

const ScrollableModal: React.FC<React.PropsWithChildren<Props>> = ({
  title,
  isVisible,
  setVisible,
  children,
}) => {
  const insets = useSafeAreaInsets();
  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={() => setVisible(false)}
      onSwipeComplete={() => setVisible(false)}
      useNativeDriverForBackdrop
      swipeDirection={["down"]}
      style={{
        width: "100%",
        margin: 0,
        padding: 0,
      }}
    >
      <View
        sx={{
          justifyContent: "center",
          alignItems: "center",
          bg: "$white",
          height: "100%",
          width: "100%",
          flex: 1,
          position: "absolute",
          bottom: 0,
          pt: insets.top,
          pb: insets.bottom,
        }}
      >
        <Box
          sx={{
            height: "100%",
            width: "100%",
          }}
        >
          <ModalHeader title={title} onClose={() => setVisible(false)} />
          {children}
        </Box>
      </View>
    </Modal>
  );
};

export default ScrollableModal;
