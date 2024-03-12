
export const VerifyWordWrapper = ({verifyWord, verifyWordId}: {verifyWord: string, verifyWordId: number}) => {
    return  (
        <div className="flex items-center gap-1">
            <p className="text-base text-white">
                Word #{verifyWordId}:
            </p>
            <input
                type="text"
                className=" w-36 h-12 rounded-3xl border border-[#D97A7A]"
            />
        </div>
    )
}
