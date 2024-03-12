import communeImage from "../../assets/images/icon-84-86.png";

const WELCOME = 'Welcome to Commune ai';

export const WelcomeTextContainer = () => {

    return (
        <div className="flex justify-center gap-4 items-center mt-4">
            <img
                src={communeImage}
                alt={WELCOME}
            />

            <div className="flex flex-col items-center">
                <p className="text-[#717173] text-3xl font-semibold">
                    Welcome to
                </p>
                <p className="text-4xl text-white font-semibold">
                    Commune.ai
                </p>    
            </div>
        </div>
    )
}
