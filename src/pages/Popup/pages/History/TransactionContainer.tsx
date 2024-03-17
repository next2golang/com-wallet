
import { TransactionItem } from "./TransactionItem";
import { TransactionItemProps } from "../../types";

// const TransactionDatas = [
//     {
//         transactionType: 'Swap',
//         swapDetail: {
//             soldCoinName: 'BTC',
//             soldCoinAmount: 1,
//             boughtCoinName: 'COMAI',
//             boughtCoinAmount: 28755,
//         },
//         date: {
//             year: 2024,
//             month: 'Febrary',
//             day: 29,
//         },
//     },
//     {
//         transactionType: 'Transfer',
//         transferDetail: {
//             transferAddress: 'Oxab673...a7ad',
//             transferAmount: -536,
//             transferCoinName: 'SUI',
//         },
//         date: {
//             year: 2024,
//             month: 'Febrary',
//             day: 29,
//         },
//     },
//     {
//         transactionType: 'Swap',
//         swapDetail: {
//             soldCoinName: 'BTC',
//             soldCoinAmount: 1,
//             boughtCoinName: 'COMAI',
//             boughtCoinAmount: 28755,
//         },
//         date: {
//             year: 2024,
//             month: 'Febrary',
//             day: 29,
//         },
//     },
//     {
//         transactionType: 'Swap',
//         swapDetail: {
//             soldCoinName: 'BTC',
//             soldCoinAmount: 1,
//             boughtCoinName: 'COMAI',
//             boughtCoinAmount: 28755,
//         },
//         date: {
//             year: 2024,
//             month: 'Febrary',
//             day: 29,
//         },
//     },
//     {
//         transactionType: 'Swap',
//         swapDetail: {
//             soldCoinName: 'BTC',
//             soldCoinAmount: 1,
//             boughtCoinName: 'COMAI',
//             boughtCoinAmount: 28755,
//         },
//         date: {
//             year: 2024,
//             month: 'Febrary',
//             day: 29,
//         },
//     },
//     {
//         transactionType: 'Swap',
//         swapDetail: {
//             soldCoinName: 'BTC',
//             soldCoinAmount: 1,
//             boughtCoinName: 'COMAI',
//             boughtCoinAmount: 28755,
//         },
//         date: {
//             year: 2024,
//             month: 'Febrary',
//             day: 29,
//         },
//     },
//     {
//         transactionType: 'Transfer',
//         transferDetail: {
//             transferAddress: 'Oxab673...a7ad',
//             transferAmount: -536,
//             transferCoinName: 'SUI',
//         },
//         date: {
//             year: 2024,
//             month: 'Febrary',
//             day: 29,
//         },
//     },
//     {
//         transactionType: 'Transfer',
//         transferDetail: {
//             transferAddress: 'Oxab673...a7ad',
//             transferAmount: -536,
//             transferCoinName: 'SUI',
//         },
//         date: {
//             year: 2024,
//             month: 'Febrary',
//             day: 29,
//         },
//     },
//     {
//         transactionType: 'Transfer',
//         transferDetail: {
//             transferAddress: 'Oxab673...a7ad',
//             transferAmount: -536,
//             transferCoinName: 'SUI',
//         },
//         date: {
//             year: 2024,
//             month: 'Febrary',
//             day: 29,
//         },
//     },
//     {
//         transactionType: 'Swap',
//         swapDetail: {
//             soldCoinName: 'BTC',
//             soldCoinAmount: 1,
//             boughtCoinName: 'COMAI',
//             boughtCoinAmount: 28755,
//         },
//         date: {
//             year: 2024,
//             month: 'Febrary',
//             day: 29,
//         },
//     },
//     {
//         transactionType: 'Swap',
//         swapDetail: {
//             soldCoinName: 'BTC',
//             soldCoinAmount: 1,
//             boughtCoinName: 'COMAI',
//             boughtCoinAmount: 28755,
//         },
//         date: {
//             year: 2024,
//             month: 'Febrary',
//             day: 29,
//         },
//     },
// ]

const transactionDatas: TransactionItemProps[] = []

export const TransactionContainer = () => {

    if (transactionDatas.length === 0) {
        return (
            <div className="text-lg text-[#717173] pt-20">
                No Transaction Record Found
            </div>
        )
    }

    return (
        <div className="flex flex-col items-center gap-1 w-full h-full overflow-scroll hide-scrollbar mt-2">
            {
                transactionDatas.map((transactionData) => {
                    return (
                        <TransactionItem
                            {...transactionData}
                        />
                    )
                })
            }
        </div>
    )
}
