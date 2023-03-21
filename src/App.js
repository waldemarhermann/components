import Button from "./Button";

const App = () => {
    return (
        <div>
            <div>
                <Button succes rounded outline>Click here!</Button>
            </div>
            <div>
                <Button primary outline>Buy now</Button>
            </div>
            <div>
                <Button secondary rounded>Buy later</Button>
            </div>
            <div>
                <Button warning outline>See Deal</Button>
            </div>
            <div>
                <Button danger rounded>Hide Ads</Button>
            </div>
        </div>
    )
}

export default App;