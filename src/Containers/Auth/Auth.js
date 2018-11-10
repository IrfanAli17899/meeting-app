import React, { Component } from 'react';
import './Login.css';
import Login from "./CustomLogin"
import Signin from './CustomSignUp';
import LoginUsingWeb from './LoginUsingWeb';
import {Link} from "react-router-dom"

class Auth extends Component {
    constructor() {
        super();
        this.state = {
            SignUpCredentials: {
                Username: "",
                Email: "",
                Password: ""
            },
            LoginCredentials: {
                Email: "",
                Password: ""
            },
        }
    }



    changeCredentials = (ev, type) => {
        var stateToBeSave = this.state[type];
        stateToBeSave[ev.target.name] = ev.target.value;
        this.setState({
            [type]: stateToBeSave
        })
    }



    render() {
        const { SignUpCredentials, LoginCredentials } = this.state;
        return (
            <div className="FormContainer" >
            <Link to="/">Click</Link>
                <div className="Form animated fadeIn">
                    <input type='checkbox' id='form-switch' />
                    <div className="labelParent" id="SignIn"
                        onClick={() => document.querySelector("#form-switch").checked = true}
                    >Sign In</div>

                    <div className="labelParent" id="SignUp"
                        onClick={() => document.querySelector("#form-switch").checked = false}
                    >New Account</div>
                    <div className="forms">
                        <Login LoginCredentials={LoginCredentials}
                            changeCredentials={this.changeCredentials} />

                        <Signin SignUpCredentials={SignUpCredentials}
                            changeCredentials={this.changeCredentials} />
                    </div>
                    <LoginUsingWeb />
                </div>
            </div>
        );
    }
}






export default Auth;