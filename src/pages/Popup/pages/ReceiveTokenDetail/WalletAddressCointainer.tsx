import { VscCopy } from "react-icons/vsc";
import copyTextToClipboard from "copy-text-to-clipboard";

export const WalletAddressContainer = () => {
    const temp = '0x28d7B1d07fF1f2e7eA80b2e71f4OOD0511C0We2t';

    const onCopyToClipBoardClicked = () => {
        copyTextToClipboard(temp);
    }

    return (
        <div className="flex items-center w-80 h-16 rounded-xl border border-[#262632] mt-14 px-6">
            <div className="flex justify-between items-start w-full">
                <VscCopy
                    className="text-[#717173] hover:text-white cursor-pointer text-lg transition-all duration-300 "
                    onClick={onCopyToClipBoardClicked}
                />
                <p className="text-sm text-[#aaaab1] text-center w-60 break-words pr-2">
                    0x28d7B1d07fF1f2e7eA80b2e71f4OOD0511C0We2t
                </p>
            </div>
        </div>
    )
}
