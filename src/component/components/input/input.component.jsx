import { useContext } from "react";
import { UserContext } from "../../context/userContext";
import "./input.component.css"

const InputField = ({ name, type }) => {
    const { user, setUser } = useContext(UserContext);
    const inputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });

    }
    const placeholder = name === "userName" ? "Email address or phone number" : "Password"

    return (
        <input type={type} onChange={inputChange} name={name} className="input" placeholder={placeholder} />
    )
}
export default InputField;