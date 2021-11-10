import { ActionTypes } from "../constans/ActionTypes";

const user = JSON.parse(localStorage.getItem('user'));
const initialstate = user ? {isLogedIn: true, user} : { isLogedIn: false, user: null};

export default function (state=initialstate, action) {
    const {type, payload } = action;


    switch (type) {
        case ActionTypes.REGISTER_SUCCESS:
            return {
                ...state,
                isLogedIn: false
            };

        case ActionTypes.REGISTER_FAILED:
            return {
                ...state,
                isLogedIn: false
            };
        case ActionTypes.LOGGIN_SUCCESS:
            return {
                ...state,
                isLogedIn: true,
                user: payload.user,
            };            


        case ActionTypes.LOGGIN_FAILED:
            return {
                ...state,
                isLogedIn: false,
                user: null,
            };            
        case ActionTypes.LOGOUT:
            return {
                ...state,
                isLogedIn: false,
                user: null,
            };            
            break;
    
        default:
            return state;
    }
}
