import clsx from "clsx";
import React from "react";

type Size = 'lg' | 'sm';

interface ToggleButtonProps {
    checked: boolean,
    setChecked: React.Dispatch<React.SetStateAction<boolean>>
    size: Size,
}

export const ToggleButton = ({...props} : ToggleButtonProps) => {
    
    return (
        <label className="inline-flex items-center me-5 cursor-pointer">
            <input
                type="checkbox"
                value=""
                checked={props.checked}
                className="sr-only peer"
                onChange={(e) => props.setChecked(e.target.checked)}
            />
            <div className={
                clsx(
                    "relative mx-auto bg-gray-600 rounded-full",
                    "peer dark:bg-gray-700 ring-[#b4b1b1] ring-2 peer-checked:ring-[#d97a7a] dark:peer-focus:ring-[#d97a7a]/40",
                    "peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-[#cf9f9f] peer-checked:after:bg-[#d97a7a] after:border-gray-300 after:border after:rounded-full  after:transition-all",
                    "dark:border-gray-600 peer-checked:bg-[#d97a7a]/40",
                    {
                        "w-[60px] h-8 after:h-7 after:w-7" : props.size === 'lg',
                        "w-11 h-6 after:w-5 after:h-5" : props.size === 'sm'
                    }
                    )
                }
            >
            </div>
        </label>
    )
}
