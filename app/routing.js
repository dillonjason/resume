import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import Master from './views/master'
import Home from './views/home'

export default render(
    (
        <Router history={browserHistory}>
            <Route path="/" component={Master}>
                <IndexRoute component={Home} />
                <Route path="/Education" component={Home} />
                <Route path="/Experience" component={About} />
                <Route path="/Skills" component={Home} />
                <Route path="/Achievements" component={About} />
            </Route>
        </Router>
    ), document.getElementById('app')
);