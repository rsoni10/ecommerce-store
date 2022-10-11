import { ActionType } from "../constraints/ActionType";
import fakeApiStore from "../../apis/fakeApiStore";

export const fetchProducts = () => async(dispatch ) => {
      const response = await fakeApiStore.get("/products");
      dispatch({type:ActionType.FETCH_PRODUCTS , payload:response.data})
      console.log("midleware response=",response)
   }

export const fetchProduct = (id) =>
   async(dispatch)=>{
    const response = await fakeApiStore.get(`/products/${id}`);
    dispatch({
      type:ActionType.SELECTED_PRODUCT,
      payload:response.data
     })
   }


export const setProducts= (products)=>{
   console.log("action response data" , products);
   return{
    type:ActionType.SET_PRODUCTS,
     payload:products
   }
}

export const selectedProduct = (product) =>{
   return{
      type:ActionType.SELECTED_PRODUCT,
      payload:product
   }
}
export const removeSelectedProduct = () =>{
   return{
      type:ActionType.REMOVE_SELECTED_PRODUCT,
   
   }
}