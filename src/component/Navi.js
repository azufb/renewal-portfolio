import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
} from 'react-router-dom';
import Top from './Top';
import Profile from './Profile';
import Works from './Works';
import Skills from './Skills';

export default class Navi extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <h1>
                        <Link to="/Top">Azu's Portfolio</Link>
                    </h1>
                    <div className='navi'>
                        <NavLink to="/Profile">Profile</NavLink><span className='verticalB'>|</span>
                        <NavLink to="/Skills">Skills</NavLink><span className='verticalB'>|</span>
                        <NavLink to="/Works">Works</NavLink>
                    </div>
    
                    <Switch>
                        <Route path="/Profile">
                            <Profile />
                        </Route>
                        <Route path="/Skills">
                            <Skills />
                        </Route>
                        <Route path="/Works">
                            <Works />
                        </Route>
                        <Route path="/Top">
                            <Top />
                        </Route>
                    </Switch>
                </div>
            </Router>
        );
    }
}