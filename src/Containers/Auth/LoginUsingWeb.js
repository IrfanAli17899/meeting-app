import React from "react";
import { LoginUsingGoogleOrFacebook } from "../../Store/Actions/API/Login_Api"

const LoginUsingWeb = (props) => {
 return(
    <div className="footer">

    <span
        className="icon facebook"
        onClick={() => LoginUsingGoogleOrFacebook("facebook")}
    >
        <i className="fa fa-facebook"></i>
    </span>

    <span
        className="icon google"
        onClick={() => LoginUsingGoogleOrFacebook("google")}
    >
        <i className="fa fa-google"></i>
    </span>

</div>
 )
}

export default LoginUsingWeb;