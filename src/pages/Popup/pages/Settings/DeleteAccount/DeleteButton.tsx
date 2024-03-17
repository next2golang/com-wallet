
import { ButtonProps } from "../../../types";

export const DeleteButton = ({title, onClick}: ButtonProps) => {

    return (
        <button
            onClick={ onClick }
            className="w-40 h-10 bg-[#E32020] text-white text-base rounded-2xl transition-all duration-300 hover:bg-[#e25050]"
        >
            {title}
        </button>
    )
}
