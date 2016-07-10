import View from '../libs/view'
import Navbar from '../components/nav/navbar'
import { browserHistory } from 'react-router'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

class Master extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            scrollDelay: null
        };
    }
    componentWillUpdate() {
        if (this.state.scrollDelay)
            window.clearTimeout(this.state.scrollDelay);

        this.state.scrollDelay = window.setTimeout(() => {
            window.scrollTo(0,0);
        }, 750);
    }

    render() {
        let isHome = this.props.location.pathname === '/';
        return (
            <div>
                <Navbar
                    header="DILLON JASON"
                    navItems={
                        [
                            {name: "Education", to: "/Education"},
                            {name: "Experience", to: "/Experience"},
                            {name: "Skills", to: "/Skills"},
                            {name: "Achievements", to: "/Achievements"}
                        ]
                    }
                    showCards={isHome}
                />
                <ReactCSSTransitionGroup
                    component="div"
                    className="react-animate-main"
                    transitionName="main-animate"
                    transitionEnterTimeout={1500}
                    transitionLeaveTimeout={1500}
                >
                    {React.cloneElement(this.props.children, {
                        key: this.props.location.pathname
                    })}
                </ReactCSSTransitionGroup>
            </div>
        );
    }
}

export default Master;