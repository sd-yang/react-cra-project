import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    editorRow: {},
    status: {},
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
        }
    }
});

export const { setEditorRow, setStatus } = searchSlice.actions;
export default searchSlice.reducer;
