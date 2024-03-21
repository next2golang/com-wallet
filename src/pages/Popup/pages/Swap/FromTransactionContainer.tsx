import { useContext } from "react";
import { useNavigate, createSearchParams } from "react-router-dom";
import { TfiWallet } from "react-icons/tfi";
import { TokenContainer } from "./TokenContainer";
import { SwapContext } from "../../container";
import { SwapContextType } from "../../types";

export const FromTransactionContainer = () => {
    const navigate = useNavigate();

    const maxValue = 1000;

    const { swapInfo, updateSwapInfo } = useContext(SwapContext) as SwapContextType;

    const navigateToSelectToken = () => {
        navigate({
            pathname: '/select-token',
            search: createSearchParams({
                updateTarget: "giveToken"
            }).toString()
        })
    }

    const onMaxButtonClicked = () => {
        const updateSwapInfoData = {
            giveTokenName: swapInfo.giveTokenName,
            giveSystemName: swapInfo.giveSystemName,
            giveTokenAmount: maxValue,
            receiveTokenName: swapInfo.receiveTokenName,
            receiveSystemName: swapInfo.receiveSystemName,
            receiveTokenAmount: swapInfo.receiveTokenAmount,
        }
        updateSwapInfo(updateSwapInfoData);
    }
    const onAmountChangeHandler = (updateGiveTokenAmount: number) => {
        const updateSwapInfoData = {
            giveTokenName: swapInfo.giveTokenName,
            giveSystemName: swapInfo.giveSystemName,
            giveTokenAmount: updateGiveTokenAmount,
            receiveTokenName: swapInfo.receiveTokenName,
            receiveSystemName: swapInfo.receiveSystemName,
            receiveTokenAmount: swapInfo.receiveTokenAmount,
        }
        updateSwapInfo(updateSwapInfoData);
    }

    return (
        <div className="flex flex-col items-start mt-4 w-80">
            <p className="text-white text-base">
                From
                &nbsp;
                {swapInfo.giveSystemName}
            </p>
            <div className="flex justify-between items-center w-full">
                <TokenContainer
                    tokenName={swapInfo.giveTokenName}
                    onClickHandler={navigateToSelectToken}
                />
                <div className="flex justify-between items-center w-40 h-16 bg-[#1D1D26] px-3 rounded">
                    <div className="flex flex-col items-start justify-center gap-1">
                        <div className="flex justify-center items-center gap-1 text-[#717173]">
                            <TfiWallet />
                            {maxValue}
                        </div>
                        <div
                            className="w-10 h-6 bg-[#4A333A] text-[#737A82] text-center leading-6 rounded-xl hover:bg-[#a1596f] hover:text-white cursor-pointer"
                            onClick={onMaxButtonClicked}
                        >
                            Max
                        </div>
                    </div>
                    <input
                        type="number"
                        value={swapInfo.giveTokenAmount ? swapInfo.giveTokenAmount : 0.00}
                        dir="rtl"
                        className="text-[#f2f2f2] text-lg bg-inherit w-20 px-1 outline-none border border-[#a38585] rounded-md focus:border-[#d97a7a] transition-all duration-300"
                        onChange={(e) => onAmountChangeHandler(Number(e.target.value))}
                    />
                </div>
            </div>
        </div>
    )
}
