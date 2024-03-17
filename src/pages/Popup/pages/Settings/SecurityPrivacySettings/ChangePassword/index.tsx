import { useEffect, useState } from "react";
import { InputContainer } from "./InputContainer";
import { BackHeader } from "../../../../container";
import { MainActiveButton } from "../../../../components";

export const ChangePassword = () => {

    const [currentPassword, setCurrentPassword] = useState<string>('');
    const [newPassword, setNewPassword] = useState<string>('');
    const [confirmNewPassword, setConfirmNewPassword] = useState<string>('');
    const [saveButtonActive, setSaveButtonActive] = useState<boolean>(false);

    const onSaveButtonClicked = () => {
        console.log('save button clicked');
    }

    useEffect(() => {
        if (currentPassword.trim() && newPassword.trim() && confirmNewPassword.trim()) {
            setSaveButtonActive(true);
        } else {
            setSaveButtonActive(false);
        }
    }, [currentPassword, newPassword, confirmNewPassword])
    
    return (
        <div className="popup-container">
            <BackHeader
                headerTitle='Change password'
            />
            <InputContainer
                currentPassword={currentPassword}
                setCurrentPassword={setCurrentPassword}
                newPassword={newPassword}
                setNewPassword={setNewPassword}
                confirmNewPassword={confirmNewPassword}
                setConfirmNewPassword={setConfirmNewPassword}
            />
            
            <div className="absolute bottom-14">
                <MainActiveButton
                    title='Save'
                    isDisabled={!saveButtonActive}
                    onClick={onSaveButtonClicked}
                />
            </div>
        </div>
    )
}
