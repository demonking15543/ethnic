import { ActionTypes } from "../constans/ActionTypes";


export const setProducts = (products) => {
    return {
        type: ActionTypes.SET_PRODUCTS,
         payload: products,
    };
};