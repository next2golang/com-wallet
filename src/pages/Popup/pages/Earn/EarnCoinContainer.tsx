import { Coin } from "../../components";

export const EarnCoinContainer = () => {

    const onCoinClicked = () => {
        console.log('onCoinClicked');
    }
    
    const coins = [
        {
            coinName: 'BTC',
            chainTitle: 'Bitcoin',
        },
        {
            coinName: 'BTC',
            chainTitle: 'Bitcoin',
        },
        {
            coinName: 'BTC',
            chainTitle: 'Bitcoin',
        },
        {
            coinName: 'BTC',
            chainTitle: 'Bitcoin',
        },
        {
            coinName: 'BTC',
            chainTitle: 'Bitcoin',
        },
        {
            coinName: 'BTC',
            chainTitle: 'Bitcoin',
        },
        {
            coinName: 'BNB',
            chainTitle: 'Binance',
        },
    ]

    return (
        <div className="flex flex-col items-center gap-2 mt-4 min-h-64 max-h-64  overflow-auto hide-scrollbar">
            {
                coins.map((coin) => {
                    return(
                        <div
                            className="flex items-center justify-between w-80 h-20 px-3 py-3 bg-[#121316] rounded cursor-pointer"
                            onClick={onCoinClicked}
                        >
                            <Coin
                                coinName={coin.coinName}
                                chainTitle={coin.chainTitle}
                            />
                            <p className="text-base text-[#D97A7A]">
                                APR - 11.23%
                            </p>
                        </div>
                    )
                })
            }
        </div>
    )
}
