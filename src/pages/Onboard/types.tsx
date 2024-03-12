export interface ButtonProps {
    title: string,
    onClicked: () => void,
}

export interface ActiveButtonProps {
    title: string,
    isDisabled: boolean,
    onClicked: () => void,
}

export interface AgreeTermsOfServiceProps {
    isChecked: boolean,
    checkBoxToggle: () => void,
}

export interface ProfileInputContainerProps {
    name: string,
    password: string,
    confirmPassword: string,
    setName: React.Dispatch<React.SetStateAction<string>>,
    setPassword: React.Dispatch<React.SetStateAction<string>>,
    setConfirmPassword: React.Dispatch<React.SetStateAction<string>>,
}

export interface InputPasswordProps {
    password: string,
    setPassword: React.Dispatch<React.SetStateAction<string>>,
}

export interface CopyToClipBoardWithEyeToggleProps {
    showSeedPhrases: boolean,
    onEyeToggleClicked: () => void,
    onCopyToClipboardClicked: () => void,
}
