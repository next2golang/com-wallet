import { useContext } from "react";
import { useNavigate, createSearchParams } from "react-router-dom";
import { IconButton } from "../../components";
import { TradeContext } from "../../container";
import { TradeContextType } from "../../types";

export const ButtonContainer = () => {
    const { clearTradeInfo } = useContext(TradeContext) as TradeContextType;

    const navigate = useNavigate();

    const onSendButtonClicked = () => {
        navigate('/send-token');
    }
    const onReceiveButtonClicked = () => {
        navigate('/receive-token');
    }
    const onBuyButtonClicked = () => {
        clearTradeInfo();
        navigate({
            pathname: '/crypto-trade',
            search: createSearchParams({
                tradeCategory: "Buy"
            }).toString()
        });
    }

    return (
        <div className="flex items center justify-between gap-3 px-4 mt-6">
            <IconButton
                title={'Send'}
                onClick={onSendButtonClicked}
            />
            <IconButton
                title={'Receive'}
                onClick={onReceiveButtonClicked}
            />
            <IconButton
                title={'Buy'}
                onClick={onBuyButtonClicked}
            />  
        </div>
    )
}
