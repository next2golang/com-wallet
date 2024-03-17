import { Select, Option } from "@material-tailwind/react";
import { useState } from "react";


export const NetworkLabel = () => {
    const [selectedOption, setSelectedOption] = useState<string>('');

    const handleSelectChange = (event:any) => {
        setSelectedOption(event.target.value);
    }

    return (
        <div className="w-[350px] mb-6">            
            <Select
                placeholder="Ethereum"
                variant="outlined"
                label="Select Network"
                value={selectedOption}
                className="text-white bg-inherit"
                color="gray"
                size="lg"
                onChange={(e) => handleSelectChange(e)}
            >
                <Option value="Ethereum">Ethereum</Option>
                <Option value="Bitcoin" >Bitcoin</Option>
                <Option value="Polkadot" >Polkadot</Option>
                <Option value="Binance" >Binance</Option>
                <Option value="BSC" >BSC</Option>
            </Select>
        </div>
    )
}
