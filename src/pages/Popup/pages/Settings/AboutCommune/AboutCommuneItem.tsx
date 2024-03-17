import { AiOutlineExport } from "react-icons/ai";

interface AboutCommuneItemProps {
    itemTitle: string,
    onItemClicked: () => void,
}

export const AboutCommuneItem = ({itemTitle, onItemClicked}: AboutCommuneItemProps) => {

    return (
        <div
            className="flex justify-between items-center w-80 h-12 px-4 bg-[#121316] rounded-lg cursor-pointer"
            onClick={onItemClicked}
        >
            <p className="text-lg text-[#F7FBFF]">
                {itemTitle}
            </p>
            <div className="flex items-center justify-center w-6 h-6 bg-[#1D1D26] rounded-full">
                <AiOutlineExport
                    className="text-[#737A82] text-lg"
                />
            </div>
        </div>
    )
}
