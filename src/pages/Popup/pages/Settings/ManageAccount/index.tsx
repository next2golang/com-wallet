import { useNavigate } from "react-router-dom";
import { AccountItem } from "./AccountItem";
import { BackHeader } from "../../../container";
import { MainButton } from "../../../components";

export const ManageAccount = () => {
    const navigate = useNavigate();

    const accountNames = [
        'Storm',
        'Storm',
        'Storm',
        'Storm',
    ]

    const onAccountClicked = () => {
        navigate('/edit-account');
    }
    const onAddCustomAccountButtonClicked = () => {
        localStorage.setItem("isPopup", "onboard");
    }

    return (
        <div className="popup-container">
            <BackHeader
                headerTitle="Manage Accounts"
            />
            
            <div className="flex flex-col gap-2 mt-8 min-h-80 max-h-80">
                {
                    accountNames.map((accountName) => {
                        return (
                            <AccountItem
                                accountName={accountName}
                                onAccountClicked={onAccountClicked}
                            />
                        )
                    })
                }
            </div>
            <div className="mt-12">
                <MainButton
                    title='Add Custom Account'
                    onClick={onAddCustomAccountButtonClicked}
                />
            </div>
        </div>
    )
}
