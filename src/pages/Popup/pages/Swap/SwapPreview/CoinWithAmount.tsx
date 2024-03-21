import { CoinImage } from "../../../components/Icon/CoinImage";

interface CoinWithAmountProps {
    coinName: string,
    amount: number,
}

export const CoinWithAmount = ({coinName, amount}: CoinWithAmountProps) => {
    
    return (
        <div className="flex flex-col items-center justify-center gap-2">
            <CoinImage
                chainTitle={coinName}
            />

            <p className="text-base text-[#717173]">
                {amount}
                &nbsp;
                {coinName}
            </p>
        </div>
    )
}
