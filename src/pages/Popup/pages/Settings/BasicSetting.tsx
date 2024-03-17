import { useNavigate } from "react-router-dom";
import { SettingItem } from "../../components";
import { settingItemProps } from "../../types";

export const BasicSetting = () => {
    const navigate = useNavigate();

    const onManageAccountClicked = () => {
        navigate('/manage-account');
    }
    const onCurrencyClicked = () => {
        console.log('onCurrencyClicked');
    }
    const onNetworkClicked = () => {
        navigate('/network');
    }

    const basicSettingProps: settingItemProps[] = [
        {
            title: 'Manage Account',
            onItemClicked: onManageAccountClicked,
        },
        {
            title: 'Currency',
            onItemClicked: onCurrencyClicked,
        },
        {
            title: 'Network',
            onItemClicked: onNetworkClicked,
        },
    ]

    return (
        <div className="flex flex-col items-center gap-[2px] mt-4">
            {
                basicSettingProps.map((basicSettingProp) => {
                    return (
                        <SettingItem {...basicSettingProp}/>
                    )
                })
            }
        </div>
    )
}
