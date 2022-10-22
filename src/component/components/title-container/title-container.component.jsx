import "./title-container.styles.css"
import facebookImage from "../../assets/facebook.svg"
const TitleContainer = () => {

    return (
        <div className="title-container">
            <img src={facebookImage} alt={"facebook"} className={"facebook-image"} />
            <div className="descrption">Facebook helps you connect and share with the people in your life.</div>
        </div>
    )
}
export default TitleContainer;