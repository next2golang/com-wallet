import { useEffect, useState } from "react";
import { ToggleButtonHeader } from "./ToggleButtonHeader";

export const CryptoTrade = () => {

    type ButtonStatus = 'Buy' | 'Sell'
    type TradeItemTitleStatus = 'I want to pay' | 'I want to sell'

    const [selectedButtonTitle, setSelectedButtonTitle] = useState<ButtonStatus>('Buy');
    const [tradeItemTitle, setTradeItemTitle] = useState<TradeItemTitleStatus>('I want to pay');
    const [givingCoinName, setGivingCoin] = useState<string>('');

    const onTradeButtonToggle = () => {
        if (selectedButtonTitle === 'Buy') {
            setSelectedButtonTitle('Sell');
        } else {
            setSelectedButtonTitle('Buy');
        }
    }
    
    useEffect(() => {
        if (selectedButtonTitle === 'Buy') {
            setTradeItemTitle('I want to pay')
        } else {
            setTradeItemTitle('I want to sell')
        }
    },[selectedButtonTitle])

    return (
        <>
            <ToggleButtonHeader
                selectedButtonTitle={selectedButtonTitle}
                onTradeButtonToggle={onTradeButtonToggle}
            />
            <p className="inline-block p-2 bg-[#AF6262] text-sm text-white text-center mt-8 rounded-lg">
                Get a reduce transaction fee for holding 1000COM
            </p>
        </>
    )
}
