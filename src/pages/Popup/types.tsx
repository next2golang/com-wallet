
export interface ButtonProps {
    title: string,
    onClick: () => void,
}

export interface ActiveButtonProps {
    title: string,
    isDisabled: boolean,
    onClick: () => void,
}

export interface InputPasswordProps {
    password: string,
    setPassword: React.Dispatch<React.SetStateAction<string>>,
}

export interface TokenSearchProps {
    selectedTokenClass: string,
    selectedToken: string,
    setSelectedTokenClass: React.Dispatch<React.SetStateAction<string>>,
    setSelectedToken: React.Dispatch<React.SetStateAction<string>>,
}

export interface MaxAmountLabelProps {
    amount: any,
    setAmount: React.Dispatch<React.SetStateAction<any>>,
    maxAmount: number,
}

type Date = {
    year: number,
    month: string,
    day: number,
}

type TransferDetail = {
    transferAddress: string,
    transferCoinName: string,
    transferAmount: number,
}

type SwapDetail = {
    soldCoinName: string,
    boughtCoinName: string,
    soldCoinAmount: number,
    boughtCoinAmount: number,
}

export interface TransactionItemProps {
    transactionType: string,
    date: Date,
    swapDetail?: SwapDetail,
    transferDetail?: TransferDetail,
}

export interface settingItemProps {
    title: string,
    onItemClicked: () => void,
}

export interface CopyToClipBoardWithEyeToggleProps {
    showContent: boolean,
    onEyeToggleClicked: () => void,
    onCopyToClipboardClicked: () => void,
}

export interface SwapInfoType {
    giveTokenName: string,
    giveSystemName: string,
    giveTokenAmount: number,
    receiveTokenName: string,
    receiveSystemName: string,
    receiveTokenAmount: number,
}

export interface SwapContextType {
    swapInfo: SwapInfoType,
    updateSwapInfo: (updateSwapInfo: SwapInfoType) => void,
    clearSwapInfo: () => void,
}

export interface TradeInfoType {
    payTokenName: string,
    payTokenAmount: number,
    buyTokenName: string,
    buyTokenAmount: number,
    sellTokenName: string,
    sellTokenAmount: number,
    receiveTokenName: string,
    receiveTokenAmount: number,
}

export interface TradeContextType {
    tradeInfo: TradeInfoType,
    updateTradeInfo: (updateTradeInfoData: TradeInfoType) => void,
    clearTradeInfo: () => void,
}
