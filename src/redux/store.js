import { configureStore, combineReducers/*Used for redux-persist*/ } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import loginSlice from "./slices/login-slice";
import themeSlice from "./slices/theme-slice";


const setup = {
    key: 'codingott',
    version: 1,
    storage: storage
}

const slices = combineReducers({
    loginSlice,
    themeSlice
})

const store = configureStore({
    reducer: persistReducer(setup, slices),
    devTools: true,
    middleware: (config)=>config({
        serializableCheck: false
    })
})

export default store