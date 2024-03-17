import { BackHeader } from "../../container";
import { WalletAddressContainer } from "./WalletAddressCointainer";
import binaryImage from "../../assets/images/binary.png";

export const ReceiveTokenDetail = () => {
    const headerTitle = 'Receive Commune.ai'
    const explanation = 'This address can only be use to receive compatible tokens';

    return (
        <div className="popup-container">
            <BackHeader
                headerTitle={headerTitle}
            />
            <img
                src={binaryImage}
                alt=""
                className=" mt-16"
            />
            <WalletAddressContainer />
            <p className=" w-80 text-[#D97A7A] text-base text-center mt-12">
                {explanation}
            </p>
        </div>
    )
}
