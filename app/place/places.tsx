import { Box, Button, ButtonText, Text, View } from "@gluestack-ui/themed";
import React, { useState } from "react";
import Modal from "react-native-modal";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import ModalHeader from "~partials/layout/ModalHeader";

export default function PlaceListPage() {
  const [showModal, setShowModal] = useState(false);
  const ref = React.useRef(null);
  const insets = useSafeAreaInsets();
  return (
    <View
      sx={{
        height: "100%",
        bg: "$white",
      }}
    >
      <Text>Place list view</Text>
      <Button onPress={() => setShowModal(true)} ref={ref}>
        <ButtonText>Show Modal</ButtonText>
      </Button>
      <Modal
        isVisible={showModal}
        onBackdropPress={() => setShowModal(false)}
        onSwipeComplete={() => setShowModal(false)}
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
            <ModalHeader title="Filtrele" onClose={() => setShowModal(false)} />
            <Button onPress={() => setShowModal(false)} mt="$5">
              <ButtonText>Hide Modal</ButtonText>
            </Button>
          </Box>
        </View>
      </Modal>
    </View>
  );
}
