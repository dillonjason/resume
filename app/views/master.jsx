import Navbar from '../components/nav/navbar'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import ChatBubble from '../images/chat-bubble.png'
import ContactInfo from '../components/contact-info'

class Master extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            scrollDelay: null,
            showContact: false
        };
    }
    
    componentWillUpdate(nextProps, nextState) {
        if (nextState.showContact === this.state.showContact) {
            if (this.state.scrollDelay)
                window.clearTimeout(this.state.scrollDelay);

            this.state.scrollDelay = window.setTimeout(() => {
                window.scrollTo(0, 0);
            }, 750);
        }
    }

    onShowContactClick = () => {
        this.setState({'showContact': !this.state.showContact});
    };

    render() {
        let isHome = this.props.location.pathname === '/';
        return (
            <div>
                {!isHome &&
                    <div className="fixed-bottom-right">
                        <button type="button" className="pure-button accent-button fab" onClick={this.onShowContactClick}>
                            <img src={ChatBubble} />
                        </button>
                    </div>
                }

                <ContactInfo show={this.state.showContact} onCloseClick={this.onShowContactClick}/>
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