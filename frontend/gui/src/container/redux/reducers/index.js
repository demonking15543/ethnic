import { combineReducers } from "redux";
import { ProductReducer } from "./ProductReducers";



const reducers = combineReducers({
    allproducts:ProductReducer,

});

export default reducers