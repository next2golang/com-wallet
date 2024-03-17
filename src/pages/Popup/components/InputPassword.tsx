import { useState } from "react";
import { InputPasswordProps } from "../types";
import { LuEye } from "react-icons/lu";
import { RiEyeCloseFill } from "react-icons/ri";

const LABEL = 'Enter password'

export const InputPassword = ({password, setPassword}: InputPasswordProps) => {

    const [showPassword, setShowPassword] = useState<boolean>(false);

    const onEyeToggleClicked = () => {
        setShowPassword((prev) => !prev);
    }
    
    return (
        <div className="flex flex-col w-[288px] gap-3 mt-8">
            <label
                htmlFor="password"
                className="text-[#717173] text-sm pl-4"
            >
                {LABEL}
            </label>
            <div className="relative w-full h-12">
                <input 
                    name="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full h-full rounded-2xl border border-[#D97A7A] bg-inherit text-white px-4 text-lg"
                />
                {
                    showPassword 
                    ? <LuEye
                        className="absolute top-4 right-4 text-[#D97A7A] bg-inherit text-xl cursor-pointer"
                        onClick={onEyeToggleClicked}
                    /> 
                    : <RiEyeCloseFill
                        className="absolute top-4 right-4 text-[#D97A7A] text-xl cursor-pointer"
                        onClick={onEyeToggleClicked}
                    />
                }
            </div>
        </div>
    )
}
