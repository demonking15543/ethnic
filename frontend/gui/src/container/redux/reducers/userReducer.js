import { ActionTypes } from "../constans/ActionTypes";

export const NewUserReducer = (state={}, {type, payload}) => {
    switch (type) {
        case ActionTypes.SIGNUP_SUCCESS:
            return {...state, ...payload}

            
        case ActionTypes.SIGNUP_ERROR:
            return {...state, ...payload}

        default:
            return state
            
    }

}





export const AuthReducer = (state={}, {type, payload}) => {
    switch (type) {
        case ActionTypes.LOGGEDIN:
            return {...state, ...payload}

            
        case ActionTypes.LOGIN_ERROR:
            return {...state, ...payload}

        default:
            return state
            
    }

}

