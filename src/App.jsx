import React, {lazy, Suspense} from 'react';
import logo from './logo.svg';
import './App.css';

const About = lazy(()=> import('./About.jsx'));

class App extends React.Component{
  render() {
    return <div>
      <Suspense fallback={<div>loading</div>}>
        <About/>
      </Suspense>
    </div>
  }
}
export default App;
