
import { IoIosWarning } from "react-icons/io";

export const Warning = () => {

    return (
        <div className="flex items-start gap-3 w-[484px] ml-4 mt-4 pr-2">
            <IoIosWarning
                className="mt-1 bg-[#0D0D0E] text-xl text-[#D97A7A]"
            />
            
            <p className="text-base text-[#717173]">
                Please write down your wallet’s mnemonic seed and keep it in a safe place
            </p>
        </div>
    )
}
