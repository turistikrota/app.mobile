import { configureStore } from "@reduxjs/toolkit";
import accountStore from "./account.store";
import authStore from "./auth.store";

export const store = configureStore({
    reducer: {
        auth: authStore,
        account: accountStore,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch