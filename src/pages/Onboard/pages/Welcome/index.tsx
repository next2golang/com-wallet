import { WelcomeTextContainer } from "./WelcomeTextContainer";
import { ButtonContainer } from "./ButtonContainer";
import welcomeImage from "../../assets/images/Welcome-image.png";

const WELCOME = 'Welcome to Commune ai'

export const Welcome = () => {
    return (
        <div className="welcome-container">
            <WelcomeTextContainer />

            <img
                src={welcomeImage}
                alt={WELCOME}
                className="pt-10"
            />

            <ButtonContainer />
        </div>
    )
}
