import { FaRegCopy } from "react-icons/fa6";
import { LuEye } from "react-icons/lu";
import { RiEyeCloseFill } from "react-icons/ri";
import { CopyToClipBoardWithEyeToggleProps } from "../../../../types";

export const CopyToClipBoardWithEyeToggle = ({...props}: CopyToClipBoardWithEyeToggleProps) => {

    return (
        <div className="flex justify-between items-center w-72 px-2">
            <div className="flex items-center gap-2">
                <FaRegCopy
                    className="text-[#717173] hover:text-white text-lg bg-inherit cursor-pointer"
                    onClick={props.onCopyToClipboardClicked}
                />
                <p className="text-base text-[#717173]">
                    Copy to clip board
                </p>
            </div>
            {
                props.showContent
                ? <LuEye
                    className="text-[#717173] hover:text-white bg-inherit text-xl cursor-pointer"
                    onClick={props.onEyeToggleClicked}
                />
                : <RiEyeCloseFill
                    className="text-[#717173] hover:text-white text-xl cursor-pointer"
                    onClick={props.onEyeToggleClicked}
                />
            }
        </div>
    )
}
