import { BackHeader } from "../../container";
import { TransactionContainer } from "./TransactionContainer";
import { Calender } from "./Calender";

export const History = () => {
    
    return (
        <div className="popup-container">
            <BackHeader
                headerTitle="History"
            />
            <Calender />
            <TransactionContainer />
        </div>
    )
}
