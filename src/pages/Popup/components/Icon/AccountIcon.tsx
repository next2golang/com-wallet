
import { VscAccount } from "react-icons/vsc";

export const AccountIcon = ({accountName}: {accountName: string}) => {
    
    return (
        <div className="flex flex-col items-center w-full mt-5">
            <VscAccount className="text-[#D97A7A] text-6xl"/>
            <p className="text-white text-xl mt-4">
                {accountName}
            </p>
        </div>
    )
}
