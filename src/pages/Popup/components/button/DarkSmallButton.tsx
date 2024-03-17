
import { ButtonProps } from "../../types"

export const DarkSmallButton = ({title, onClick}: ButtonProps) => {

    return (
        <button
            onClick={ onClick }
            className="w-40 h-10 bg-[#1b1b25] text-white text-base rounded-2xl transition-all duration-300 hover:bg-[#1b1b25] hover:border hover:border-[#aaaab1]"
        >
            {title}
        </button>
    )
}
