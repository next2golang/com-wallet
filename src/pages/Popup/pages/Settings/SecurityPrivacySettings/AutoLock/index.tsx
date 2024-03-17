import { useState } from "react";
import { BackHeader } from "../../../../container";
import { ToggleButton } from "../../../../components";
import lockImage from "../../../../assets/images/commune-lock.png";

export const AutoLock = () => {
    const [checked, setChecked] = useState<boolean>(false);

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

            <div className="mt-20">
                <ToggleButton
                    checked={checked}
                    setChecked={setChecked}
                    size='lg'
                />
            </div>
        </div>
    )
}
