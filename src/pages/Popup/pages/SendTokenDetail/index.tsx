import { useEffect, useState } from "react";
import { NetworkLabel } from "./NetworkLabel";
import { RecipientAddress } from "./RecipientAddress";
import { BackHeader } from "../../container";
import { MainActiveButton } from "../../components";
import { MaxAmountLabel } from "../../components";
import communeImage from "../../assets/images/icon-46-48.png";

export const SendTokenDetail = () => {

    const headerTitle = 'Send Commune.ai';
    const [amount, setAmount] = useState<number>();
    const [maxAmount, setMaxAmount] = useState<number>(1000000.67);
    const [address, setAddress] = useState<string>('');
    const [isNextButtonDisabled, setIsNextButtonDisabled] = useState<boolean>(true);

    const onNextButtonClicked = () => {
        console.log('next button clicked');
    }
    const validateInputData = () => {
        if (amount && address.trim()) {
            setIsNextButtonDisabled(false);
        } else {
            setIsNextButtonDisabled(true);
        }
    }

    useEffect(() => {
        validateInputData();
    },[amount, address])

    return (
        <div className="popup-container">
            <BackHeader 
                headerTitle={headerTitle}
            />
            <img
                src={communeImage}
                alt=""
                className="my-6"
            />
            <NetworkLabel />
            <RecipientAddress
                address={address}
                setAddress={setAddress}
            />
            <MaxAmountLabel
                amount={amount}
                setAmount={setAmount}
                maxAmount={maxAmount}
            />
            <div className="mt-24">
                <MainActiveButton
                    title='Next'
                    isDisabled={isNextButtonDisabled}
                    onClick={onNextButtonClicked}
                />
            </div>
        </div>
    )
}
