import { Select, Option } from "@material-tailwind/react";
import { useState } from "react";


export const SetTimerContainer = () => {
    const [selectedOption, setSelectedOption] = useState<string>('10 min');

    const handleSelectChange = (event:any) => {
        setSelectedOption(event.target.value);
    }

    return (
        <div className="w-[350px] mb-6">            
            <Select
                placeholder="Ethereum"
                // variant="outlined"
                label="Set Timer"
                value={selectedOption}
                className="text-white bg-inherit"
                color="gray"
                size="lg"
                onChange={(e) => handleSelectChange(e)}
            >
                <Option value="5 min">5 min</Option>
                <Option value="10 min" >10 min</Option>
                <Option value="20 min" >20 min</Option>
                <Option value="30 min" >30 min</Option>
                <Option value="1 hour" >1 hour</Option>
            </Select>
        </div>
    )
}
