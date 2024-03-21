import { useState, createContext } from "react";
import { SwapInfoType, SwapContextType } from "../../types";

const swapInfoDefault = {
    giveTokenName: "",
    giveSystemName: "",
    giveTokenAmount: 0,
    receiveTokenName: "",
    receiveSystemName: "",
    receiveTokenAmount: 0,
  }

export const SwapContext = createContext<SwapContextType | null>(null);

export const SwapContextProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
    const [swapInfo, setSwapInfo] = useState<SwapInfoType>(swapInfoDefault);

    const clearSwapInfo = () => {
        setSwapInfo(swapInfoDefault);
    }
    const updateSwapInfo = (updateSwapInfo: SwapInfoType) => {
        setSwapInfo(updateSwapInfo);
    }

    return (
        <SwapContext.Provider value={{ swapInfo, updateSwapInfo, clearSwapInfo }}>
            {children}
        </SwapContext.Provider>
    )
}