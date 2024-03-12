
import { ButtonProps } from "../../types"

export const CreateButton = ({title, onClicked}: ButtonProps) => {

    return (
        <button
            className=" w-[376px] h-[60px] bg-[#d97a7a] text-white text-lg rounded-xl transition-all duration-300 hover:bg-[#e25050]"
            onClick={ onClicked }
        >
            {title}
        </button>
    )
}
