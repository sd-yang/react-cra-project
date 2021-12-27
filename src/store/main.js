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
            state.loading = action.payload
        }
    }
})

export const { setUser, setLoading } = mainSlice.actions;
export default mainSlice.reducer;