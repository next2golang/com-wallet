import { CoinImage } from "../../../components/Icon/CoinImage"

interface CurrencyContainerProps {
    currencyName: string,
    fullName: string,
    onClickHandler: (tokenName: string) => void
}

export const CurrencyContainer = ({currencyName, fullName, onClickHandler}: CurrencyContainerProps) => {

    return (
        <div
            className="flex justify-start items-center w-full gap-2 p-2 bg-[#121316] cursor-pointer"
            onClick={() => onClickHandler(currencyName)}
        >
            <CoinImage
                chainTitle={currencyName}
            />

            <p className="text-lg text-[#f2f2f2]">
                {currencyName}
                &nbsp;
                -
                &nbsp;
                {fullName}
            </p>
        </div>
    )
}
