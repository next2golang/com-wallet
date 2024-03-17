import { SettingItemContainer } from "./SettingItemContainer";
import { ShareAnonymousData } from "./ShareAnonymousData";
import { BackHeader } from "../../../container";

export const SecurityPrivacySettings = () => {

    return (
        <div className="popup-container">
            <BackHeader
                headerTitle="Security & Privacy"
            />
            <SettingItemContainer />
            <ShareAnonymousData />
        </div>
    )
}
