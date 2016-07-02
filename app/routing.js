import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import Master from './views/master'
import Home from './views/home'
import About from './views/about'

export default render(
    (
        <Router history={browserHistory}>
            <Route path="/" component={Master}>
                <IndexRoute component={Home} />
                <Route path="/Home" component={Home} />
                <Route path="/About" component={About} />
            </Route>
        </Router>
    ), document.getElementById('app')
);