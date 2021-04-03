import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import Profile from './Profile';
import Works from './Works';

export default class Navi extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <h1>
                        <Link to="/">Azu's Portfolio</Link>
                    </h1>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/Profile">Profile</Link>
                            </li>
                            <li>
                                <Link to="/Works">Works</Link>
                            </li>
                        </ul>
                    </nav>
    
                    <Switch>
                        <Route path="/Profile">
                            <Profile />
                        </Route>
                        <Route path="/Works">
                            <Works />
                        </Route>
                        <Route path="/">
                            
                        </Route>
                    </Switch>
                </div>
            </Router>
        );
    }
}