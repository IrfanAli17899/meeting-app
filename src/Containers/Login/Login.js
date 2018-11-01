import React, { Component } from 'react';
import './Login.css';

class Login extends Component {
    render() {
        return (
            <div className="FormContainer" >
                <div className="Form animated fadeIn">
                <input type='checkbox' id='form-switch' />
                <div className="labelParent" id="SignIn" 
                onClick={()=>document.querySelector("#form-switch").checked = true} >Sign In</div>
                <div className="labelParent" id="SignUp"
                 onClick={()=>document.querySelector("#form-switch").checked = false} >New Account</div>
                <div className="forms">
                <form id='login-form' action="" method='post'>
                    <input type="text" placeholder="Username" required />
                    <input type="password" placeholder="Password" required />
                    <button type='submit'>Login</button>
                </form>
                <form id='register-form' action="" method='post'>
                    <input type="text" placeholder="Username" required />
                    <input type="email" placeholder="Email" required />
                    <input type="password" placeholder="Password" required />
                    <input type="password" placeholder="Re Password" required />
                    <button type='submit'>Register</button>
                </form>
                </div>
                <div className="footer">
                    <span className="icon facebook">
                        <i className="fa fa-facebook"></i>
                    </span>
                    <span className="icon google">
                        <i className="fa fa-google"></i>
                    </span>
                </div>
            </div>
            </div>
        );
    }
}

export default Login;