import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/userContext";
import InputField from "../input/input.component";
import "./login-box.styles.css"
const LoginBox = () => {
    const { user, setUser } = useContext(UserContext);
    const [styles, setStyles] = useState({ marginLeft: "0px", backgroundColor: "black" })
    useEffect(() => {
        if (user.userName.length >= 7) {
            setStyles({ marginLeft: "0px", backgroundColor: "green", transitionDelay: "1s" })
        }
        else {
            setStyles({ marginLeft: "0px", backgroundColor: "black", transitionDelay: "0.5s" });
        }
    }
        , [user])
    const validateLength = () => {
        if (user.userName.length < 7) {
            if (styles.marginLeft === "0px") {
                setStyles({ marginLeft: "300px", backgroundColor: "black" })
            }
            else if (styles.marginLeft === "300px") {
                setStyles({ marginLeft: "-300px", backgroundColor: "black" })
            }
            if (styles.marginLeft === "-300px") {
                setStyles({ marginLeft: "300px", backgroundColor: "black" })
            }
        }
        else {

        }
    }
    return (
        <div className="login-box">
            <div className="login-container">
                <InputField name={"userName"} type={"text"} />
                <InputField name={"password"} type={"password"} />
                <button className="login-button button" style={styles} onMouseEnter={validateLength}>log in</button>


            </div>
        </div>

    )
}

export default LoginBox;