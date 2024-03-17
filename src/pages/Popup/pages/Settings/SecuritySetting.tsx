import { useNavigate } from "react-router-dom";
import { SettingItem } from "../../components";
import { settingItemProps } from "../../types";

export const SecuritySetting = () => {
    const navigate = useNavigate();

    const onSecurityClicked = () => {
        navigate('/secret-privacy-settings')
    }
    const onDappClicked = () => {
        console.log('onDappClicked');
    }

    const securitySettings: settingItemProps[] = [
        {
            title: 'Security and Privacy',
            onItemClicked: onSecurityClicked,
        },
        {
            title: 'Connected dApps',
            onItemClicked: onDappClicked,
        },
    ]
    
    return (
        <div className="flex flex-col items-center gap-[2px] mt-4">
            {
                securitySettings.map((securitySetting) => {

                    return (
                        <SettingItem {...securitySetting}/>
                    )
                })
            }
        </div>
    )
}
