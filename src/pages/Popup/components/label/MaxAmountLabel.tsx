import { MaxAmountLabelProps } from "../../types";

export const MaxAmountLabel = ({amount, setAmount, maxAmount}: MaxAmountLabelProps) => {

    const onMaxButtonClicked = () => {
        setAmount(maxAmount);
    }

    return (
        <div className="flex flex-col items-start gap-1 w-[350px]">
            <p className="text-lg text-[#cccccc]">Amount</p>
            <div className="relative w-[350px] h-12 border border-[#262632] rounded-xl">
                <input
                    type="number"
                    placeholder="COM Amount"
                    value={amount}
                    className="w-full h-full bg-inherit border-[#262632] rounded-xl text-base text-white pl-4"
                    onChange={(e) => setAmount(parseFloat(e.target.value))}
                />
                <button
                    className="absolute bottom-1/2 transform translate-y-1/2 right-4 rounded-2xl bg-[#262632] text-white text-base disabled:text-[#717173] w-[56px] h-[26px]"
                    onClick={onMaxButtonClicked}
                >
                    Max
                </button>
            </div>
        </div>
    )
}
