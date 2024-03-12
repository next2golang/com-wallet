import { MainButton } from "../../components";
import image from "../../assets/images/finishCreateProfile.png";

const TITLE = 'You are all set !';
const DESCRIPTION = 'Experience the full potential of your wallet';

export const Finish = () => {

    const onGetStartedClicked = () => {
        console.log('get started')
        localStorage.setItem("isPopup", "popup");
    }

    return (
            <>
                <img
                    src={image}
                    alt="You are all set, Commune"
                    className="pt-[150px]"
                />

                <p className="text-white text-3xl pt-12">
                    {TITLE}
                </p>
                <p className="text-[#717173] text-base pt-4">
                    {DESCRIPTION}
                </p>

                <div className="mt-24">
                    <MainButton 
                        title='Get started'
                        onClicked={onGetStartedClicked}
                    />
                </div>
            </>
    )
}
