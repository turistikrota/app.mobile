import { createSlice } from "@reduxjs/toolkit";
import { AccountListItem } from "~hooks/account";

type AccountStore = {
    isFetched: boolean,
    isProfileSelected: boolean,
    loading: boolean,
    isError: boolean,
    profile: AccountListItem | null,
}

const accountSlice = createSlice({
    name: 'account',
    initialState: () : AccountStore => ({
        isFetched: false,
        isProfileSelected: false,
        loading: false,
        isError: false,
        profile: null,
    }),
    reducers: {
        setAccount: (state, action) => {
            state.isProfileSelected = action.payload.isProfileSelected;
            state.isFetched = action.payload.isFetched;
            state.isError = action.payload.isError;
            state.loading = action.payload.loading;
            state.profile = action.payload.profile;
        },
        setProfile: (state, action) => {
            state.profile = action.payload;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        reset: (state) => {
            state.isFetched = false;
            state.isProfileSelected = false;
            state.loading = false;
            state.isError = false;
            state.profile = null;
        }
    }
})

export const { setLoading, setAccount, setProfile, reset } = accountSlice.actions;

export default accountSlice.reducer;