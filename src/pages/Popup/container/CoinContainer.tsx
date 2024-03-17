import { CoinAmount } from "../components/CoinAmount";

export const CoinContainer = ({onCoinClicked}: {onCoinClicked: () => void}) => {

    const coins = [
        {
            coinName: 'COM',
            chainTitle: 'Commune.ai',
        },
        {
            coinName: 'COM',
            chainTitle: 'Commune.ai',
        },
        {
            coinName: 'COM',
            chainTitle: 'Commune.ai',
        },
        {
            coinName: 'COM',
            chainTitle: 'Commune.ai',
        },
        {
            coinName: 'COM',
            chainTitle: 'Commune.ai',
        },
        {
            coinName: 'COM',
            chainTitle: 'Commune.ai',
        },
        {
            coinName: 'COM',
            chainTitle: 'Commune.ai',
        },
        {
            coinName: 'COM',
            chainTitle: 'Commune.ai',
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
        <div className="flex flex-col items-center gap-2 mt-4 min-h-72 max-h-72 overflow-auto hide-scrollbar">
            {
                coins.map(coin => {
                    return(
                        <CoinAmount
                            coinName={coin.coinName}
                            chainTitle={coin.chainTitle}
                            onClickHandler={onCoinClicked}
                        />
                    )
                })
            }
        </div>
    )
}
