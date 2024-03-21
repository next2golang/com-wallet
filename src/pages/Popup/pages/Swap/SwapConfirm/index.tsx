import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { RedSmallButton } from "../../../components";
import confirmImage from "../../../assets/images/SwapConfirm.png";
import { SwapContext } from "../../../container";
import { SwapContextType } from "../../../types";

export const SwapConfirm = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const { clearSwapInfo } = useContext(SwapContext) as SwapContextType;

    const searchParams = new URLSearchParams(location.search);
    const giveTokenName = String(searchParams.get("giveTokenName"));
    const giveTokenAmount = Number(searchParams.get("giveTokenAmount"));
    const receiveTokenName = String(searchParams.get("receiveTokenName"));
    const receiveTokenAmount = Number(searchParams.get("receiveTokenAmount"));

    const onOkButtonClicked = () => {
        clearSwapInfo();
        navigate('/swap');
    }

    return (
        <div className="popup-container">
            <div className="w-20 h-20 mt-24 ml-2">
                <img
                    src={confirmImage}
                    alt="swap confirm image"
                />
            </div>

            <p className="text-white text-2xl mt-6">
                SWAP
            </p>
            <p className="text-white text-xl mt-6">
                {giveTokenAmount}
                {giveTokenName}
                &nbsp;
                FOR
                &nbsp;
                {receiveTokenAmount}
                {receiveTokenName}
            </p>

            <div className="mt-10">
                <RedSmallButton
                    title="OK"
                    onClick={onOkButtonClicked}
                />
            </div>
        </div>
    )
}
