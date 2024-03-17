import { BackHeader } from "../../../container";
import { NetworkContainer } from "./NetworkContainer";
import { MainButton } from "../../../components";

export const Network = () => {

    const onAddCustomNetworkButtonClicked = () => {
        console.log('onAddCustomNetworkButtonClicked');
    }

    return (
        <div className="popup-container">
            <BackHeader
                headerTitle="Network"
            />
            <NetworkContainer />
            
            <div className="mt-12">
                <MainButton
                    title='Add Custom Network'
                    onClick={onAddCustomNetworkButtonClicked}
                />
            </div>
        </div>
    )
}
