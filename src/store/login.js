import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    size: 'large',
};

export const loginSlice = createSlice({
    name: 'login',
    initialState
});

export default loginSlice.reducer;

