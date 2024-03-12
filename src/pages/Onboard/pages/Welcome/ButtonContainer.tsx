import { useNavigate } from "react-router-dom";
import { CreateButton } from "./CreateButton";
import { ImportButton } from "./ImportButton";

export const ButtonContainer = () => {
    const navigate = useNavigate();
    
    const createWallet = () => {
        navigate('/recovery')
    }
    const importWallet = () => {
        console.log('importWallet');
    }

    return (
        <div className="flex flex-col items-center gap-3 w-full pt-16">
            <CreateButton
                title='Create a new wallet'
                onClicked={createWallet}
            />
            <ImportButton
                title='Import an existing wallet'
                onClicked={importWallet}
            />
        </div>
    )
}
