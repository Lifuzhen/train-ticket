import React, { Component, createContext } from 'react';
import logo from './logo.svg';
import './App.css';
const BatteryContext = createContext();
const OnlineContext = createContext();

class Leaf extends React.Component{
    render(){
        return <BatteryContext.Consumer>
            {
                battery => (
                    <OnlineContext.Consumer>
                        {
                            online=><h1>Battery:{battery},Online:{String(online)}</h1>
                        }
                    </OnlineContext.Consumer>
                )
            }
        </BatteryContext.Consumer>
    }
}

class Middle extends React.Component{
    render(){
        return <Leaf/>
    }
}

class App extends Component {
    state = {
        battery:60,
        online:false
    }
  render() {
        const {battery, online} = this.state;
    return (
      <BatteryContext.Provider value={battery}>
      <OnlineContext.Provider value={online}>
          <button type="button" onClick={()=>this.setState({battery: battery-1})}>press</button>
          <button type="button" onClick={()=>this.setState({online: !online})}>switch</button>
          <Middle/>
      </OnlineContext.Provider>
      </BatteryContext.Provider>
    );
  }
}

export default App;
