import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import ReactGA from 'react-ga'

import Master from './views/master'
import Home from './views/home'
import Education from './views/education'
import Experience from './views/experience'
import Skills from './views/skills'
import Achievements from './views/achievements'

ReactGA.initialize('UA-80542165-1');

function logPageView() {
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname);
}

export default render(
    (
        <Router history={browserHistory} onUpdate={logPageView}>
            <Route path="/" component={Master}>
                <IndexRoute component={Home} />
                <Route path="/Education" component={Education} />
                <Route path="/Experience" component={Experience} />
                <Route path="/Skills" component={Skills} />
                <Route path="/Achievements" component={Achievements} />
            </Route>
        </Router>
    ), document.getElementById('app')
);