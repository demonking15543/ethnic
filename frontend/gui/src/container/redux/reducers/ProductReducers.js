import { ActionTypes } from "../constans/ActionTypes";

const initialState = {
    products:[]
}


export const ProductReducer = (state=initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            
            return {...state, products:payload};
    
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



const initialUser = {
    profile:{
        email:"",
        username:"",
        password:"",
        name:{
            firstname:"",
            lastname:""
        },
        address:{
            city:"",
            street:"",
            number:"",
            zipcode:"",
            geoloaction:{
                lat: "",
                long:""
            }
        },
        phone: ""
    },
    formsubmitted:false,    
}



export const UserReducer = (state=initialUser, { type, payload }) => {
    switch (type) {
        case ActionTypes.ADD_USER:
            
            return {
                ...state, 
                profile:payload, 
                formsubmitted:false
            };
    
        default:
            return state;
    }

};
