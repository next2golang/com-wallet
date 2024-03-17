import clsx from "clsx";
import { ActiveButtonProps } from "../../types";

export const RedSmallActiveButton = ({title, isDisabled, onClick}: ActiveButtonProps) => {

    return (
        <button
            onClick={ onClick }
            className={
                clsx (
                    "w-40 h-10 text-base rounded-2xl transition-all duration-300",
                    isDisabled && "bg-[#262632] text-[#717173]",
                    !isDisabled && "bg-[#d97a7a] text-white hover:bg-[#e25050]"
                )
            }
        >
            {title}
        </button>
    )
}
