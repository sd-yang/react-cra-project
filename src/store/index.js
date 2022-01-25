import { configureStore } from '@reduxjs/toolkit';
import mainReducer from './main';
import loginReducer from './login';
import searchReducer from './search';


export default configureStore({
    reducer: {
        main: mainReducer,
        login: loginReducer,
        search: searchReducer,
    }
});