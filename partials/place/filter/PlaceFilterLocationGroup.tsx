import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { usePlaceFilter } from "~contexts/place-filter";
import { RootState } from "~store";

function PlaceFilterLocationGroup() {
  const { t } = useTranslation("place");
  const dispatch = useDispatch();
  const { query, setQuery } = usePlaceFilter();
  const locationStore = useSelector((state: RootState) => state.location);
}

export default PlaceFilterLocationGroup;
