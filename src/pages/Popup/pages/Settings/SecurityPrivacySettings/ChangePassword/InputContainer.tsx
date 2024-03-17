import React from "react"

interface InputContainerProps {
    currentPassword: string,
    setCurrentPassword: React.Dispatch<React.SetStateAction<string>>,
    newPassword: string,
    setNewPassword: React.Dispatch<React.SetStateAction<string>>,
    confirmNewPassword: string,
    setConfirmNewPassword: React.Dispatch<React.SetStateAction<string>>
}

export const InputContainer = ( {...props}: InputContainerProps) => {

    return (
        <div className="flex flex-col items-center gap-4 mt-14">
            <input
                type="text"
                value={props.currentPassword}
                placeholder="Current CommuneAI password"
                className=" w-72 h-12 bg-inherit px-3 text-white text-base rounded-2xl  border border-[#D97A7A]"
                onChange={(e) => props.setCurrentPassword(e.target.value)}
            />
            <input
                type="text"
                value={props.newPassword}
                placeholder="Create a password"
                className=" w-72 h-12 bg-inherit px-3 text-white text-base rounded-2xl border border-[#D97A7A]"
                onChange={(e) => props.setNewPassword(e.target.value)}
            />
            <input
                type="text"
                value={props.confirmNewPassword}
                placeholder="Confirm your password"
                className=" w-72 h-12 bg-inherit px-3 text-white text-base rounded-2xl border border-[#D97A7A]"
                onChange={(e) => props.setConfirmNewPassword(e.target.value)}
            />
        </div>
    )
}
