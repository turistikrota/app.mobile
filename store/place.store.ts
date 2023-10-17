import { createSlice } from "@reduxjs/toolkit";
import { PlaceFeatureListItem } from "~types/place";

type State = {
  features: {
    list: PlaceFeatureListItem[];
    isFetched: boolean;
    isLoading: boolean;
  };
};

const placeStore = createSlice({
  name: "place",
  initialState: (): State => ({
    features: {
      list: [],
      isFetched: false,
      isLoading: false,
    },
  }),
  reducers: {
    setFeatures: (state, action) => {
      state.features = action.payload;
    },
  },
});

export const { setFeatures } = placeStore.actions;

export default placeStore.reducer;
