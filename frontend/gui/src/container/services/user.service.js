import axios from "axios";
import authHeader from "./auth-header";


const Base_URL = 'http://127.0.0.1:8000/api/accounts/'

class UserServices{
    getHello(){
        return axios.get(Base_URL + 'hello/', {headers: authHeader()});
    }
}
export default new UserServices();