import { useContext } from "react";
import { useNavigate, createSearchParams } from "react-router-dom";
import clsx from "clsx";
import { ButtonIcon } from "./Icon/ButtonIcon";
import { SwapContext } from "../container";
import { SwapContextType } from "../types";

export const BottomNavbar = ({selectedMenuItem}: {selectedMenuItem: string}) => {
    const navigate = useNavigate();

    const { clearSwapInfo } = useContext(SwapContext) as SwapContextType;

    const buttonTitles:ButtonTypeProps[] = [
        'Home',
        'Earn',
        'Swap',
        'History',
        'Settings', 
    ]

    type ButtonTypeProps = 'Home' | 'Earn' | 'History' | 'Settings' | 'Swap';

    const onNavbarButtonClicked = (buttonTitle: ButtonTypeProps) => {
        switch (buttonTitle) {
            case 'Home':
              navigate('/homepage');
              break;
            case 'Earn':
              navigate('/earn');
              break;
            case 'History':
              navigate('/history');
              break;
            case 'Settings':
              navigate('/setting');
              break;
            case 'Swap':
              clearSwapInfo();  
              navigate('/swap');
              break;
            default:
              break;
        }
    }

    return (
        <div className="flex justify-between items-center mt-6 w-80 h-14 px-6 bg-[#262632] rounded-2xl">
            {
                buttonTitles.map((buttonTitle, index) => {
                    return (
                        <div
                            key={index}
                            className={
                                clsx(
                                    "flex flex-col items-center cursor-pointer text-sm hover:text-white transition-all duration-300",
                                    {
                                        "text-[#D97A7A]" : selectedMenuItem === buttonTitle,
                                        "text-[#717173]" : selectedMenuItem !== buttonTitle,
                                    }
                                )
                            }
                            onClick={() => onNavbarButtonClicked(buttonTitle)}
                        >
                            <ButtonIcon iconName={buttonTitle} />
                            <p>
                                {buttonTitle}
                            </p>
                        </div>
                    )
                })
            }
        </div>
    )
}
