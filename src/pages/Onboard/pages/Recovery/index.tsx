import { useState } from "react";
import { useNavigate } from "react-router-dom";
import copyTextToClipboard from "copy-text-to-clipboard";
import { SeedPhraseContainer } from "./SeedPhraseContainer";
import { CopyToClipBoardWithEyeToggle } from "./CopyToClipBoardWithEyeToggle";
import { Warning } from "./Warning";
import { MainActiveButton } from "../../components";
import { AgreeTermsOfService } from "../../components";

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

const TITLE = 'Secret Recovery Phrase';
const DESCRIPTION = 'you will use this to secure your wallet';

export const Recovery = () => {
    const navigate = useNavigate();

    const [showSeedPhrases, setShowSeedPhrases] = useState<boolean>(false);
    const [isChecked, setIsChecked] = useState<boolean>(false);

    const onEyeToggleClicked = () => {
        setShowSeedPhrases((prev) => !prev);
    }
    const checkBoxToggle = () => {
        setIsChecked((prev) => !prev);
        console.log(isChecked)
    }
    const onCopyToClipboardClicked = () => {
        const clipText = seedPhrases.join();
        copyTextToClipboard(clipText);
    }
    const onAdvanceButtonClick = () => {
        navigate('/verify');
    }

    return (
            <>
                <p className="text-white text-3xl mt-12">
                    {TITLE}
                </p>
                <p className="text-[#717173] text-xl mt-2">
                    {DESCRIPTION}
                </p>

                <SeedPhraseContainer
                    words={seedPhrases}
                    showSeedPhrases={showSeedPhrases}
                />
                <CopyToClipBoardWithEyeToggle
                    showSeedPhrases={showSeedPhrases}
                    onEyeToggleClicked={onEyeToggleClicked}
                    onCopyToClipboardClicked={onCopyToClipboardClicked}
                />
                <Warning/>
                <AgreeTermsOfService
                    isChecked={isChecked}
                    checkBoxToggle={checkBoxToggle}
                />
                
                <div className="mt-10">
                    <MainActiveButton
                        title='Advance'
                        isDisabled={!isChecked}
                        onClicked={onAdvanceButtonClick}
                    />
                </div>
            </> 
    )
}
