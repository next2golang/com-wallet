import { useEffect } from "react";

export const Login = () => {

    useEffect(() => {
        const flag = localStorage.getItem("isPopup");
        if (flag !== "popup") {
            chrome.tabs.create({ url: './onboard.html' });
        }
    }, [])

    return (
        <div>Login</div>
    )
}
