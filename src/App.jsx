import React, {useState} from 'react';
import './App.css';

let id = 0;

function App(props) {
    const [count, setCount] = useState(()=>{
        console.log("initial count");
        return props.defaultCount || 0
    });

    return <div>
        <button
            type="button"
            onClick={() => {
                setCount(count + 1)
            }}
        >
            Click({count})
        </button>
    </div>;
}

export default App;
