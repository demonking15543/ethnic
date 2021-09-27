import { ActionTypes } from "../constans/ActionTypes";


export const setProducts = (products) => {
    return {
        type: ActionTypes.SET_PRODUCTS,
         payload: products,
    };
};


export const selectedProduct = (product) => {
    return {
         type: ActionTypes.SELECTED_PRODUCT,
        payload: product,
    };
};







export const removeSelectedProduct = () => {
    return {
         type: ActionTypes.REMOVE_SELECTED_PRODUCTS,
    
    };

};


export const setMessage = (message) => ({
    type: ActionTypes.SET_MESSAGE,
    payload: message,
  });
  
  export const clearMessage = () => ({
    type: ActionTypes.CLEAR_MESSAGE,
  });



