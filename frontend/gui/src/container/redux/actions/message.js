import { SET_MESSAGE, CLEAR_MESSAGE } from "../constans/ActionTypes";
export const setMessage = (message) => ({
    type: SET_MESSAGE,
    payload:message,
});

export const clearMessage = () => ({
    type: SET_MESSAGE,
});