import { configureStore } from "@reduxjs/toolkit";
import mainReducer from './main';
import loginReducer from './login';


export default configureStore({
    reducer: {
        main: mainReducer,
        login: loginReducer
    }
})