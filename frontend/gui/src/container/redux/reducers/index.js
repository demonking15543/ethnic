import { combineReducers } from "redux";
import { ProductReducer, SelectedProductReducer } from "./ProductReducers";
import { NewUserReducer, AuthReducer,LogoutReducer} from './userReducer';



const reducers = combineReducers({
    allproducts:ProductReducer,
    product:SelectedProductReducer,
    user:NewUserReducer,
    auth: AuthReducer,
    logout:LogoutReducer,

});

export default reducers