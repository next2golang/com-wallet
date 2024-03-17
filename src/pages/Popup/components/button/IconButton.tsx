
import { ButtonIcon } from "../Icon/ButtonIcon";
import { ButtonProps } from "../../types";

export const IconButton = ({title, onClick}: ButtonProps) => {
    
    return (
        <button
            className="flex items-center justify-center gap-[6px] bg-[#262632] rounded-xl py-3 px-4"
            onClick={onClick}
        >
            <span className="flex justify-center items-center w-6 h-6 bg-[#d97a7a] rounded-full">
                <ButtonIcon iconName={title}/>
            </span>
            <p className="text-sm text-[#F7FBFF]">
                {title}
            </p>
        </button>
    )
}
