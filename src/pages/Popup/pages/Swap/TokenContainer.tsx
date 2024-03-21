import { FiPlus } from "react-icons/fi";
import { IoMdArrowDropright } from "react-icons/io";
import { CoinImage } from "../../components/Icon/CoinImage";

type TokenContainerProps = {
    tokenName: string | null,
    onClickHandler: () => void,
}
export const TokenContainer = ({tokenName, onClickHandler}: TokenContainerProps) => {

    return (
        <div
            className="flex items-center justify-between w-36 pl-2 py-2 bg-[#1D1D26] rounded cursor-pointer text-base text-[#717173] hover:text-[#f2f2f2] transition-all duration-300"
            onClick={onClickHandler}
        >
            {
                tokenName &&
                <div className="flex items-center justify-center gap-1">
                    <CoinImage
                        chainTitle={tokenName}
                    />
                    <p>
                        {tokenName}
                    </p>
                </div>
            }
            {
                !tokenName &&
                <p className="text-sm">
                    Select token
                </p>
            }
            <IoMdArrowDropright
                className="text-lg"
            />
        </div>
    )
}
