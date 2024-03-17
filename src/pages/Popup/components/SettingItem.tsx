
import { settingItemProps } from "../types";
import { IoMdArrowDropright } from "react-icons/io";

export const SettingItem = ({title, onItemClicked}: settingItemProps) => {

    return (
        <div
            className="relative bg-[#121316] rounded-md w-80 p-2 text-[#F7FBFF] text-lg cursor-pointer"
            onClick={onItemClicked}
        >
            {title}
            <IoMdArrowDropright className="absolute right-3 bottom-1/2 transform translate-y-1/2 text-lg"/>
        </div>
    )
}
