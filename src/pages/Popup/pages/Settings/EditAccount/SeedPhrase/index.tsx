
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import copyTextToClipboard from "copy-text-to-clipboard";
import { Warning } from "./Warning";
import { SeedPhraseContainer } from "./SeedPhraseContainer";
import { CopyToClipBoardWithEyeToggle } from "./CopyToClipBoardWithEyeToggle";
import { MainButton } from "../../../../components";
import { RedSmallActiveButton } from "../../../../components";
import { DarkSmallButton } from "../../../../components";
import { InputPassword } from "../../../../components";
import { BackHeader } from "../../../../container";

const seedPhrases = [
    'man',
    'hare',
    'Classic',
    'People',
    'Think',
    'Kazumi',
    'Haruto',
    'Brave',
    'Strong',
    'Smart',
    'Top',
    'Beautiful',
]

export const SeedPhrase = () => {
    const navigate = useNavigate();

    const realPassword = 'password';
    const [password, setPassword] = useState<string>('');
    const [showPhraseContainer, setShowPhraseContainer] = useState<boolean>(false);
    const [showSeedPhrase, setShowSeedPhrase] = useState<boolean>(false);
    const [nextButtonActive, setNextButtonActive] = useState<boolean>(false);

    const onEyeToggleClicked = () => {
        setShowSeedPhrase((prev) => !prev);
    }
    const onCopyToClipboardClicked = () => {
        const clipText = seedPhrases.join();
        copyTextToClipboard(clipText);
    }
    const onCloseButtonClicked = () => {
        setShowPhraseContainer(false);
    }
    const onCancelButtonClicked = () => {
        navigate('/edit-account');
    }
    const onNextButtonClicked = () => {
        if (password === realPassword) {
            setShowPhraseContainer(true);
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
                showPhraseContainer ?
                <>
                    <SeedPhraseContainer
                        words={seedPhrases}
                        showSeedPhrase={showSeedPhrase}
                    />
                    <CopyToClipBoardWithEyeToggle
                        showContent={showSeedPhrase}
                        onEyeToggleClicked={onEyeToggleClicked}
                        onCopyToClipboardClicked={onCopyToClipboardClicked}
                    />
                </>
                :
                <InputPassword
                    password={password}
                    setPassword={setPassword}
                />
            }
            {
                showPhraseContainer ?
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
