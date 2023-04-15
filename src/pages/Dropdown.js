import { useState } from "react";
import { GoChevronDown, GoChevronRight } from "react-icons/go";
import Panel from "../components/Panel";

const Dropdown = ({ options, onChange, value }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    }

    const handleOptionClick = (option) => {
        // Close Dropdown
        setIsOpen(false);
        onChange(option);

    }

    const renderedOptions = options.map((option) => {
        return (
            <div className="hover:bg-sky-100 rounded cursor-pointer p-1"
                onClick={() => handleOptionClick(option)} key={option.value}>
                {option.label}
            </div>
        )
    })

    const isExpanded = isOpen;

    return (
        <div className="w-48 relative">
            <Panel className="flex justify-between items-center cursor-pointer"
                onClick={handleClick}>
                {value?.label || 'Select...'}
                {isExpanded ? <GoChevronRight className="text-lg" /> : <GoChevronDown className="text-lg" />}
            </Panel>
            {isOpen && (
                <Panel className="absolute top-full">
                    {renderedOptions}
                </Panel>)}
        </div>
    )
}

export default Dropdown;