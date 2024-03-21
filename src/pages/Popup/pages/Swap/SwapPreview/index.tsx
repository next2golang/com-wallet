import { useNavigate } from "react-router-dom";
import { BackHeader } from "../../../container";
import { SwapImage } from "./SwapImage";
import { SwapDetail } from "./SwapDetail";
import { MainButton } from "../../../components";

export const SwapPreview = () => {
    const navigate = useNavigate();

    const onSwapButtonClicked = () => {
        navigate('/swap-confirm')
    }

    return (
        <>
            <BackHeader
                headerTitle="Preview Swap"
            />
            <SwapImage />
            <SwapDetail />

            <div className="mt-6">
                <MainButton
                    title="Swap"
                    onClick={onSwapButtonClicked}
                />
            </div>
        </>
    )
}
