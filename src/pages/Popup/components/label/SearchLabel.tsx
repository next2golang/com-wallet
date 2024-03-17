import { SlMagnifier } from "react-icons/sl"

export const SearchLabel = () => {

    return (
        <div className="relative w-72 h-10">
            <SlMagnifier className="absolute text-[#D97A7A] text-xs bg-inherit top-4 left-3" />
            <input
                type="text"
                className="w-full h-full text-white pl-10 text-sm border border-[#262632] rounded-xl bg-inherit"
            />
        </div>
    )
}