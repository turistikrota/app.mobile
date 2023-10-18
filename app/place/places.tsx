import { Box, ScrollView, Text, View } from "@gluestack-ui/themed";
import React, { useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { PlaceFilterProvider } from "~contexts/place-filter";
import { usePlaceFeatures } from "~hooks/place-feature";
import PlaceFilterContent from "~partials/place/PlaceFilterContent";
import PlaceFilterShareContent from "~partials/place/PlaceFilterShareContent";
import PlaceSortContent from "~partials/place/PlaceSortContent";

const PlaceFilterSection: React.FC = () => {
  return (
    <Box
      sx={{
        width: "100%",
        p: "$2",
        flexDirection: "row",
      }}
    >
      <Box
        sx={{
          w: "$1/6",
        }}
      >
        <PlaceFilterShareContent />
      </Box>
      <Box
        sx={{
          w: "$5/6",
          flexDirection: "row",
        }}
      >
        <PlaceSortContent loading={false} />
        <PlaceFilterContent
          data={{
            filteredTotal: 0,
            total: 0,
            isNext: false,
            isPrev: false,
            list: [],
            page: 0,
          }}
          loading={false}
        />
      </Box>
    </Box>
  );
};

function PlaceListPage() {
  const [showModal, setShowModal] = useState(false);
  const ref = React.useRef(null);
  const insets = useSafeAreaInsets();
  usePlaceFeatures();
  return (
    <View
      sx={{
        height: "100%",
        bg: "$white",
      }}
    >
      <ScrollView>
        <PlaceFilterSection />
        <Text>as</Text>
        <Text>sa</Text>
      </ScrollView>
    </View>
  );
}

export default function PlaceListPageWithProvider() {
  return (
    <PlaceFilterProvider>
      <PlaceListPage />
    </PlaceFilterProvider>
  );
}
