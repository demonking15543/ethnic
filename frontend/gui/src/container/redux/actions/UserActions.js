import { ActionTypes } from '../constans/ActionTypes';

export const setNewUser = (user) =>{
    return {
        type : ActionTypes.SIGNUP_SUCCESS,
        payload: user
    }
}

export const setUserError = (user) =>{
    return {
        type : ActionTypes.SIGNUP_ERROR,
        payload: user
    }
}





export const setLoggedIn = (user) =>{
    console.log(user.access)
    localStorage.setItem('token', 'Bearer '+ user.access)
    return {
        type : ActionTypes.LOGGEDIN,
        payload: user
    }
}

export const setLogInError = (user) =>{
    return {
        type : ActionTypes.LOGIN_ERROR,
        payload: user
    }
}
