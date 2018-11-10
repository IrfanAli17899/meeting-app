/*eslint-disable*/ 

import React from "react";
import { customLoginSignUp } from "../../Store/Actions/API/Login_Api";

const Signin = (props) => {
    const { SignUpCredentials } = props
    return (
        <form id='register-form' action="JavaScript:void(0)"
            onSubmit={() => customLoginSignUp(SignUpCredentials, "SignUp")}
            method='post'
        >

            <input
                type="text"
                placeholder="Username"
                name="Username"
                required
                value={SignUpCredentials.Username}
                onChange={(ev) => props.changeCredentials(ev, "SignUpCredentials")}
            />
            <input
                type="email"
                placeholder="Email"
                name="Email"
                required
                value={SignUpCredentials.Email}
                onChange={(ev) => props.changeCredentials(ev, "SignUpCredentials")}
            />
            <input
                type="password"
                placeholder="Password"
                name="Password"
                required
                value={SignUpCredentials.Password}
                onChange={(ev) => props.changeCredentials(ev, "SignUpCredentials")}
            />

            <button type='submit'>Register</button>

        </form>
    )
}
export default Signin;