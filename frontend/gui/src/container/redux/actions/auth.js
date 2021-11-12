import { ActionTypes } from "../constans/ActionTypes";
import authService from "../../services/auth.service";

export const register = (firstname, lastname, email, password,terms) => (dispatch) =>{
    return authService.register(firstname, lastname, email, password, terms).then(
        (response) => {

            dispatch({
                type:ActionTypes.REGISTER_SUCCESS,
            });
            dispatch({
                type:ActionTypes.SET_MESSAGE,
                payload: response.data.message
            });


        return Promise.resolve()
        },
        (error) => {
            const message =
            (error.response && 
                error.response.data &&
                error.response.data.message
                ) ||
            error.message ||
            error.toString();
        dispatch({
            type: ActionTypes.REGISTER_FAILED
        });
        dispatch({
            type:ActionTypes.SET_MESSAGE,
            payload:message,
        });
        return Promise.reject();        
        });  

};





export const login = (email, password) => (dispatch) =>{
    return authService.login(email, password).then(
        (data) => {

            dispatch({
                type:ActionTypes.LOGGIN_SUCCESS,
                payload: {user: data},
            });


        return Promise.resolve()
        },
        (error) => {
            const message =
            (error.response && 
                error.response.data &&
                error.response.data.message) ||
            error.message ||
            error.toString();
        dispatch({
            type: ActionTypes.LOGGIN_FAILED
        });
        dispatch({
            type:ActionTypes.SET_MESSAGE,
            payload:message,
        });
        return Promise.reject();        
        });  

};

export  const logout = () => (dispatch) => {
    authService.logout();
    dispatch({
        type:ActionTypes.LOGOUT
    })
}