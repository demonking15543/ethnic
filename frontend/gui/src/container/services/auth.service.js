import axios from "axios";
const Base_URL = 'http://127.0.0.1:8000/api/accounts/'

const register = (firstname, lastname, email, password) => {
    return axios.post(
        Base_URL + 'signup/', {
            firstname,
            lastname,
            email,
            password
        }
    );
;
}


const login = (email, password) => {
    return axios.post(
        Base_URL + 'token/', {
            email,
            password
        }
    )
    .then((response) => {
        if(response.data.access){
            localStorage.setItem('user', JSON.stringify(response.data));
        }
        return response.data;
    });
};

const logout = () =>{
    localStorage.removeItem('user');
};

export default {register, login, logout}