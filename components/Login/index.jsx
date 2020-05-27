import React, { useState } from "react";
import { Redirect } from 'react-router-dom';
import axios from "axios";

import { useAuth } from "../../context/auth";



function Login() {

    const [isLoggedIn, setLoggedIn] = useState(false);
    const [isError, setIsError] = useState(false);
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const { setAuthTokens } = useAuth();
  
    const setHeaderToken = token => token ? axios.defaults.headers.common['Authorization'] = token : delete axios.defaults.headers.common['Authorization'];

    async function postLogin() {
        await axios.post("http://localhost:3333/login", {
            username,
            password
        }).then(result => {
            if (result.status === 200) {
                const { token } = result.data;
                setHeaderToken(token)
                setAuthTokens(token);
                setLoggedIn(true);
            } else {
                setIsError(true);
            }
        }).catch(e => {
            setIsError(true);
        });
    }
  
    if (isLoggedIn) {
      return <Redirect to="/Home" />;
    }

    return (
        <div>
            <h1>
                Sign in
            </h1>
            <form>

                <label htmlFor="username" />
                    Username
                <input 
                    id="username"
                    type="text"
                    onChange={e => {
                        setUserName(e.target.value);
                    }}
                    value={username}
                    name="username"
                />

                <label htmlFor="password" />
                    Password
                <input 
                    id="password"
                    type="password"
                    onChange={e => {
                        setPassword(e.target.value);
                    }}
                    value={password}
                    name="password"
                />

                { isError &&<p>Invalid Username or Password</p> }

                <button type="button" className="submit" onClick={postLogin}>
                    Login
                </button>

            </form>
        </div>
    );
}
  
export default Login;