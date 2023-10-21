import React, { useRef } from "react";
import { FlatList } from "react-native";
import { RefreshControl } from "react-native-gesture-handler";
import { PlaceListItem } from "~types/place";
import PlaceListCard from "./card/PlaceListCard";

type Props = {
  loading: boolean;
  refreshing: boolean;
  data: PlaceListItem[];
  onSelect: (item: PlaceListItem) => void;
  onNextPage: () => void;
  onRefresh: () => void;
};

const PlaceList: React.FC<Props> = ({
  loading,
  refreshing,
  data,
  onSelect,
  onNextPage,
  onRefresh,
}) => {
  const flatRef = useRef<any>();
  return (
    <FlatList
      ref={flatRef}
      data={data}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
      renderItem={({ item }) => (
        <PlaceListCard {...item} onSelect={() => onSelect(item)} />
      )}
      onEndReached={onNextPage}
    />
  );
};

export default PlaceList;
