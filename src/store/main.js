import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userInfo: {},
    routers: [],
    loading: false
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
        }
    }
});

export const { setUser, setLoading, setRouters } = mainSlice.actions;
export default mainSlice.reducer;