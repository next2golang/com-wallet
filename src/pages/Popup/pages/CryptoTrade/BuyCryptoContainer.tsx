import { useContext } from "react";
import { useNavigate, createSearchParams } from "react-router-dom";
import { TradeContext } from "../../container";
import { TradeContextType } from "../../types";
import { TokenContainer } from "./TokenContainer";

export const BuyCryptoContainer = () => {
    const navigate = useNavigate();
    const { tradeInfo } = useContext(TradeContext) as TradeContextType;

    const selectReceiveCurrency = () => {
        navigate({
            pathname: '/select-crypto',
            search: createSearchParams({
                updateTarget: "buy-crypto"
            }).toString()
        })
    }

    return (
        <div className="flex flex-col items-start justify-center gap-2 w-80 p-2 bg-[#262632] rounded-md">
            <p className="text-base text-[#717173]">
                To Receive
            </p>

            <div className="flex justify-between items-center w-full">
                <TokenContainer
                    tokenName={tradeInfo.buyTokenName}
                    onClickHandler={selectReceiveCurrency}
                />

                <p className="text-lg text-[#f2f2f2]">
                    100
                </p>
            </div>
        </div>
    )
}