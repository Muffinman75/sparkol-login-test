import React, { Component } from "react";
import { loginUser } from "../../authentication";
import { Redirect } from 'react-router-dom';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            isAuthenticated: false,
            errors: {}
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange = (event) => {
        const { name, value } = event.target;
        
        // const validationMsg = this.isValid(value);
    
        this.setState({
            [name]: value
        });
    }
    
    handleSubmit(e) {
        e.preventDefault();
        const user = {
            username: this.state.username,
            password: this.state.password
        };
        loginUser(user);
        this.props.history.push("/Home");
    }

    render() {
        return (
            <div>
                <h1>
                    Sign in
                </h1>
                <form onSubmit={this.handleSubmit}>

                    <label htmlFor="username">
                        Username
                        <input 
                            id="username"
                            type="text"
                            onChange={this.handleInputChange}
                            value={this.state.username}
                            name="username"
                        />
                    </label>

                    <label htmlFor="password">
                        Password
                        <input 
                            id="password"
                            type="password"
                            onChange={this.handleInputChange}
                            value={this.state.password}
                            name="password"
                        />
                    </label>

                    <button type="submit" className="">
                        Login
                    </button>

                </form>
            </div>
        );
    }
}
  
export default Login;