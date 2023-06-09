import { GoBell, GoDesktopDownload } from "react-icons/go";
import Button from "../components/Button";

const handleClick = () => {
    console.log('Click!');
}

const handleMouseOver = () => {
    console.log('touch!');
}

const ButtonPage = () => {
    return (
        <div>
            <div>
                <Button className='mb-5' onClick={handleClick} rounded ><GoBell />Click me!</Button>
            </div>
            <div>
                <Button onMouseOver={handleMouseOver} primary outline>Buy now</Button>
            </div>
            <div>
                <Button secondary rounded><GoDesktopDownload />Buy later</Button>
            </div>
            <div>
                <Button>See Deal</Button>
            </div>
            <div>
                <Button danger rounded>Hide Ads</Button>
            </div>
        </div>
    )
}

export default ButtonPage;