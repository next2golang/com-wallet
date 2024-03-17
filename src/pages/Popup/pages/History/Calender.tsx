import { SlCalender } from "react-icons/sl";

export const Calender = () => {

    return (
        <div className="flex justify-between px-3 mt-3 w-full">
            <p className="text-base text-white">
                Last 20 transactions only
            </p>
            <div className="flex justify-center items-center w-8 h-8 bg-[#262632] text-[#737A82] rounded-full">
                <SlCalender />
            </div>
        </div>
    )
}
