import { useContext, useState } from "react";
import { useNavigate, createSearchParams } from "react-router-dom";
import { BackHeader } from "../../container";
import { SwapContext } from "../../container";
import { FromTransactionContainer } from "./FromTransactionContainer";
import { ToTransactionContainer } from "./ToTransactionContainer";
import { QuoteContainer } from "./QuoteContainer";
import { MainButton } from "../../components";
import { BottomNavbar } from "../../components";
import { SwapContextType } from "../../types";

export const Swap = () => {
    const navigate = useNavigate();

    const { swapInfo } = useContext(SwapContext) as SwapContextType;

    const onPreviewSwapButtonClicked = () => {
        navigate('/swap-preview')
    }

    return (
        <>
            <BackHeader
                headerTitle="Swap"
            />
            <FromTransactionContainer />
            <ToTransactionContainer
                tokenName={swapInfo.receiveTokenName}
                systemName={swapInfo.receiveSystemName}
                amount={swapInfo.receiveTokenAmount}
            />

            <div className="mt-6">
                <MainButton
                    title="Preview Swap"
                    onClick={onPreviewSwapButtonClicked}
                />
            </div>

            <QuoteContainer />
            <BottomNavbar
                selectedMenuItem="Swap"
            />
        </>
    )
}
