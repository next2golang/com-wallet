import { MdOutlineDashboard } from "react-icons/md";

interface RecipientAddressProps {
    address: string,
    setAddress: React.Dispatch<React.SetStateAction<string>>
}
export const RecipientAddress = ({address, setAddress}: RecipientAddressProps) => {

    // const onMaxButtonClicked = () => {
    //     setAmount(maxAmount);
    // }

    return (
        <div className="flex flex-col items-start gap-1 w-[350px] mb-6">
            <p className="text-lg text-[#cccccc]">
                Recipient address
            </p>
            <div className="relative w-[350px] h-12 border border-[#cccccc] rounded-xl">
                <input
                    type="text"
                    placeholder="Type or paste address"
                    value={address}
                    className="w-full h-full bg-inherit border-[#262632] rounded-xl text-base text-white pl-4"
                    onChange={(e) => setAddress(e.target.value)}
                />
                <MdOutlineDashboard
                    className="absolute top-4 right-4 text-lg text-[#717173] cursor-pointer"
                />
            </div>
        </div>
    )
}
