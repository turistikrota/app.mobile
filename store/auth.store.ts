import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isFetched: false,
        isAuthenticated: false,
        loading: false,
        isError: false,
        fcmToken: "",
        fcmIsSet: false,
    },
    reducers: {
        setAuth: (state, action) => {
            state.isAuthenticated = action.payload.isAuthenticated;
            state.isFetched = action.payload.isFetched;
            state.isError = action.payload.isError;
            state.loading = action.payload.loading;
            state.fcmIsSet = false;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        reset: (state) => {
            state.isFetched = false;
            state.isAuthenticated = false;
            state.loading = false;
            state.isError = false;
            state.fcmIsSet = false;
        },
        loggedIn: (state) => {
            state.isAuthenticated = true;
            state.isFetched = false;
            state.loading = false;
            state.isError = false;
            state.fcmIsSet = false;
        },
        setFcmToken: (state, action) => {
            state.fcmToken = action.payload;
        },
        setFcmTokenIsSet: (state, action) => {
            state.fcmIsSet = action.payload;
        }
    }
})

export const { setLoading, setAuth, reset, loggedIn, setFcmToken, setFcmTokenIsSet } = authSlice.actions;

export default authSlice.reducer;