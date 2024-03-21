import { useLocation, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";

export const BackHeader = ({headerTitle}: {headerTitle: string}) => {
    const navigate = useNavigate();
    const location = useLocation();
    const pathname = location.pathname;
    console.log("location.pathname", location.pathname);

    const onGoBackClicked = () => {
        if (['/earn', '/swap', '/history', '/setting', '/crypto-trade'].includes(pathname)) {
            navigate('/homepage');
        }
        if (['/edit-account', '/manage-account', '/network', '/security-privacy-settings', '/developer-settings', '/about-commune'].includes(pathname)) {
            navigate('/setting');
        }
        if (['/edit-account-name', '/check-seedphrase', '/check-privatekey'].includes(pathname)) {
            navigate('/edit-account');
        }
        if (['/connected-websites', '/change-password', '/auto-lock'].includes(pathname)) {
            navigate('/security-privacy-settings');
        }
        if (['/receive-token-detail'].includes(pathname)) {
            navigate('/receive-token')
        }
        if (['/send-token-detail'].includes(pathname)) {
            navigate('/send-token')
        }
    }

    return (
        <div className="relative flex items-center justify-center w-full h-14">
            <FaArrowLeft 
                className="absolute bottom-1/2 translate-y-1/2 left-4 bg-inherit text-[#aaaab1] text-base transition-all duration-300 cursor-pointer hover:text-white"
                onClick={onGoBackClicked}
            />
            <p className="text-lg text-white">
                {headerTitle}
            </p>
        </div>
    )
}
