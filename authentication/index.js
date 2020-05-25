import axios from "axios";
import jwt_decode from "jwt-decode";

// methods for logging in/out a user

export const loginUser = user => {
    axios
        .post("http://localhost:3333/login", user)
        .then(res => {
            const { token } = res.data;
            setAuthToken(token);
            const decoded = jwt_decode(token);
            localStorage.setItem("user_id", decoded.user.id);
            localStorage.setItem("user_name", decoded.user.name);
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

export const logoutUser = (props) => {
    console.log('props', props);
    localStorage.removeItem("jwtToken");
    localStorage.removeItem("user_id");
    localStorage.removeItem("user_name");
    //setAuthToken(false);
    window.location.href = "/";
};