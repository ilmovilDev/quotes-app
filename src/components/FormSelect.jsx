import { Select, SelectItem } from "@tremor/react"
import categories from "../mokups/categories.json"
import { DocumentIcon } from "@heroicons/react/outline";


export const FormSelect = ({ selectdValue, setSelectdValue }) => {

    return (
        <Select
            value={selectdValue}
            onValueChange={setSelectdValue}
            placeholder="Select a category"
        >
            {categories.map(category => {

                const { option } = category;
                const capitalizedOption = option ? option.charAt(0).toLocaleUpperCase() + option.slice(1) : "";

                return (
                    <SelectItem
                        icon={DocumentIcon}
                        key={option}
                        value={option}
                    >
                        {capitalizedOption}
                    </SelectItem>
                )
            })}
        </Select>
    )
}