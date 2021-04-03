import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import About from './About';

export default class Navi extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/About">About</Link>
                            </li>
                        </ul>
                    </nav>
    
                    <Switch>
                        <Route path="/About">
                            <About />
                        </Route>
                        <Route path="/">
                            
                        </Route>
                    </Switch>
                </div>
            </Router>
        );
    }
}