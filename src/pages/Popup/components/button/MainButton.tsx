import { ButtonProps } from "../../types";

export const MainButton = ({title, onClick}: ButtonProps) => {
    return (
        <button
            onClick={ onClick }
            className="w-72 h-12 bg-[#d97a7a] text-white text-base rounded-2xl transition-all duration-300 hover:bg-[#e25050]"
        >
            {title}
        </button>
    )
}
