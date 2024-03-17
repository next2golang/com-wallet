
import { useState } from "react";
import { TokenSearch } from "./TokenSearch";
import { CoinInfoContainer } from "./CoinInfoContainer";
import communeImage from '../../assets/images/Commune-32.png';
import btcImage from '../../assets/images/btc.png';
import bnbImage from '../../assets/images/bnb.png';

const coinInfo = [
    {
        icon: communeImage,
        coinTitle: 'Com',
        chainTitle: 'Commune.ai',
        amount: 0,
        value: 0.00,
    },
    {
        icon: btcImage,
        coinTitle: 'BTC',
        chainTitle: 'Bitcoin',
        amount: 0,
        value: 0.00,
    },
    {
        icon: bnbImage,
        coinTitle: 'BNB',
        chainTitle: 'Binance',
        amount: 0,
        value: 0.00,
    }
]

export const TokenSearchBoard = () => {
    const [selectedToken, setSelectedToken] = useState<string>('');
    const [selectedTokenClass, setSelectedTokenClass] = useState<'Crypto' | 'NFTs'>('Crypto');

    return (
        <div className="w-full mt-5">
            <TokenSearch
                selectedToken={selectedToken}
                selectedTokenClass={selectedTokenClass}
                setSelectedToken={setSelectedToken}
                setSelectedTokenClass={setSelectedTokenClass}
            />
            <CoinInfoContainer
                coinInfo={coinInfo}
            />
        </div>
    )
}
