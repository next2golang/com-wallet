import { CoinImage } from "./Icon/CoinImage";

interface CoinAmountProps {
    chainTitle: string,
    coinName: string,
    onClickHandler: () => void,
}

export const CoinAmount = ({chainTitle, coinName, onClickHandler}: CoinAmountProps) => {
    
    return (
        <div
            className="flex items-center w-80 h-16 pl-3 py-2 bg-[#121316] rounded cursor-pointer"
            onClick={onClickHandler}
        >
            <CoinImage chainTitle={chainTitle} />
            <div className="flex flex-col justify-between py-1 pl-4">
                <p className="text-base text-white">
                    {chainTitle}
                </p>
                <p className="text-sm text-[#6F6F6F]">
                    0&nbsp;{coinName}
                </p>
            </div>
        </div>
    )
}
