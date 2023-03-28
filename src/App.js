import { useState } from "react";
import Dropdown from "./pages/Dropdown";

const App = () => {
    const [selection, setSelection] = useState(null);

    const handleSelect = (option) => {
        setSelection(option);
    }

    const options = [
        { label: 'Red', value: 'red' },
        { label: 'Green', value: 'green' },
        { label: 'Blue', value: 'blue' }
    ]

    return (
        <div>
            <Dropdown options={options} onSelect={handleSelect} selection={selection} />
        </div>
    )
}

export default App;