import { setProductsReducers,selectedProductReducer } from "./ProductReducer";
import { combineReducers } from '@reduxjs/toolkit';
const RootReducers = combineReducers({
    allproductsData :setProductsReducers,
    selectedProduct:selectedProductReducer,
})
export default RootReducers