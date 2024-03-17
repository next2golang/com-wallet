import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BackHeader } from "../../../../container";
import { AccountIcon } from "../../../../components";
import { RedSmallActiveButton } from "../../../../components";
import { DarkSmallButton } from "../../../../components";

export const EditAccountName = () => {
    const navigate = useNavigate();

    const [newName, setNewName] = useState<string>('');
    const [saveButtonActive, setSaveButtonActive] = useState<boolean>(false);
    
    const onSaveButtonClicked = () => {
        console.log('onSaveClicked');
    }
    const onCancelButtonClicked = () => {
        navigate(-1)
    }

    useEffect(() => {
        if (!newName.trim()) {
            setSaveButtonActive(true);
        }
    },[newName])

    return (
        <div className="popup-container">
            <BackHeader
                headerTitle="Edit Account"
            />
            <div className="mt-8">
                <AccountIcon
                    accountName="Storm"
                />
            </div> 
            <label className="text-white text-lg mt-8">
                Enter new Account Name
            </label>
            <input
                type="text"
                value={newName}
                className="text-white bg-inherit pl-4 w-80 h-12 border border-[#D97A7A] rounded-lg mt-4"
                onChange={(e) => setNewName(e.target.value)}
            />
            <div className="two-button-container">
                <DarkSmallButton
                    title='Cancle'
                    onClick={onCancelButtonClicked}
                />
                <RedSmallActiveButton
                    title='Save'
                    isDisabled={!saveButtonActive}
                    onClick={onSaveButtonClicked}
                />
            </div>
        </div>
    )
}
