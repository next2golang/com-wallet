import { useEffect, useState } from "react";

const seedPhrases = [
    'man',
    'hare',
    'Classic',
    'People',
    'Think',
    'Kazumi',
    'Haruto',
    'Brave',
    'Strong',
    'Smart',
    'Top',
    'Beautiful',
]

export const VerifyWordContainer = ({setInputValid}: {setInputValid: React.Dispatch<React.SetStateAction<boolean>>}) => {

    const seedPhraseIdNumber = [4, 10, 3, 6, 12, 7];
    
    const [seedPhrases, setSeedPhrases] = useState<string[]>(new Array(6).fill(''));

    const handleSeedPhraseChange = (index: number, value: string) => {
        const updatedSeedPhrases: string[] = [...seedPhrases];
        updatedSeedPhrases[index] = value;
        setSeedPhrases(updatedSeedPhrases);
    };

    useEffect(() => {
        const allValid = seedPhrases.every((phrase) => phrase.trim() !== '');
        setInputValid(allValid);
    })

    return (
        <div className="flex flex-wrap gap-x-6 gap-y-4 w-[536px] px-6 py-8 mt-14 bg-[#0F0F12]">
            {
                seedPhraseIdNumber.map((idNumber, index) =>(
                    <div
                        key={index}
                        className="flex items-center justify-between w-[47%]"
                    >
                        <p className="text-base text-white">
                            Word #{idNumber}:
                        </p>
                        <input
                            type="text"
                            value={seedPhrases[index] || ''}
                            className=" w-36 h-12 rounded-3xl bg-inherit text-xl text-white border border-[#D97A7A] pl-4 py-auto"
                            onChange={(e) => handleSeedPhraseChange(index, e.target.value)}
                        />
                    </div>
                ))
            }
        </div>
    )
}
