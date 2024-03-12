import { ButtonProps } from "../../types";

export const MainButton = ({title, onClicked}: ButtonProps) => {
    return (
        <button
            className=" w-[484px] h-[60px] bg-[#d97a7a] text-white text-lg rounded-3xl transition-all duration-300 hover:bg-[#e25050]"
            onClick={ onClicked }
        >
            {title}
        </button>
    )
}
