import { useNavigate } from "react-router-dom";
import { SettingItem } from "../../components";
import { settingItemProps } from "../../types";

export const Help = () => {
    const navigate = useNavigate();

    const onHelpClicked = () => {
        console.log('onHelpClicked');
    }
    const onAboutClicked = () => {
        navigate('/about-commune');
    }

    const helpProps: settingItemProps[] = [
        {
            title: 'Help & Support',
            onItemClicked: onHelpClicked,
        },
        {
            title: 'About Commune AI',
            onItemClicked: onAboutClicked,
        },
    ]

    return (
        <div className="flex flex-col items-center gap-[2px] mt-4">
            {
                helpProps.map((helpProp) => {

                    return (
                        <SettingItem {...helpProp}/>
                    )
                })
            }
        </div>
    )
}
