import { useContext } from "react";
import { createSearchParams, useNavigate } from "react-router-dom";
import { TokenContainer } from "./TokenContainer";
import { TradeContext } from "../../container";
import { TradeContextType } from "../../types";

export const SellCryptoContainer = () => {
    const navigate  = useNavigate();
    const { tradeInfo, updateTradeInfo } = useContext(TradeContext) as TradeContextType;

    const selectSellCrypto = () => {
        navigate({
            pathname: "/select-crypto",
            search: createSearchParams({
                updateTarget: "sell-crypto"
            }).toString()
        })
    }
    const onAmountChangeHandler = (amount: number) => {
        let updateTradeInfoData = {
            payTokenName: tradeInfo.payTokenName,
            payTokenAmount: tradeInfo.payTokenAmount,
            buyTokenName: tradeInfo.buyTokenName,
            buyTokenAmount: tradeInfo.buyTokenAmount,
            sellTokenName: tradeInfo.sellTokenName,
            sellTokenAmount: amount,
            receiveTokenName: tradeInfo.receiveTokenName,
            receiveTokenAmount: tradeInfo.receiveTokenAmount
        }
        updateTradeInfo(updateTradeInfoData);
    }
    
    return (
        <div className="flex flex-col items-start justify-center gap-2 w-80 p-2 bg-[#262632] rounded-md">
            <p className="text-base text-[#717173]">
                I want to sell
            </p>

            <div className="flex justify-between items-center w-full">
                <TokenContainer
                    tokenName={tradeInfo.sellTokenName}
                    onClickHandler={selectSellCrypto}
                />

                <input
                    type="number"
                    value={tradeInfo.sellTokenAmount ? tradeInfo.sellTokenAmount : 0}
                    dir="rtl"
                    className="text-[#f2f2f2] text-lg bg-inherit w-24 px-1 outline-none rounded-md border border-[#535368] focus:border-[#d97a7a] transition-all duration-300"
                    onChange={(e) => onAmountChangeHandler(Number(e.target.value))}
                />
            </div>
        </div>
    )
}
