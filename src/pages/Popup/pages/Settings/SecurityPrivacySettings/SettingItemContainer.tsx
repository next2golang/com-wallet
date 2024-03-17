import { useNavigate } from "react-router-dom";
import { SettingItem } from "../../../components";
import { settingItemProps } from "../../../types";

export const SettingItemContainer = () => {
    const navigate = useNavigate();

    const onConnectedWebsiteClicked = () => {
        navigate('/connected-websites');
    }
    const onChangePasswordClicked = () => {
        navigate('/change-password');
    }
    const onAutoLockTimerClicked = () => {
        navigate('/auto-lock');
    }

    const settingItemProps: settingItemProps[] = [
        {
            title: 'Connected Website',
            onItemClicked: onConnectedWebsiteClicked,
        },
        {
            title: 'Change Password',
            onItemClicked: onChangePasswordClicked,
        },
        {
            title: 'Auto-lock Timer',
            onItemClicked: onAutoLockTimerClicked,
        }
    ]
    
    return (
        <div className="flex flex-col gap-2 items-center mt-6">
            {
                settingItemProps.map((settingItemProp) => {
                    return (
                        <SettingItem {...settingItemProp} />
                    )
                })
            }
        </div>
    )
}