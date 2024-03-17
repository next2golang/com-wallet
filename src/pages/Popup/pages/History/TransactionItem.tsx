
import { TransactionItemProps } from "../../types";
import { TransactionIcon } from "../../components";
import { useEffect, useState } from "react";
import clsx from "clsx";

export const TransactionItem = ({...props}: TransactionItemProps) => {

    const [sign, setSign] = useState('');
    useEffect(() => {
        if (props.swapDetail && props.swapDetail?.boughtCoinAmount > 0) {
            console.log('I am here swap +')
            setSign('+')
        }
        if (props.transferDetail && props.transferDetail.transferAmount > 0) {
            console.log('I am here transfer +')
            setSign('+')
        }
    },[])

    return (
        <div className="flex justify-between items-center w-80 h-16 rounded-lg bg-[#121316] px-3 py-2">
            <div className="flex justify-center gap-2 items-center">
                <TransactionIcon
                    transactionType = {props.transactionType}
                />

                <div className="flex flex-col items-start justify-center gap-1">
                    <p className="text-sm text-[#CCE3FF]">
                        {props.transactionType}
                    </p>
                    {
                        props.transactionType === 'Swap' &&
                        <p className="text-[#717173] text-xs">
                            {props.swapDetail?.soldCoinAmount} {props.swapDetail?.soldCoinName} for {props.swapDetail?.boughtCoinAmount} {props.swapDetail?.boughtCoinName}
                        </p>
                    }
                    {
                        props.transactionType === 'Transfer' &&
                        <p className="text-[#717173] text-xs">
                            from: {props.transferDetail?.transferAddress}
                        </p>
                    }
                </div>
            </div>

            <div className="flex flex-col justify-end items-center gap-1">
                <p className="text-[#717173] text-xs">
                    {props.date.month} & {props.date.day}, {props.date.year}
                </p>
                <p 
                    className={
                        clsx(
                            "text-sm text-[#CCE3FF]",
                            {
                                "text-[#86AA89]" : sign === '+',
                                "text-[#E12E2E]" : sign !== '+',
                            }
                        )
                    }
                >
                    {sign === '+' && sign} {props.swapDetail && props.swapDetail.boughtCoinAmount} {props.transferDetail && props.transferDetail.transferAmount} {props.swapDetail && props.swapDetail.boughtCoinName} {props.transferDetail && props.transferDetail.transferCoinName}
                </p>
            </div>

        </div>
    )
}
