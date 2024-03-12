import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ProfileInputContainer } from "./ProfileInputContainer";
import { AgreeTermsOfService } from "../../components";
import { MainActiveButton } from "../../components";

const TITLE = 'Create a Profile';
const DESCRIPTION = 'You will use this profile to secure your wallet';

export const CreateProfile = () => {
    const navigate = useNavigate();

    const [name, setName] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const [isChecked, setIsChecked] = useState<boolean>(false);

    const onCreateProfileClicked = () => {
        navigate('/finish');
    }
    const checkBoxToggle = () => {
        setIsChecked((prev) => !prev);
    }

    return (
            <>
                <p className="text-white text-2xl pt-24">
                    {TITLE}
                </p>
                <p className="text-[#717173] text-lg pt-4">
                    {DESCRIPTION}
                </p>

                <ProfileInputContainer
                    name={name}
                    password={password}
                    confirmPassword={confirmPassword}
                    setName={setName}
                    setPassword={setPassword}
                    setConfirmPassword={setConfirmPassword}
                />
                <AgreeTermsOfService
                    isChecked={isChecked}
                    checkBoxToggle={checkBoxToggle}
                />

                <div className="mt-10">
                    <MainActiveButton
                        title='Create a new profile'
                        isDisabled={!isChecked}
                        onClicked={onCreateProfileClicked}
                    />
                </div>
            </>
    )
}
