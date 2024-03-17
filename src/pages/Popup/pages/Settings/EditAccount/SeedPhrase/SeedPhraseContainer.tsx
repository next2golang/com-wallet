import clsx from "clsx";
import { SeedPhraseWrapper } from "./SeedPhraseWrapper";

interface SeedPhraseContainer {
    words: string[],
    showSeedPhrase: boolean,
}

export const SeedPhraseContainer = ({words, showSeedPhrase}: SeedPhraseContainer) => {
    return (
        <div
            className={
                clsx (
                "relative flex flex-wrap gap-4 w-80 bg-[#121316] rounded-xl my-5 p-3",
                {
                    "blur" : !showSeedPhrase
                }
                )
            }
        >
            {
                words.map((word, index) => (
                    <SeedPhraseWrapper
                        key={index}
                        word={word}
                    />
                ))
            }
        </div>
    )
}
