import { index } from "@material-tailwind/react/types/components/select";
import clsx from "clsx";

type SystemName = "Solana" | "Ethereum" | "Polygon";
type SystemContainerProps = {
    selectedSystemName: SystemName,
    setSelectedSystemName: React.Dispatch<React.SetStateAction<SystemName>>
}

export const SystemContainer = ({selectedSystemName, setSelectedSystemName}: SystemContainerProps) => {
    const systemNames:SystemName[] = [
        "Solana",
        "Ethereum",
        "Polygon",
    ]
    const onSystemClicked = (systemName: SystemName) => {
        setSelectedSystemName(systemName);
    }

    return (
        <div className="flex justify-start items-center gap-2 w-72">
            {
                systemNames.map((systemName:SystemName, index: index) => {
                    return (
                        <div
                            key={index}
                            className={clsx(
                                "px-3 py-2 rounded-xl cursor-pointer",
                                {
                                    "bg-[#1D1D26] text-[#717173]": systemName !== selectedSystemName,
                                    "bg-[#D97A7A] text-white": systemName === selectedSystemName
                                }
                            )}
                            onClick={() => onSystemClicked(systemName)}
                        >
                            {systemName}
                        </div>
                    )
                })
            }
        </div>
    )
}
