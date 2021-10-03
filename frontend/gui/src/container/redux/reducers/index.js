import { combineReducers } from "redux";
import { ProductReducer, SelectedProductReducer } from "./ProductReducers";
import { NewUserReducer, AuthReducer} from './userReducer';



const reducers = combineReducers({
    allproducts:ProductReducer,
    product:SelectedProductReducer,
    user:NewUserReducer,
    auth: AuthReducer

});

export default reducers