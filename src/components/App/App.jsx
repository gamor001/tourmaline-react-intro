import './App.css';
import React from 'react';

const useState = React.useState;
function App() {

    // const [myStateVariable, setMyStateVariable] = useState('Initial Value')

    // let whatUseStatereturns = useState(false);
    // let myThing = whatUseStatereturns[0];
    // let changeMyThing = whatUseStatereturns[1];

    const [name, setName] = useState('Alex');
    const [count, setCount] = useState(0);

    const handleClick = () => {
        console.log('clicked');
        setCount(count + 1)
    }

    const decreaseClick = () => {
        console.log('clicked');
        setCount(count -1)
    }

    return (
        <div className="App">
            <p>Hello! My name is {name}.</p>
            {/* <button onClick={() => console.log('clicked')} >Click me!</button> 
            <button onClick = {() => setCount(count + 1)} >Click me!</button>*/}
            <button onClick={handleClick}>Increase</button>
            <button onClick={decreaseClick}>Decrease</button>
            <p>I've clicked the button {count} times.</p>
        </div>
    );
}

export default App;
