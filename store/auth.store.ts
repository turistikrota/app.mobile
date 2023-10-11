import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isFetched: false,
        isAuthenticated: false,
        loading: false,
        isError: false,
    },
    reducers: {
        setAuth: (state, action) => {
            state.isAuthenticated = action.payload.isAuthenticated;
            state.isFetched = action.payload.isFetched;
            state.isError = action.payload.isError;
            state.loading = action.payload.loading;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
    }
})

export const { setLoading, setAuth } = authSlice.actions;

export default authSlice.reducer;