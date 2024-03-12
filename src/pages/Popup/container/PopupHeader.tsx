import React from "react";
import logo from "../assets/images/icon-24-24.png";
import diamond from "../assets/images/diamond.png";
import st from "../assets/images/ST.png";
import { FaRegCopy } from "react-icons/fa6";
export const PopupHeader = () => {
    return (
        <div className="flex justify-between items-center px-4 w-full h-[52px] bg-[#121316]">
            <img
                src={logo}
                alt="commune popup header logo"
            />
            <div className="flex justify-center items-center gap-1">
                <FaRegCopy className="bg-inherit text-[#717173]" />
                <p className="text-shite text-base text-[#F7FBFF] font-bold">
                    thenis
                </p>
            </div>

            <div className="flex gap-2">
                <img
                    src={diamond}
                    alt=""
                />
                <img
                    src={st}
                    alt=""
                />
            </div>
        </div>
    )
}
