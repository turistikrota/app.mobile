import { Center, Spinner, View } from "@gluestack-ui/themed";
import React from "react";

const LoadingFullScreen: React.FC = () => {
  return (
    <Center
      sx={{
        bg: "$white",
        h: "$full",
        w: "$full",
      }}
    >
      <View>
        <Spinner />
      </View>
    </Center>
  );
};

export default LoadingFullScreen;
