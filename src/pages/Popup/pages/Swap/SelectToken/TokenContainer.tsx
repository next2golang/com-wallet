import { useContext } from "react";
import { CoinImage } from "../../../components/Icon/CoinImage";
import { index } from "@material-tailwind/react/types/components/select";

type TokenInfoType = {
    tokenName: string,
    chainName: string,
}
interface TokenContainerProps {
    onTokenClicked: ({tokenName, chainName}: TokenInfoType) => void
}

export const TokenContainer = ({onTokenClicked}: TokenContainerProps) => {
    // const { swapInfo } = useContext(SwapInfoContext)
    
    const displayData = [
        {
            tokenName: "BTC",
            chainName: "Bitcoin"
        },
        {
            tokenName: "SOL",
            chainName: "Solana"
        },
        {
            tokenName: "ETH",
            chainName: "Ethereum"
        },
        {
            tokenName: "COM",
            chainName: "Commune"
        },
        {
            tokenName: "BND",
            chainName: "Binance"
        },
        {
            tokenName: "BSC",
            chainName: "Binance Smart Chain"
        }
    ]

    return (
        <div className="flex flex-col items-center gap-2">
            {
                displayData.map((data, index) => {
                    return (
                        <div
                            key={index}
                            className="flex justify-start items-center gap-2 w-80 py-1 bg-[#121316] rounded cursor-pointer"
                            onClick={() => onTokenClicked(data)}
                        >
                            <CoinImage
                                chainTitle={data.tokenName}
                            />

                            <div className="flex flex-col items-start justify-center gap-1">
                                <p className="text-lg text-white">
                                    {data.tokenName}
                                </p>
                                <p className="text-base text-[#717173]">
                                    {data.chainName}
                                </p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
