import { ActionType } from "../constraints/ActionType";
const initialState={
    AllProductsData:[]
}
export const  setProductsReducers = (state=initialState , {type,payload})=>{
   console.log("Reducer response data" , payload);

    switch (type) {
        case ActionType.SET_PRODUCTS:
            return{
                ...state , AllProductsData:payload
            }
        case ActionType.FETCH_PRODUCTS:
            return{
                ...state , AllProductsData:payload
            }
        default:
            return{state}
    }
}

export const selectedProductReducer = (state={},{type,payload}) =>{
  switch (type) {
    case ActionType.SELECTED_PRODUCT:
        return{
            ...state,
            ...payload
        }
    case ActionType.REMOVE_SELECTED_PRODUCT:
        return{ }
    default:
        return{state}
  }
}