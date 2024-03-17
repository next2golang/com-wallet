interface TradeItemProps {
    tradeItemTitle: string,
    coinName: string,
    amount: number,
}

export const TradeItem = ({...props}: TradeItemProps) => {

    return (
        <div className="flex flex-col py-4 bg-[#262632] rounded-xl">
            <p className="text-[#717173] pl-2">
                {props.tradeItemTitle}
            </p>
            <div className="flex justify-between px-4">
                
            </div>
        </div>
    )
}
