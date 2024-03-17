import { useNavigate } from "react-router-dom";
import { IconButton } from "../../components";

export const ButtonContainer = () => {
    
    const navigate = useNavigate();

    const onSendButtonClicked = () => {
        navigate('/send-token');
    }
    const onReceiveButtonClicked = () => {
        navigate('/receive-token');
    }
    const onBuyButtonClicked = () => {
        navigate('/crypto-trade');
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
