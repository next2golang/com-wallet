import { useNavigate } from "react-router-dom";
import { SettingItem } from "../../../components";
import { settingItemProps } from "../../../types";

export const AccountSetting = () => {
    const navigate = useNavigate();

    const onAccountNameClicked = () => {
        navigate('/edit-account-name');
    }
    const onShowSecretPhraseClicked = () => {
        navigate('/check-seedphrase');
    }
    const onShowPrivateKeyClicked = () => {
        navigate('/check-privatekey')
    }

    const accountSettingProps: settingItemProps[] = [
        {
            title: 'Account Name',
            onItemClicked: onAccountNameClicked,
        },
        {
            title: 'Show Secret Phrase',
            onItemClicked: onShowSecretPhraseClicked,
        },
        {
            title: 'Show Private Key',
            onItemClicked: onShowPrivateKeyClicked,
        },
    ]

    return (
        <div className="flex flex-col items-center gap-[2px] mt-16">
            {
                accountSettingProps.map((accountSettingProp) => {
                    return (
                        <SettingItem {...accountSettingProp}/>
                    )
                })
            }
        </div>
    )
}
