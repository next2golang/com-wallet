
import { AgreeTermsOfServiceProps } from "../types";

export const AgreeTermsOfService = ({isChecked, checkBoxToggle}: AgreeTermsOfServiceProps) => {

    return (
        <div className="flex gap-3 items-center w-[484px] ml-4 mt-10">
            <input type="checkbox"
                checked={isChecked}
                onChange={checkBoxToggle}
                className=" bg-black checked:bg-[#D97A7A]"
            />

            <p className="text-base text-[#717173]">
                I agree to Commune.ai
                <span className="text-[#D97A7A]">
                    Terms of Service
                </span>
            </p>
        </div>
    )
}