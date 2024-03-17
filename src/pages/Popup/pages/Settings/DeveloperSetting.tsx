import { useNavigate } from "react-router-dom";
import { SettingItem } from "../../components";

export const DeveloperSetting = () => {
    const navigate = useNavigate();

    const onDeveloperSettingClicked = () => {
        navigate('/developer-settings')
    }

    return (
        <div className="mt-3">
            <SettingItem
                title='Developer Setting'
                onItemClicked={onDeveloperSettingClicked}
            />
        </div>
    )
}
