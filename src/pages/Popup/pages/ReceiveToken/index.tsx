import { useNavigate } from "react-router-dom";
import { SlMagnifier } from "react-icons/sl";
import { CoinContainer } from "../../container";
import { MainButton } from "../../components";

export const ReceiveToken = () => {
    const navigate = useNavigate();

    const onCloseButtonClicked = () => {
        navigate(-1);
    }
    const onCoinClicked = () => {
        navigate('/receive-token-detail');
    }
    
    return (
        <>
            <p className="text-white text-base mt-5">
                Select token to Receive
            </p>
            <div className="relative w-72 h-10 mt-5">
                <SlMagnifier
                    className="absolute text-[#D97A7A] text-xs bg-inherit top-4 left-3"
                />
                <input
                    type="text"
                    className="w-full h-full text-white pl-10 text-sm border border-[#262632] rounded-xl bg-inherit"
                />
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
