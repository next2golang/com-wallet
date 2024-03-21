import { useContext } from "react";
import { useLocation, useNavigate, createSearchParams } from "react-router-dom";
import { BackHeader } from "../../../container";
import { SearchLabel } from "../../../components";
import { CryptoContainer } from "./CryptoContainer";
import { TradeContext } from "../../../container";
import { TradeContextType } from "../../../types";

const popularCrypto = [
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
    }
]

const otherCrypto = [
    {
        tokenName: "COM",
        chainName: "Commune",
    },
    {
        tokenName: "BND",
        chainName: "Binance"
    },
    {
        tokenName: "BSC",
        chainName: "Binance smart chain"
    }
]

export const SelectCrypto = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const updateTarget = searchParams.get("updateTarget");

    const { tradeInfo, updateTradeInfo } = useContext(TradeContext) as TradeContextType;

    const updateTradeContext = (tokenName: string) => {
        let updateTradeInfoData = {
            payTokenName: tradeInfo.payTokenName,
            payTokenAmount: tradeInfo.payTokenAmount,
            buyTokenName: tradeInfo.buyTokenName,
            buyTokenAmount: tradeInfo.buyTokenAmount,
            sellTokenName: tradeInfo.sellTokenName,
            sellTokenAmount: tradeInfo.sellTokenAmount,
            receiveTokenName: tradeInfo.receiveTokenName,
            receiveTokenAmount: tradeInfo.receiveTokenAmount
        }
        let tradeCategory:string = "";

        if (updateTarget === 'sell-crypto') {
            updateTradeInfoData.sellTokenName = tokenName;
            tradeCategory = "Sell";
        }
        if (updateTarget === 'buy-crypto') {
            updateTradeInfoData.buyTokenName = tokenName;
            tradeCategory = "Buy"
        }
        updateTradeInfo(updateTradeInfoData);
        navigate({
            pathname: '/crypto-trade',
            search: createSearchParams({
                tradeCategory: tradeCategory
            }).toString()
        });
    }

    return (
        <div className="popup-container hide-scrollbar">
            <BackHeader
                headerTitle="Select Crypto"
            />
            <div className="mt-6">
                <SearchLabel />
            </div>

            <div className="flex flex-col justify-start w-80 gap-2 mt-6">
                <p className="text-base text-white">
                    Popular
                </p>

                {
                    popularCrypto.map((crypto, index) => {
                        return (
                            <CryptoContainer
                                key={index}
                                tokenName={crypto.tokenName}
                                chainName={crypto.chainName}
                                onClickHandler={updateTradeContext}
                            />
                        )
                    })
                }
            </div>

            <div className="flex flex-col justify-start w-80 gap-2 my-6">
                <p className="text-base text-white">
                    Other Crypto
                </p>

                {
                    otherCrypto.map((crypto, index) => {
                        return (
                            <CryptoContainer
                                key={index}
                                tokenName={crypto.tokenName}
                                chainName={crypto.chainName}
                                onClickHandler={updateTradeContext}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}