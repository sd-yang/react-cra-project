import { createSlice } from "@reduxjs/toolkit";
import { getStorage } from '../utils';

const initialState = {
    userInfo: {},
    routers: [],
    loading: false,
    theme: getStorage('theme') || 'custom-default'
};

export const mainSlice = createSlice({
    name: 'main',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.userInfo = action.payload;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setRouters: (state, action) => {
            state.routers = action.payload;
        },
        setTheme: (state, action) => {
            state.theme = action.payload;
        },
    }
});

export const { setUser, setLoading, setRouters, setTheme } = mainSlice.actions;
export default mainSlice.reducer;