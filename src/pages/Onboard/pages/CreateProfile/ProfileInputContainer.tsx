import { ProfileInputContainerProps } from "../../types";

const NAME_PLACEHOLDER = 'Type your name';
const PASSWORD_PLACEHOLDER = 'Create a password';
const PASSWORD_CONFIRM_PLACEHOLDER = 'Confirm your password';

export const ProfileInputContainer = ({name, password, confirmPassword, setName, setPassword, setConfirmPassword}: ProfileInputContainerProps) => {

    return (
        <div className="flex flex-col gap-8 w-[484px] mt-16">
            <input
                type="text"
                name="name"
                value={name}
                placeholder={NAME_PLACEHOLDER}
                className="w-full h-[60px] text-xl text-white bg-inherit border border-[#D97A7A] rounded-lg px-4"
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="text"
                name="password"
                value={password}
                placeholder={PASSWORD_PLACEHOLDER}
                className="w-full h-[60px] text-xl text-white bg-inherit border border-[#D97A7A] rounded-lg px-4"
                onChange={(e) => setPassword(e.target.value)}
            />
            <input
                type="text"
                name="confirmPassword"
                value={confirmPassword}
                placeholder={PASSWORD_CONFIRM_PLACEHOLDER}
                className="w-full h-[60px] text-xl text-white bg-inherit border border-[#D97A7A] rounded-lg px-4"
                onChange={(e) => setConfirmPassword(e.target.value)}
            />
        </div>
    )
}
