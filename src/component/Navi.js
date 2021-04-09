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
import Skills from './Skills';
import Works from './Works';
import Contact from './Contact';
import JHPM from './works/jobHuntingProgressManage';
import Homerun from './works/homerun';
import Negapuchi from './works/negapuchi';
import IBS from './works/randomIceBreak';

export default class Navi extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <h1>
                        <Link to="/">Azu's Portfolio</Link>
                    </h1>
                    <div className='navi'>
                        <NavLink to="/Profile">Profile</NavLink><span className='verticalB'>|</span>
                        <NavLink to="/Skills">Skills</NavLink><span className='verticalB'>|</span>
                        <NavLink to="/Works">Works</NavLink><span className='verticalB'>|</span>
                        <NavLink to='/Contact'>Contact</NavLink>
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
                        <Route path='/Contact'>
                            <Contact />
                        </Route>
                        <Route path="/iceBreakShuffle">
                            <IBS />
                        </Route>
                        <Route path="/homerun">
                            <Homerun />
                        </Route>
                        <Route path="/negapuchi">
                            <Negapuchi />
                        </Route>
                        <Route path="/jobHuntingProgressManage">
                            <JHPM />
                        </Route>
                        <Route path="/">
                            <Top />
                        </Route>

                    </Switch>
                </div>
            </Router>
        );
    }
}