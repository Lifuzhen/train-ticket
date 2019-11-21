import React, {useState, useMemo, memo, useCallback} from 'react';
import './App.css';

const Counter = memo(function Counter(props) {
    console.log("Counter render");
    return <h1 onClick={props.onClick}>{props.count}</h1>
})

function App(props) {
    const [count, setCount] = useState( 0);
    const [clickCount, setClickCount] = useState( 0);

    const double = useMemo(()=>{
        return count * 2;
    },[count === 3]);

    const onClick = useCallback(() =>{
        console.log("Click");
        setClickCount((clickCount)=>clickCount+1);
    },[]);

    //如果useMemo返回的是一个函数就等价于useCallback

    return <div>
        <button
            type="button"
            onClick={() => {
                setCount(count + 1)
            }}
        >
            Click({count}), double({double})
        </button>
            <Counter count={double} onClick={onClick}/>
    </div>;
}

export default App;
