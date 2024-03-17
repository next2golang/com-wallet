import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import copyTextToClipboard from "copy-text-to-clipboard";
import { Warning } from "./Warning";
import { PrivatekeyContainer } from "./PrivatekeyContainer";
import { MainButton } from "../../../../components";
import { RedSmallActiveButton } from "../../../../components";
import { DarkSmallButton } from "../../../../components";
import { InputPassword } from "../../../../components";
import { BackHeader } from "../../../../container";

const privatekey = '0xFFFF FFFF FFFF FFFF FFFF FFFF FFFF FFFE BAAE DCE6 AF48 A03B BFD2 5E8C D036 4140';

export const Privatekey = () => {
    const navigate = useNavigate();

    const realPassword = 'password';
    const [password, setPassword] = useState<string>('');
    const [showPrivatekeyContainer, setShowPrivatekeyContainer] = useState<boolean>(false);
    const [nextButtonActive, setNextButtonActive] = useState<boolean>(false);

    const onCopyToClipboardClicked = () => {
        copyTextToClipboard(privatekey);
    }
    const onCloseButtonClicked = () => {
        setShowPrivatekeyContainer(false);
    }
    const onCancelButtonClicked = () => {
        navigate('/edit-account');
    }
    const onNextButtonClicked = () => {
        if (password === realPassword) {
            setShowPrivatekeyContainer(true);
        }
    }

    useEffect(() => {
        if (password.trim()) {
            setNextButtonActive(true);
        } else {
            setNextButtonActive(false);
        }
    }, [password])

    return (
        <div className="popup-container">
            <BackHeader
                headerTitle="Seed phrase"
            />
            <Warning />
            {
                showPrivatekeyContainer
                ?
                <>
                    <PrivatekeyContainer
                        privatekey={privatekey}
                    />
                </>
                :
                <InputPassword
                    password={password}
                    setPassword={setPassword}
                />
            }
            {
                showPrivatekeyContainer ?
                <div className="absolute bottom-14">
                    <MainButton
                        title='Close'
                        onClick={onCloseButtonClicked}
                    />
                </div>
                :
                <div className="two-button-container absolute bottom-14">
                    <DarkSmallButton
                        title='Cancel'
                        onClick={onCancelButtonClicked}
                    />
                    <RedSmallActiveButton
                        title='Next'
                        isDisabled={!nextButtonActive}
                        onClick={onNextButtonClicked}
                    />
                </div>
            }
        </div>
    )
}
