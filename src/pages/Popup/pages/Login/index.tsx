import { useState, useEffect } from 'react';
import image from '../../assets/images/icon-84-86.png';
import { InputPassword } from '../../components';
import { MainActiveButton } from '../../components';
import { useNavigate } from 'react-router-dom';

export const Login = () => {

    const navigate = useNavigate();

    const [password, setPassword] = useState<string>('');
    const [passwordValid, setPasswordValid] = useState<boolean>(false);

    const onUnlockWalletButtonClicked = () => {
        navigate('/homepage');
    }

    useEffect(() => {
        const flag = localStorage.getItem("isPopup");
        if (flag !== "popup") {
            chrome.tabs.create({ url: './onboard.html' });
        }
    }, [])

    useEffect(() => {
        if (password.trim()) {
            setPasswordValid(true);
        } else {
            setPasswordValid(false);
        }
    },[password])

    return (
        <div className="popup-container">
            <img
                src={image}
                alt="Commune login"
                className='pt-16'
            />
            <p className='text-3xl text-white pt-2'>
                Commune.ai
            </p>
            <p className='text-base text-[#717173] w-[212px] pt-6 text-center'>
                Secure and fast multi-chain crypto wallet.
            </p>
            <InputPassword
                password={password}
                setPassword={setPassword}
            />
            <div className='mt-24'>
                <MainActiveButton
                    title='Unlock wallet'
                    isDisabled={!passwordValid}
                    onClick={onUnlockWalletButtonClicked}
                />
            </div>
        </div>
    )
}
