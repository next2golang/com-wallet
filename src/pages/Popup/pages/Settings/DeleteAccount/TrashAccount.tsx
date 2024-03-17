import { FaTrash } from "react-icons/fa6";

export const TrashAccount = ({accountName}: {accountName: string}) => {
    const explanation = 'Remove account from CommuneAI will not lead to lose of asset, you will be able to retrieve your asset using you mnemonic in this or another wallet';

    return (
        <div className="flex flex-col items-center mt-8">
            <div className="flex justify-center items-center w-32 h-32 border border-[#E32020] rounded-full">
                <FaTrash
                    className="text-8xl text-[#E32020]"
                />
            </div>
            <p className="text-xl text-white mt-4">
                Remove &nbsp;{accountName}
            </p>
            <p className="w-80 text-center text-[#717173] break-words my-8">
                {explanation}
            </p>
        </div>
    )
}
