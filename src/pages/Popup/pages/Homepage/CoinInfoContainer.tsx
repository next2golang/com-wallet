interface CoinInfo {
    icon: any;
    coinTitle: string;
    chainTitle: string;
    amount: number;
    value: number;
};

export const CoinInfoContainer = ({coinInfo}: {coinInfo: any}) => {
    
    return (
        <div className="flex flex-col items-center gap-1 mt-4">
            {
                coinInfo.map((coin: CoinInfo) => {
                    
                    return (
                        <div className="flex w-[320px] h-[60px] bg-[#121316] rounded justify-between items-center pl-3">
                            <img
                                src={coin.icon}
                                alt={`${coin.coinTitle} icon`}
                            />
                            <div className="flex flex-col justify-center w-full pl-4 pr-[10px]">
                                <span className="flex justify-between w-full text-white text-lg">
                                    <p>{coin.coinTitle}</p>
                                    <p>{coin.amount}</p>
                                </span>
                                <span className="flex justify-between w-full text-[#6F6F6F] text-sm">
                                    <p>{coin.chainTitle}</p>
                                    <p>${coin.value}</p>
                                </span>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
