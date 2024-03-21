
// Main Operation Button Icons
import { LiaMoneyBillSolid } from "react-icons/lia";
import { MdOutlineFileUpload } from "react-icons/md";
import { MdOutlineFileDownload } from "react-icons/md";

// Bottom Navbar Button Icons
import { GoHome } from "react-icons/go";
import { TbCoins } from "react-icons/tb";
import { RiFileHistoryLine } from "react-icons/ri";
import { MdOutlineSettings } from "react-icons/md";
import { IoMdSwap } from "react-icons/io";

export const ButtonIcon = ({iconName}: {iconName: string}) => {

    return(
        <>
            {
                iconName === 'Home' &&
                <GoHome className="text-lg" />
            }
            {
                iconName === 'Earn' &&
                <TbCoins className="text-lg" />
            }
            {
                iconName === 'Swap' &&
                <IoMdSwap className="text-lg"/>
            }
            {
                iconName === 'History' &&
                <RiFileHistoryLine className="text-lg" />
            }
            {
                iconName === 'Settings' &&
                <MdOutlineSettings className="text-lg" />
            }

            {
                iconName === 'Send' &&
                <MdOutlineFileUpload className="text-[#262632] text-lg" />
            }
            {
                iconName === 'Receive' &&
                <MdOutlineFileDownload className="text-[#262632] text-lg" />
            }
            {
                iconName === 'Buy' &&
                <LiaMoneyBillSolid className="text-[#262632] text-lg" />
            }

        </>
    )
}
