import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    editorRow: {},
    status: {},
    type: 'list',
};

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setEditorRow: (state, action) => {
            state.editorRow = action.payload;
        },
        setStatus: (state, action) => {
            state.status = action.payload;
        },
        setType: (state, action) => {
            state.type = action.payload;
        },
    }
});

export const { setEditorRow, setStatus, setType } = searchSlice.actions;
export default searchSlice.reducer;
