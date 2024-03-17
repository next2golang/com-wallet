import { BackHeader } from "../../../../container";
import { SearchLabel } from "../../../../components";
import { MainButton } from "../../../../components";
import { WebsitesContainer } from "./WebsitesContainer";

export const ConnectedWebsite = () => {

    const onDisconnectAllButtonClicked = () => {
        console.log('disconnect all button clicked');
    }
    return (
        <div className="popup-container">
            <BackHeader headerTitle='Connected Website'/>
            <div className="mt-6">
                <SearchLabel />
            </div>
            <WebsitesContainer />
            <div className="absolute bottom-12">
                <MainButton
                    title='Disconnect All'
                    onClick={onDisconnectAllButtonClicked}
                />
            </div>
        </div>
    )
}
