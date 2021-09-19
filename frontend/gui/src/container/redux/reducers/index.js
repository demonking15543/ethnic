import { combineReducers } from "redux";
import { ProductReducer, SelectedProductReducer } from "./ProductReducers";



const reducers = combineReducers({
    allproducts:ProductReducer,
    product:SelectedProductReducer,

});

export default reducers