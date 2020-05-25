import axios from "axios";
import jwt_decode from "jwt-decode";

// methods for logging in/out a user

export const loginUser = user => {
    axios
        .post("/login", user)
        .then(res => {
            console.log('login user res', res);
            
            const { token } = res.data;
            setAuthToken(token);
            const decoded = jwt_decode(token);
            localStorage.setItem("user_id", decoded.id);
            localStorage.setItem("user_name", decoded.userName);
      })
};

const setAuthToken = token => {
    if(token) {
        axios.defaults.headers.common['Authorization'] = token;
    }
    else {
        delete axios.defaults.headers.common['Authorization'];
    }
}

export const logoutUser = () => {
  localStorage.removeItem("jwtToken");
  localStorage.removeItem("user_id");
  localStorage.removeItem("user_name");
  setAuthToken(false);
  window.location.href = "/";
};