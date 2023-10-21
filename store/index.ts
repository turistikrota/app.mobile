import { configureStore } from "@reduxjs/toolkit";
import accountStore from "./account.store";
import authStore from "./auth.store";
import placeStore from "./place.store";
import locationStore from "./location.store";

export const store = configureStore({
    reducer: {
        auth: authStore,
        account: accountStore,
        place: placeStore,
        location: locationStore
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch