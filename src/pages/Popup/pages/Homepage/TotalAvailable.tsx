
export const TotalAvailable = ({amount}: {amount: number}) => {
    
    return (
        <div className="w-full bg-inherit mt-8 text-center">
            <p className="text-base text-[#717173]">
                Total Available
            </p>
            <p className="text-white text-2xl">
                ${amount}
            </p>
        </div>
    )
}
