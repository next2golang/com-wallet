import { useContext } from "react";
import { AiOutlineSwap } from "react-icons/ai";
import { CoinWithAmount } from "./CoinWithAmount";
import { SwapContext } from "../../../container";
import { SwapContextType } from "../../../types";

export const SwapImage = () => {

    const { swapInfo } = useContext(SwapContext) as SwapContextType

    return (
        <div className="flex justify-between items-center w-56 h-14 mt-8">
            <CoinWithAmount
                coinName={swapInfo.giveTokenName}
                amount={swapInfo.giveTokenAmount}
            />

            <AiOutlineSwap
                className="text-xl text-[#D97A7A]"
            />

            <CoinWithAmount
                coinName={swapInfo.receiveTokenName}
                amount={swapInfo.receiveTokenAmount}
            />
        </div>
    )
}
