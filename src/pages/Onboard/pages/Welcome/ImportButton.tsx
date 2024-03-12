
import { ButtonProps } from "../../types"

export const ImportButton = ({title, onClicked}: ButtonProps) => {
    
    return (
        <button
            className=" w-[376px] h-[60px] bg-[#0D0D0E] text-[#717173] text-lg rounded-xl transition-all duration-300 hover:bg-[#e25050] border border-[#717173]"
            onClick={ onClicked }
        >
            {title}
        </button>
    )
}
