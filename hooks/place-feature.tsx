import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Services, apiUrl } from "~config/services";
import { httpClient } from "~http/client";
import { RootState } from "~store";
import { setFeatures } from "~store/place.store";
import { isPlaceFeatureList } from "~types/place";

export const usePlaceFeatures = () => {
  const features = useSelector((state: RootState) => state.place.features);
  const dispatch = useDispatch();

  useEffect(() => {
    if (features.isFetched) return;
    dispatch(setFeatures({ isFetched: true, isLoading: true, list: [] }));
    httpClient
      .get(apiUrl(Services.Place, "/feature"))
      .then((res) => {
        if (isPlaceFeatureList(res.data)) {
          dispatch(
            setFeatures({
              isFetched: true,
              isLoading: false,
              list: res.data,
            })
          );
        }
      })
      .catch(() => {
        dispatch(setFeatures({ isLoading: false, list: [], isFetched: true }));
      });
  }, [features.isFetched]);
  return true;
};
