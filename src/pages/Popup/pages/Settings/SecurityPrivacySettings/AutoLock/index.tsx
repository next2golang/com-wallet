import { BackHeader } from "../../../../container";
import lockImage from "../../../../assets/images/commune-lock.png";
import { SetTimerContainer } from "./SetTimerContainer";
import { LockContainer } from "./LockContainer";
import { MainButton } from "../../../../components";

export const AutoLock = () => {

    const onSaveButtonClicked = () => {
        console.log('save button clicked');
    }
    return (
        <div className="popup-container">
            <BackHeader
                headerTitle="Auto Lock"
            />
            
            <p className="w-[300px] text-base text-[#737A82] text-center mt-8">
                You can set how long it takes CommuneAI to lock
            </p>
            
            <img
                src={lockImage}
                alt="Commune-autolock-image"
                className=" w-28 h-28 mt-3"
            />

            <div className="mt-6">
                <SetTimerContainer />
            </div>

            <div className="mt-6">
                <LockContainer />
            </div>

            <div className="mt-12">
                <MainButton
                    title="Save"
                    onClick={onSaveButtonClicked}
                />
            </div>
        </div>
    )
}
