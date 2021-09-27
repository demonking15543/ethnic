import axios from "axios";

const API_URL = "http://127.0.0.1:8080/api/v1/accounts/";

const register = (firstname,lastname, email, password) => {
  return axios.post(API_URL + "signup/", {
    firstname,
    lastname,
    email,
    password,
  });
};

const login = (username, password) => {
  return axios
    .post(API_URL + "token/", {
      username,
      password,
    })
    .then((response) => {
        if (response.data.access) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
  
        return response.data;
      });
  };
  
  const logout = () => {
    localStorage.removeItem("user");
  };
  
  export default {
    register,
    login,
    logout,
  };
