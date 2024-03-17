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


export const CoinImage = ({chainTitle}: {chainTitle: string}) => {

    return (
        <div className="w-8 h-8">
            {
                chainTitle === 'Commune.ai' &&
                <img src={communeImage} alt="commune icon" />
            }
            {
                chainTitle === 'Bitcoin' &&
                <img src={btcImage} alt="bitcoin icon" />
            }
            {
                chainTitle === 'Binance' &&
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
                chainTitle === 'Smart Chain' &&
                <img src={scImage} alt="smart chain icon" />
            }
            {
                chainTitle === 'Solana' &&
                <img src={solanaImage} alt="solana icon" />
            }

        </div>
    )
}
