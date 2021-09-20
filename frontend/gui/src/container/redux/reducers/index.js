import { combineReducers } from "redux";
import { ProductReducer, SelectedProductReducer, UserReducer } from "./ProductReducers";



const reducers = combineReducers({
    allproducts:ProductReducer,
    product:SelectedProductReducer,
    user:UserReducer,

});

export default reducers