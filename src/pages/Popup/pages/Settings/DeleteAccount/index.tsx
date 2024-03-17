import { useNavigate } from "react-router-dom";
import { TrashAccount } from "./TrashAccount";
import { DeleteButton } from "./DeleteButton";
import { BackHeader } from "../../../container";
import { DarkSmallButton } from "../../../components";

export const DeleteAccount = () => {
    const navigate = useNavigate();

    const onCancelClicked = () => {
        navigate(-1);
    }
    const onDeleteButtonClicked = () => {
        console.log('onDeleteButtonClicked');
    }

    return (
        <div className="popup-container">
            <BackHeader
                headerTitle="Delete Account"
            />
            <TrashAccount
                accountName="Storm"
            />
            <div className="two-button-container">
                <DarkSmallButton
                    title='Cancel'
                    onClick={onCancelClicked}
                />
                <DeleteButton
                    title='Delete'
                    onClick={onDeleteButtonClicked}
                />
            </div>
        </div>
    )
}
