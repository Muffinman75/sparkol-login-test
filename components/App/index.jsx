import React, { useState } from "react";
import "@babel/polyfill";
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import jwt_decode from "jwt-decode";
import {hot} from "react-hot-loader";

import Home from '../Home/index.jsx';
import Login from '../Login/index.jsx';

import { AuthContext, useAuth } from "../../context/auth";

function PrivateRoute({ component: Component, ...rest }) {
    const { authTokens } = useAuth();

    return (
        <Route
            {...rest}
            render={props =>
                authTokens ? (
                    <Component {...props} />
                ) : (
                    <Redirect to="/" />
                )
            }
        />
    );
}

function App() {
    const existingTokens = localStorage.getItem("token");
    const [authTokens, setAuthTokens] = useState(existingTokens);

    const setTokens = (data) => {
        const decodedToken = jwt_decode(data);
        localStorage.setItem("token", data);
        localStorage.setItem("user_id", decodedToken.user.id);
        localStorage.setItem("user_name", decodedToken.user.name);
        setAuthTokens(data);
    }

    return (
      <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
          <Router>
              <Switch>
                  <Route exact path="/" component={Login} />
                  <PrivateRoute path="/Home" component={Home}/>
              </Switch>
          </Router>
      </AuthContext.Provider>

    );
}

export default hot(module)(App);