
import { useNavigate } from "react-router-dom";
import clsx from "clsx";
import { FaArrowLeft } from "react-icons/fa6";

interface TradeToggleButtonProps {
    selectedButtonTitle: string,
    onTradeButtonToggle: () => void,
}

export const ToggleButtonHeader = ({selectedButtonTitle, onTradeButtonToggle}: TradeToggleButtonProps) => {
    const navigate = useNavigate();
    const onGoBackClicked = () => {
        navigate(-1);
    }

    return (
        <div className="relative flex items-center justify-center w-full h-14 mt-4">
            <FaArrowLeft 
                className="absolute bottom-1/2 translate-y-1/2 left-4 bg-inherit text-[#aaaab1] text-base transition-all duration-300 cursor-pointer hover:text-white"
                onClick={onGoBackClicked}
            />
            <div className="w-36 h-12 flex justify-between items-center px-2 rounded-3xl border border-[#262632]">
                <div 
                    className={
                        clsx(
                            'text-base px-4 py-2 rounded-3xl cursor-pointer',
                            {
                                'text-white bg-[#262632]' : selectedButtonTitle === 'Buy',
                                'text-[#717173]' : selectedButtonTitle !== 'Buy',
                            }
                        )
                    }
                    onClick={onTradeButtonToggle}
                >
                    Buy
                </div>
                <div 
                    className={
                        clsx(
                            'text-base px-4 py-2 rounded-3xl cursor-pointer',
                            {
                                'text-white bg-[#262632]' : selectedButtonTitle === 'Sell',
                                'text-[#717173]' : selectedButtonTitle !== 'Sell',
                            }
                        )
                    }
                    onClick={onTradeButtonToggle}
                >
                    Sell
                </div>
            </div>
        </div>
    )
}
