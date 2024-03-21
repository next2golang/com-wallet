import { CoinImage } from "../../components/Icon/CoinImage";
import { IoMdArrowDropright } from "react-icons/io";

interface TokenContainerProps {
    tokenName: string,
    onClickHandler: () => void
}

export const TokenContainer = ({tokenName, onClickHandler}: TokenContainerProps) => {

    return (
        <div
            className="flex justify-between items-center w-28 bg-[#0F0F12] p-2 rounded-xl text-[#717173] hover:text-[#f2f2f2] transition-all duration-300 cursor-pointer"
            onClick={onClickHandler}
        >
            <div className="flex justify-between items-center gap-1">
                <CoinImage
                    chainTitle={tokenName}
                />
                <p className="text-base">
                    {tokenName}
                </p>
            </div>
            <IoMdArrowDropright
                className="text-lg"
            />
        </div>
    )
}
