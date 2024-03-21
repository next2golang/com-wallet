import { useState, useContext } from "react";
import { useNavigate, createSearchParams } from "react-router-dom";
import { TokenContainer } from "./TokenContainer";
import { SwapContext } from "../../container";
import { SwapContextType } from "../../types";

type ToTransactionContainerProps = {
    tokenName: string | null,
    systemName: string | null,
    amount: number | null,
}

export const ToTransactionContainer = ({tokenName, systemName, amount}: ToTransactionContainerProps) => {
    const navigate = useNavigate();

    const { swapInfo, updateSwapInfo } = useContext(SwapContext) as SwapContextType;

    const [test, setTest] = useState(0.00);

    const navigateToSelectToken = () => {
        navigate({
            pathname: '/select-token',
            search: createSearchParams({
                updateTarget: "receiveToken"
            }).toString()
        });
    }

    return (
        <div className="flex flex-col items-start justify-between w-80 gap-1 mt-6">
            <p className="text-base text-white">
                To
                &nbsp;
                {swapInfo.receiveSystemName}    
            </p>
            <div className="flex justify-between items-center w-full">
                <TokenContainer
                    tokenName={swapInfo.receiveTokenName}
                    onClickHandler={navigateToSelectToken}
                />
                <div className="flex justify-end items-center w-40 h-16 bg-[#1D1D26] pr-3 rounded">
                    <p className="text-lg text-white pr-3">
                        {test}
                    </p>
                </div>
            </div>
        </div>
    )
}
