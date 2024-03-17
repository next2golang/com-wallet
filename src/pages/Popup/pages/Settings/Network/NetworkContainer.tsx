import { CoinImage } from "../../../components/Icon/CoinImage";

export const NetworkContainer = () => {
    const networkNames: string[] = [
        'Arbitrum',
        'Avalanche C-Chain',
        'ETH',
        'Fantom',
        'Polygon',
        'Smart Chain',
        'Solana',
    ]

    return (
        <div className="flex flex-col gap-1 items-center mt-5 max-h-[360px] min-h-[360px] overflow-auto hide-scrollbar">
            {
                networkNames.map((networkName) => {
                    return (
                        <div className="flex items-center pl-3 justify-start gap-3 w-80 h-16 bg-[#121316] rounded-xl">
                            <CoinImage
                                chainTitle={networkName}
                            />
                            
                            <p className="text-[#F7FBFF] text-lg">
                                {networkName}
                            </p>
                        </div>
                    )
                })
            }
        </div>
    )
}
