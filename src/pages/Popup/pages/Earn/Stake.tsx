import { CoinImage } from "../../components/Icon/CoinImage";

export const Stake = () => {

    return (

        <div className="flex items-center gap-1 w-80 h-20 pl-4 mt-2 bg-[#121316]">
            <CoinImage
                chainTitle="Commune.ai"
            />

            <div className="flex flex-col gap-1 justify-center items-start">
                <p className="text-[#717173] text-sm">
                    Stake CommuneAI to earn passive income
                </p>

                <a
                    href="./"
                    className="text-[#D97A7A] underline"
                >
                    Stake now
                </a>
            </div>
        </div>
    )
}
