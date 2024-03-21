import { useContext } from "react";
import { useLocation, useNavigate, createSearchParams } from "react-router-dom";
import { BackHeader } from "../../../container";
import { TradeContext } from "../../../container";
import { SearchLabel } from "../../../components";
import { TradeContextType } from "../../../types";
import { CurrencyContainer } from "./CurrencyContainer";

const currencies = [
    {
        currencyName: "USD",
        fullName: "US Dollar"
    },
    {
        currencyName: "EUR",
        fullName: "Euro"
    },
    {
        currencyName: "GBP",
        fullName: "British Pound Sterlin"
    }
]

export const SelectCurrency = () => {
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

        if (updateTarget === "pay-currency") {
            updateTradeInfoData.payTokenName = tokenName;
            tradeCategory = "Buy";
        }

        if (updateTarget === "receive-currency") {
            updateTradeInfoData.receiveTokenName = tokenName;
            tradeCategory = "Sell";
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
        <div className="popup-container">
            <BackHeader
                headerTitle="Select Currency"
            />

            <div className="mt-6">
                <SearchLabel />
            </div>

            <div className="flex flex-col items-center w-80 gap-2 mt-6">
                {
                    currencies.map((currency, index) => {
                        return (
                            <CurrencyContainer
                                key={index}
                                currencyName={currency.currencyName}
                                fullName={currency.fullName}
                                onClickHandler={updateTradeContext}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}
