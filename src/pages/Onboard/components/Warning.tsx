import { PiWarningFill } from "react-icons/pi";

export const Warning = (warningText: string) => {
    return (
        <div className="">
            <PiWarningFill />
            <p>
                {warningText}
            </p>
        </div>
    )
}
