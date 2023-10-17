import { Box, View } from "@gluestack-ui/themed";
import React from "react";
import Modal from "react-native-modal";
import ModalHeader from "~partials/layout/ModalHeader";

type Props = {
  title: string;
  isVisible: boolean;
  setVisible: (isVisible: boolean) => void;
  right?: React.ReactNode;
};

const ScrollableModal: React.FC<React.PropsWithChildren<Props>> = ({
  title,
  isVisible,
  setVisible,
  children,
  right,
}) => {
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
          width: "100%",
          height: "87%",
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
          <ModalHeader
            title={title}
            onClose={() => setVisible(false)}
            right={right}
          />
          {children}
        </Box>
      </View>
    </Modal>
  );
};

export default ScrollableModal;
