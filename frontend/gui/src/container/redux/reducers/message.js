import { ActionTypes } from "../constans/ActionTypes";


const initialstate = {};

export default function (state=initialstate, action){
    const { type, payload } = action;
    switch (type) {
        case ActionTypes.SET_MESSAGE:
            return { message: payload };
            
        case ActionTypes.CLEAR_MESSAGE:
            return {message: ""};
    
        default:
            return state
    }
}