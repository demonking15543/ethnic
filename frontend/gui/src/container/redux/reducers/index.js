import { combineReducers } from "redux";
import auth from "./auth";
import message from "./message";
import { ProductReducer, SelectedProductReducer } from "./ProductReducers";



const reducers = combineReducers({
    allproducts:ProductReducer,
    product:SelectedProductReducer,
    auth,
    message,


});

export default reducers