import communeImage from '../../assets/images/Commune-32.png';
import btcImage from '../../assets/images/btc.png';
import bnbImage from '../../assets/images/bnb.png';
import arbitrumImage from '../../assets/images/Arbitrum.png';
import avalancheImage from '../../assets/images/Avalanche.png';
import etherImage from '../../assets/images/Ethereum.png';
import fantomImage from '../../assets/images/Fantom.png';
import polygonImage from '../../assets/images/Polygon.png';
import scImage from '../../assets/images/Smart Chain.png';
import solanaImage from '../../assets/images/Solana.png';
import usdImage from '../../assets/images/USD.png';
import gbpImage from '../../assets/images/GBP.png';
import eurImage from '../../assets/images/EUR.png';

export const CoinImage = ({chainTitle}: {chainTitle: string}) => {

    return (
        <div className="w-8 h-8">
            {
                (chainTitle === 'Commune.ai' || chainTitle === 'COMAI' || chainTitle === 'COM') &&
                <img src={communeImage} alt="commune icon" />
            }
            {
                (chainTitle === 'Bitcoin' || chainTitle === 'BTC') &&
                <img src={btcImage} alt="bitcoin icon" />
            }
            {
                (chainTitle === 'Binance' || chainTitle === 'BND') &&
                <img src={bnbImage} alt="binance icon" />
            }
            {
                chainTitle === 'Arbitrum' &&
                <img src={arbitrumImage} alt="arbitrum icon" />
            }
            {
                (chainTitle === 'Avalanche' || chainTitle === 'Avalanche C-Chain') &&
                <img src={avalancheImage} alt="avalanche icon" />
            }
            {
                (chainTitle === 'Ethereum' || chainTitle === 'ETH') &&
                <img src={etherImage} alt="ethereum icon" />
            }
            {
                chainTitle === 'Fantom' &&
                <img src={fantomImage} alt="fantom icon" />
            }
            {
                chainTitle === 'Polygon' &&
                <img src={polygonImage} alt="polygon icon" />
            }
            {
                (chainTitle === 'Smart Chain' || chainTitle === 'BSC') &&
                <img src={scImage} alt="smart chain icon" />
            }
            {
                (chainTitle === 'Solana' || chainTitle === 'SOL') &&
                <img src={solanaImage} alt="solana icon" />
            }
            {
                (chainTitle === 'USD') &&
                <img src={usdImage} alt="USD icon" />
            }
            {
                (chainTitle === 'EUR') &&
                <img src={eurImage} alt="EUR icon" />
            }
            {
                (chainTitle === 'GBP') &&
                <img src={gbpImage} alt="GBP icon" />
            }
        </div>
    )
}
