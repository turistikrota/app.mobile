import { configureStore } from "@reduxjs/toolkit";
import authStore from "./auth.store";

export const store = configureStore({
    reducer: {
        auth: authStore,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch