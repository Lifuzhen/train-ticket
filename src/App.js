import React, {Component, lazy, Suspense} from 'react';
import logo from './logo.svg';
import './App.css';

const About = lazy(() => import('./About.js'));

class App extends Component {

    render() {
        return <div>
            <Suspense fallback={<div>loading</div>}>
                <About/>
            </Suspense>
        </div>
    }
}

export default App;
