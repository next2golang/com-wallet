import { useState } from "react";
import clsx from "clsx";
import copyTextToClipboard from "copy-text-to-clipboard";
import { CopyToClipBoardWithEyeToggle } from "./CopyToClipBoardWithEyeToggle";

export const PrivatekeyContainer = ({privatekey}: {privatekey: string}) => {
    const [showPrivatekey, setShowPrivatekey] = useState(false);

    const onEyeToggleClicked = () => {
        setShowPrivatekey((prev) => !prev);
    }
    const onCopyToClipboardClicked = () => {
        copyTextToClipboard(privatekey);
    }

    return (
        <div className="flex flex-col items-start w-80">
            <label
                htmlFor="privatekey"
                className="text-white pl-2"
            >
                Your private key
            </label>
            <div
                className={
                    clsx (
                    "bg-[#121316] w-full px-2 py-3",
                    {
                        "blur" : !showPrivatekey
                    }
                    )
                }
            >
                {privatekey}
            </div>
            <CopyToClipBoardWithEyeToggle
                showContent={showPrivatekey}
                onEyeToggleClicked={onEyeToggleClicked}
                onCopyToClipboardClicked={onCopyToClipboardClicked}
            />
        </div>
    )
}
