import { useState } from "react";
import Dropdown from "./pages/Dropdown";

const App = () => {
    const [selection, setSelection] = useState(null);

    const options = [
        { label: 'Red', value: 'red' },
        { label: 'Green', value: 'green' },
        { label: 'Blue', value: 'blue' }
    ]

    return (
        <div>
            <Dropdown options={options} />
        </div>
    )
}

export default App;