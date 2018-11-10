/*eslint-disable*/ 

import React from "react";
import { customLoginSignUp } from "../../Store/Actions/API/Login_Api";


const Login = (props) => {

    const { LoginCredentials } = props
    
    return (
        <form id='login-form' action="JavaScript:void(0)"
            onSubmit={() => customLoginSignUp(LoginCredentials, "Login")}
            method='post'>

            <input
                type="email"
                placeholder="Email"
                name="Email"
                required
                value={LoginCredentials.Email}
                onChange={(ev) => props.changeCredentials(ev, "LoginCredentials")}
            />
            <input
                type="password"
                placeholder="Password"
                name="Password"
                required
                value={LoginCredentials.Password}
                onChange={(ev) => props.changeCredentials(ev, "LoginCredentials")}
            />

            <button type='submit'>Login</button>

        </form>
    )
}
export default Login;