import { FaExclamation } from "react-icons/fa6";

export const Warning = () => {
    const warningMessage = 'Do not share your seed phrase with anyone! These word can be use to steal all your assets. CommuneAI will never ask you for it.';

    return (
        <div className="flex items-center justify-center gap-2 w-80 h-24 bg-[#AF6262]/30 border border-[#D97A7A] rounded-xl px-3 mt-7">
            <div className="flex items-center justify-center w-8 h-8 bg-[#D97A7A] rounded-full">
                <FaExclamation
                    className="text-xl bg-inherit text-white"
                />
            </div>
            <div className=" w-64 text-white">
                {warningMessage}
            </div>
        </div>
    )
}
