import { useState } from "react";
import { BackHeader } from "../../../container";
import { ToggleButton } from "../../../components"; 

export const DeveloperSettings = () => {

    const [isEnabled, setIsEnabled] = useState(true);
    const [checked, setChecked] = useState(false);

    const onIsEnableToggleButtonClicked = () => {
        setIsEnabled((prev) => !prev);
    }

    return (
        <div className="popup-container">
            <BackHeader headerTitle="Developer Setting" />
            <div className="flex justify-between items-start w-80 mt-4 pl-2 py-4 bg-[#121316] rounded-xl">
                <div className="flex flex-col justify-start w-50">
                    <p className="text-[#F7FBFF] text-base">
                        Enable Testnets
                    </p>
                    <p className="text-[#848486] text-sm break-words">
                        Allows you to view and interact with testnet network
                    </p>
                </div>
                <ToggleButton
                    size='sm'
                    checked={checked}
                    setChecked={setChecked}
                />
            </div>
        </div>
        
    )
}
