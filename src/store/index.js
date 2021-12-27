import { configureStore } from "@reduxjs/toolkit";
import mainReducer from './main';

export default configureStore({
    reducer: {
        main: mainReducer,
    }
})