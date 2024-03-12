import clsx from "clsx";
import { ActiveButtonProps } from "../../types";

export const MainActiveButton = ({title, isDisabled, onClicked}: ActiveButtonProps) => {

    return (
        <button
            onClick={onClicked}
            disabled={isDisabled}
            className={
                clsx(
                    " w-[484px] h-[60px] text-lg rounded-3xl transition-all duration-300",
                    {
                        "bg-[#262632] text-[#717173]" : isDisabled,
                        "bg-[#d97a7a] text-white hover:bg-[#e25050]" : !isDisabled,
                    }
                )
            }
        >
            {title}
        </button>
    )
}
