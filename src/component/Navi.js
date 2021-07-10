import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import Top from './Top';
import Profile from './Profile';
import Skills from './Skills';
import Works from './Works';
import Contact from './Contact';
import TaskList from './Works/taskList';
import ToDoKanri from './Works/todokanri';
import KyouNoYarukoto from './Works/kyouNoYarukoto';
import EventsRecorder from './Works/eventsRecorder';
import TagMemo from './Works/tagMemo';
import IBS from './Works/randomIceBreak';
import Homerun from './Works/homerun';
import Negapuchi from './Works/negapuchi';
import JHPM from './Works/jobHuntingProgressManage';

export default class Navi extends React.Component {
  render() {
    return (
      <Router>
        <ScrollToTop />
        <div>
          <div className="navBar">
            <div className="titles">
              <p>
                <Link to="/">Creative Room-A</Link>
              </p>
              <div className="navi">
                <NavLink to="/Profile">Profile</NavLink>
                <NavLink to="/Skills">Skills</NavLink>
                <NavLink to="/Works">Works</NavLink>
                {/*<NavLink to='/Contact'>Contact</NavLink><span className='verticalB'>/</span>*/}
                <a
                  href="https://forms.gle/orrcWKjtYrPiXdfx5"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Contact
                  <i className="fas fa-external-link-alt nav_contact"></i>
                </a>
              </div>
            </div>
          </div>

          <Switch>
            <Route path="/Profile">
              <Profile />
            </Route>
            <Route path="/Skills">
              <Skills />
            </Route>
            <Route exact path="/Works">
              <Works />
            </Route>
            <Route path="/Contact">
              <Contact />
            </Route>
            <Route path="/Works/kyouNoYarukoto">
              <KyouNoYarukoto />
            </Route>
            <Route path="/works/todokanri">
              <ToDoKanri />
            </Route>
            <Route path="/Works/taskList">
              <TaskList />
            </Route>
            <Route path="/Works/eventsRecorder">
              <EventsRecorder />
            </Route>
            <Route path="/Works/tagMemo">
              <TagMemo />
            </Route>
            <Route path="/Works/iceBreakShuffle">
              <IBS />
            </Route>
            <Route path="/Works/homerun">
              <Homerun />
            </Route>
            <Route path="/Works/negapuchi">
              <Negapuchi />
            </Route>
            <Route path="/Works/jobHuntingProgressManage">
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
