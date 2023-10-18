import React from "react";
import { PlaceListItem } from "~types/place";

type Props = {} & PlaceListItem;

const PlaceMapCard: React.FC<Props> = ({
    averageTimeSpent,
    coordinates,
    images,
    isPayed,
    review,
    translations,
    type
}) => {
  return <></>;
};

export default PlaceMapCard;
