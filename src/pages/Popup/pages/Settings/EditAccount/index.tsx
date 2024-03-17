import { useNavigate } from "react-router-dom";
import { AccountSetting } from "./AccountSetting";
import { BackHeader } from "../../../container";
import { AccountIcon } from "../../../components";
import { MainButton } from "../../../components";

export const EditAccount = () => {
    const navigate = useNavigate();
    const onDeleteAccountButtonClicked = () => {
        navigate('/delete-account');
    }

    return (
        <div className="popup-container">
            <BackHeader
                headerTitle="Edit Account"
            />
            <AccountIcon
                accountName="Storm"
            />
            <AccountSetting />
            <div className="mt-28">
                <MainButton
                    title='Delete Account'
                    onClick={onDeleteAccountButtonClicked}
                />
            </div>
        </div>
    )
}
