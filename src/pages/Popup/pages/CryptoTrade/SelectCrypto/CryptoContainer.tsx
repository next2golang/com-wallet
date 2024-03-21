import { CoinImage } from "../../../components/Icon/CoinImage";

interface CryptoContainerProps {
    tokenName: string,
    chainName: string,
    onClickHandler: (tokenName: string) => void,
}

export const CryptoContainer = ({tokenName, chainName, onClickHandler}: CryptoContainerProps) => {

    return (
        <div
            className="flex justify-start items-center gap-2 w-full px-2 py-1 rounded-md bg-[#121316] cursor-pointer"
            onClick={() => onClickHandler(tokenName)}
        >
            <CoinImage
                chainTitle={tokenName}
            />

            <div className="flex flex-col items-start justify-center">
                <p className="text-lg text-[#f2f2f2]">
                    {tokenName}
                </p>
                <p className="text-base text-[#717173]">
                    {chainName}
                </p>
            </div>
        </div>
    )
}
