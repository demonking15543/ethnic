import { ActionTypes } from "../constans/ActionTypes";

const initialState = {
    products:[]
}


export const ProductReducer = (state=initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            
            return {...state, products:payload};
        case ActionTypes.SET_CATEGORY_PRODUCTS:
            return {...state, products:payload };
        default:
            return state;
    }

};

export const SelectedProductReducer = (state={}, { type, payload }) => {
    switch (type) {
        case ActionTypes.SELECTED_PRODUCT:
            
            return {...state, ...payload};
        case ActionTypes.REMOVE_SELECTED_PRODUCTS:
            return {};   
    
        default:
            return state;
    }

}


