import { Center, Spinner, View } from "@gluestack-ui/themed";
import React from "react";

const LoadingFullPage: React.FC = () => {
  return (
    <Center h="$full" w="$full">
      <View>
        <Spinner />
      </View>
    </Center>
  );
};

export default LoadingFullPage;
