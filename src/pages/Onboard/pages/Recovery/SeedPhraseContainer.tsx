
import clsx from "clsx";
import { SeedPhraseWrapper } from "./SeedPhraseWrapper";

export const SeedPhraseContainer = ({words, showSeedPhrases}: {words: string[], showSeedPhrases: boolean}) => {
    return (
        <div
            className={
                clsx(
                    "relative flex flex-wrap gap-4 w-[484px] bg-[#121316] rounded-xl my-8 py-5 px-4",
                    {
                        "blur" : showSeedPhrases
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
