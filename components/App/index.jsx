import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {hot} from "react-hot-loader";

import Home from '../Home/index.jsx';
import Login from '../../containers/Login/index.jsx';

import "./App.scss";

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/Home' component={Home} />
        <Route exact path='/' component={Login} />
      </Switch>
    </Router>
  );
}

export default hot(module)(App);