
export const SwapDetail = () => {
    const detailText = [
        {
            left: "Est. Time",
            right: "<5 min"
        },
        {
            left: "Provider",
            right: "SUIChain"
        },
        {
            left: "Min Receive",
            right: "9520.89 SUI"
        },
        {
            left: "Quote",
            right: "1BTC ≈ 28755 COMAI"
        },
        {
            left: "Slippage",
            right: "12%"
        },
        {
            left: "Network Fee",
            right: "0.007 SUI ≈ ($0.04)"
        }
    ]

    return (
        <div className="flex flex-col items-center gap-2 w-80 rounded bg-[#1D1D26] py-6 mt-8">
            {
                detailText.map((detail, index) => {
                    return (
                        <div
                            className="flex justify-between items-center w-72"
                            key={index}
                        >
                            <p className="text-base text-[#717173]">
                                {detail.left}
                            </p>
                            <p className="text-base text-[#717173]">
                                {detail.right}
                            </p>
                        </div>
                    )
                })
            }
        </div>
    )
}
