import { createSlice } from "@reduxjs/toolkit";
import { Coordinates } from "~types/place";

type State = {
  location?: Coordinates;
  loading: boolean;
  useForPlaceFilter: boolean;
};

const locationStore = createSlice({
  name: "location",
  initialState: (): State => ({
    useForPlaceFilter: true,
    location: undefined,
    loading: false,
  }),
  reducers: {
    setLocation: (state, action) => {
      state.location = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setUseForPlaceFilter: (state, action) => {
      state.useForPlaceFilter = action.payload;
    },
  },
});

export const { setLocation, setLoading, setUseForPlaceFilter } =
  locationStore.actions;

export default locationStore.reducer;
