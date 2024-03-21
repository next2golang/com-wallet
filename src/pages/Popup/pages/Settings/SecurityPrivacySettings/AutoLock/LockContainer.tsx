import { useState } from "react";
import { ToggleButton } from "../../../../components";

export const LockContainer = () => {
    const [checked, setChecked] = useState<boolean>(false);

    return (
        <div className="flex items-center justify-between w-[350px] py-2 px-2 bg-[#121316] border border-[#262632] rounded-md">
            <div className="flex flex-col items-start justify-center gap-1 w-64">
                <p className="text-base text-[#f2f2f2]">
                    Lock CommuneAI on Sleep mode
                </p>

                <p className="text-sm text-[#717173]">
                    Lock when device is on sleep mode
                </p>
            </div>

            <ToggleButton
                checked={checked}
                setChecked={setChecked}
                size='sm'
            />
        </div>
    )
}