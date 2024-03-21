import { useState, createContext } from "react";
import { TradeInfoType, TradeContextType } from "../../types";

const tradeInfoDefault: TradeInfoType = {
    payTokenName: "USD",
    payTokenAmount: 0,
    buyTokenName: "BTC",
    buyTokenAmount: 0,
    sellTokenName: "BTC",
    sellTokenAmount: 0,
    receiveTokenName: "USD",
    receiveTokenAmount: 0,
}

export const TradeContext = createContext<TradeContextType | null>(null);

export const TradeContextProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
    const [tradeInfo, setTradeInfo] = useState(tradeInfoDefault);

    const clearTradeInfo = () => {
        setTradeInfo(tradeInfoDefault);
    }
    const updateTradeInfo = (updateTradeInfoData: TradeInfoType) => {
        setTradeInfo(updateTradeInfoData);
    }

    return (
        <TradeContext.Provider value={{tradeInfo, updateTradeInfo, clearTradeInfo}}>
            {children}
        </TradeContext.Provider>
    )
}