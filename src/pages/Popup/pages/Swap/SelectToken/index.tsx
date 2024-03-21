import { useState, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { RxCross1 } from "react-icons/rx";
import { SystemContainer } from "./SystemContainer";
import { TokenContainer } from "./TokenContainer";
import { SearchLabel } from "../../../components";
import { SwapContext } from "../../../container";
import { SwapContextType } from "../../../types";

export const SelectToken = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const updateTarget = searchParams.get("updateTarget");

    const { swapInfo, updateSwapInfo } = useContext(SwapContext) as SwapContextType

    type TokenInfoType = {
        tokenName: string,
        chainName: string,
    }
    const onTokenClicked = ({tokenName, chainName}: TokenInfoType) => {
        let updateSwapInfoData = {
            giveTokenName: swapInfo.giveTokenName,
            giveSystemName: swapInfo.giveSystemName,
            giveTokenAmount: swapInfo.receiveTokenAmount,
            receiveTokenName: swapInfo.receiveTokenName,
            receiveSystemName: swapInfo.receiveSystemName,
            receiveTokenAmount: swapInfo.receiveTokenAmount,
        }
        if (updateTarget === "giveToken") {
            updateSwapInfoData.giveTokenName = tokenName;
            updateSwapInfoData.giveSystemName = chainName;
        }
        if (updateTarget === "receiveToken") {
            updateSwapInfoData.receiveTokenName = tokenName;
            updateSwapInfoData.receiveSystemName = chainName;
        }
        updateSwapInfo(updateSwapInfoData);
        navigate('/swap')
    }

    const [selectedSystemName, setSelectedSystemName] = useState<"Solana" | "Ethereum" | "Polygon">("Solana");

    const onCrossIconClicked = () => {
        navigate('/swap');
    }

    return (
        <div className="popup-container hide-scrollbar">
            <div className="flex justify-between items-center w-80 mt-6">
                <p className="text-xl text-white">
                    Select token
                </p>
            
                <RxCross1
                    className="text-[#717173] text-lg hover:text-white cursor-pointer"
                    onClick={onCrossIconClicked}
                />
            </div>
            
            <div className="mt-4">
                <SearchLabel />
            </div>

            <div className="mt-4">
                <SystemContainer
                    selectedSystemName={selectedSystemName}
                    setSelectedSystemName={setSelectedSystemName}
                />
            </div>

            <div className="mt-4">
                <TokenContainer
                    onTokenClicked={onTokenClicked}
                />
            </div>
        </div>
    )
}
