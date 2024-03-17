import { useState } from "react";
import { ToggleButton } from "../../../components";

export const ShareAnonymousData = () => {

    const [shareAnonymousData, setShareAnonymousData] = useState(false);

    return (
        <div className="flex justify-between items-start p-4 w-80 bg-[#121316] rounded-xl border border-[#262632] mt-12">
            <div className="flex flex-col items-start gap-2 w-64">
                <p className="text-xl text-[#F7FBFF]">
                    Share anonymous Data
                </p>
                <p className="text-base text-[#717173]">
                    Help us improve our performance to serve you better
                </p>
            </div>
            
            <ToggleButton
                size='sm'
                checked={shareAnonymousData}
                setChecked={setShareAnonymousData}
            />
        </div>
    )
}
