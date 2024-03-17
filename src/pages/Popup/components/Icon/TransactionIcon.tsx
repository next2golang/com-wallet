import { LuDownload } from "react-icons/lu";
import { CgArrowsExchangeAltV } from "react-icons/cg";

export const TransactionIcon = ({transactionType}: {transactionType: string}) => {

    return (
        <div className="flex justify-center items-center w-6 h-6 bg-[#262632] text-[#D97A7A] rounded-full">
            {
                transactionType === 'Swap' &&
                <CgArrowsExchangeAltV />
            }
            {
                transactionType === 'Transfer' &&
                <LuDownload />
            }
        </div>
    )
}
