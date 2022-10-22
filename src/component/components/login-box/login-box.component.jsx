import React from "react";
import InputField from "../input/input.component";
import "./login-box.styles.css"
const LoginBox = () => {
    return (
        <div className="login-box">
            <div className="login-container">
                <InputField name={"userName"} type={"text"} />
                <InputField name={"password"} type={"password"} />
                <button className="login-button button">log in</button>
                <a href="google.com" className="forget">Forgotten password?</a>
                <div className="hr"></div>
                <button className="signup-button button">Create New Account</button>
            </div>
            <div className="celebirty"><a className="a-tag" href="google.com">Create a Page</a>  for a celebirty, brand or business</div>

        </div>


    )
}

export default LoginBox;