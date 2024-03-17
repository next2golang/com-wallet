import { useNavigate } from "react-router-dom";
import clsx from "clsx";
import { ButtonIcon } from "./Icon/ButtonIcon";

export const BottomNavbar = ({selectedMenuItem}: {selectedMenuItem: string}) => {
    const navigate = useNavigate();

    const buttonTitles:ButtonTypeProps[] = [
        'Home',
        'Earn',
        'History',
        'Settings', 
    ]

    type ButtonTypeProps = 'Home' | 'Earn' | 'History' | 'Settings';

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
            default:
              break;
        }
    }

    return (
        <div className="flex justify-between items-center mt-6 w-72 h-14 px-6 bg-[#262632] rounded-2xl">
            {
                buttonTitles.map(buttonTitle => {
                    return (
                        <div
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
                            <p>{buttonTitle}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}
