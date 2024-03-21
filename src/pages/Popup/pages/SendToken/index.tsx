import { useNavigate } from "react-router-dom";
import { CoinContainer } from "../../container";
import { MainButton } from "../../components";
import { SearchLabel } from "../../components";

export const SendToken = () => {
    const navigate = useNavigate();
    
    const onCloseButtonClicked = () => {
        navigate('/homepage');
    }
    const onCoinClicked = () => {
        navigate('/send-token-detail');
    }

    return (
        <>
            <p className="text-white text-base mt-5">
                Select token to Send
            </p>
            <div className="mt-5">
                <SearchLabel />
            </div>
            <CoinContainer 
                onCoinClicked={onCoinClicked}
            />
            <div className="mt-12">
                <MainButton
                    title='Close'
                    onClick={onCloseButtonClicked}
                />
            </div>
        </>
    )
}
