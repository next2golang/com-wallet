import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { VerifyWordContainer } from "./VerifyWordContainer";
import { MainActiveButton } from "../../components";

const TITLE = 'Verify Recovery Phrase';
const DESCRIPTION = 'Fill out the words according to the number to verify that you have stored your phrase  key safely';

export const Verify = () => {
    const navigate = useNavigate();

    const [inputValid, setInputValid] = useState<boolean>(false);

    const onNextButtonClicked = () => {
        navigate("/create-profile");
    }

    return(
            <>
                <p className="text-white text-2xl pt-16 pb-6">
                    {TITLE}
                </p>
                <p className="max-w-[512px] text-[#717173] text-lg">
                    {DESCRIPTION}
                </p>

                <VerifyWordContainer
                    setInputValid={setInputValid}
                />

                <div className="mt-20">
                    <MainActiveButton
                        title='Next'
                        isDisabled={!inputValid}
                        onClicked={onNextButtonClicked}
                    />
                </div>
            </>
    )
}
