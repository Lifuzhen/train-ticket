import React, {useState, createContext, useContext} from 'react';
import './App.css';

const CountContext = createContext();

class Foo extends React.Component{
    render() {
        return <CountContext.Consumer>
            {
                count=><div>{count}</div>
            }
        </CountContext.Consumer>
    }
}

class Bar extends React.Component{
    static contextType = CountContext;
    render() {
        const count = this.context;
        return <h1>{count}</h1>
    }
}

function Counter() {
    const count = useContext(CountContext);
    return <h1>{count}</h1>
}

function App(props) {
    const [count, setCount] = useState( 0);
    return <div>
        <button
            type="button"
            onClick={() => {
                setCount(count + 1)
            }}
        >
            Click({count})
        </button>
        <CountContext.Provider value={count}>
            <Foo/>
            <Bar/>
            <Counter />
        </CountContext.Provider>
    </div>;
}

export default App;
