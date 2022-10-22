import React from "react";
import "./login-footer.component.css"
import { languages } from "../../assets/language.data";
const LoginFooter = () => {


    return (
        <div className="footer-container">
            <div className="language-container">
                <ul className="language-list">
                    {languages.map((language, idx) =>
                        <li key={idx}>{language}</li>

                    )}
                </ul>
            </div>
        </div>
    )
}

export default LoginFooter;