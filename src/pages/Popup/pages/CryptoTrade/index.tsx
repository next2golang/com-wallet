import { useState, useContext } from "react";
import { useLocation } from "react-router-dom";
import { ToggleButtonHeader } from "./ToggleButtonHeader";
import { PayCurrencyContainer } from "./PayCurrencyContainer";
import { BuyCryptoContainer } from "./BuyCryptoContainer";
import { SellCryptoContainer } from "./SellCryptoContainer";
import { ReceiveCurrencyContainer } from "./ReceiveCurrencyContainer";
import { TradeContext } from "../../container";
import { TradeContextType } from "../../types";
import { MainButton } from "../../components";

export const CryptoTrade = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const tradeCategory = searchParams.get("tradeCategory");

    const { tradeInfo, clearTradeInfo } = useContext(TradeContext) as TradeContextType;

    const [selectedButtonTitle, setSelectedButtonTitle] = useState<string>(String(tradeCategory));

    const onTradeButtonToggle = () => {
        if (selectedButtonTitle === 'Buy') {
            setSelectedButtonTitle('Sell');
        } else {
            setSelectedButtonTitle('Buy');
        }
    }

    const onClick = () => {
        clearTradeInfo();
    }
    return (
        <>
            <ToggleButtonHeader
                selectedButtonTitle={selectedButtonTitle}
                onTradeButtonToggle={onTradeButtonToggle}
            />

            <p className="inline-block p-2 bg-[#AF6262] text-sm text-white text-center mt-8 rounded-lg">
                Get a reduced transaction fee for holding 1000COM
            </p>

            <div className="mt-6">
                {
                    selectedButtonTitle === 'Buy' &&
                    <PayCurrencyContainer />
                }
                {
                    selectedButtonTitle === 'Sell' &&
                    <SellCryptoContainer />
                }
                
            </div>

            <div className="mt-6">
                {
                    selectedButtonTitle === 'Buy' &&
                    <BuyCryptoContainer />
                }
                {
                    selectedButtonTitle === 'Sell' &&
                    <ReceiveCurrencyContainer />
                }
            </div>
            
            <div className="mt-10">
                {
                    selectedButtonTitle === 'Buy' &&
                    <MainButton
                        title="Pay with Stripe"
                        onClick={onClick}
                    />
                }
                {
                    selectedButtonTitle === 'Sell' &&
                    <MainButton
                        title="Sell"
                        onClick={onClick}
                    />
                }
            </div>
        </>
    )
}
