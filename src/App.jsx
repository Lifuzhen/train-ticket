import React, {useState, PureComponent, useMemo,useEffect, memo, useCallback, useRef} from 'react';
import './App.css';

class Counter extends PureComponent{
    speak(){
        console.log(`new counter is: ${this.props.count}`)
    }
    render() {
        const {props} =this;
        return <h1 onClick={props.onClick}>{props.count}</h1>
    }
}

function App(props) {
    const [count, setCount] = useState( 0);
    const [clickCount, setClickCount] = useState( 0);
    const counterRef = useRef();
    const it = useRef();

    const double = useMemo(()=>{
        return count * 2;
    },[count === 3]);

    const onClick = useCallback(() =>{
        console.log("Click");
        setClickCount((clickCount)=>clickCount+1);
        counterRef.current.speak();
    },[counterRef]);

    //如果useMemo返回的是一个函数就等价于useCallback

    useEffect(()=>{
        it.current = setInterval(()=>{
            setCount(count=>count+1)
        },1000)
    },[]);

    useEffect(()=>{
        if(count >= 10){
            clearInterval(it.current);
        }
    });

    return <div>
        <button
            type="button"
            onClick={() => {
                setCount(count + 1)
            }}
        >
            Click({count}), double({double})
        </button>
            <Counter ref={counterRef} count={double} onClick={onClick}/>
    </div>;
}

export default App;
