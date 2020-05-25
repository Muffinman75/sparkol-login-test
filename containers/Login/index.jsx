import React from "react";
import { Link } from 'react-router-dom';

function Login() {
    return (
        <div>
            <h1>
                Login here!
            </h1>
            <Link to='/Home'>
                Click here to Login!!
            </Link>
        </div>
    );
}
  
export default Login;