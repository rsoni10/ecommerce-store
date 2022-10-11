import RootReducers from "../reducers/RootReducers";
import thunk from 'redux-thunk'
import { configureStore } from "@reduxjs/toolkit";
 const ConfigStore = configureStore({
    reducer:RootReducers,
    middleware: [thunk],
    });
 console.log("ConfigStore response data",ConfigStore)
 export default ConfigStore;