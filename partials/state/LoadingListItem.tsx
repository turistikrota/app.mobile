import { Center, Spinner } from "@gluestack-ui/themed";
import React from "react";

const LoadingListItem: React.FC = () => {
  return (
    <Center w="$full">
      <Spinner />
    </Center>
  );
};

export default LoadingListItem;
