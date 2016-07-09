import NavItem from './nav-item'
import { Link } from 'react-router'
import FixedOverlay from '../../components/fixed-overlay'

class Navbar extends React.Component {
    constructor(props) {
        super();

        this.state = {
            showCards: props.showCards,
            showOverlay: false
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({'showCards': nextProps.showCards});
    }

    onNavItemClick = () => {
        this.setState({'showCards': false});

        if (this.refs.menu) {
            this.refs.menu.classList.remove('show');
            window.setTimeout(() => {
                this.setState({'showOverlay': false});
            }, 750);
        }
    };

    onMobileToggleClick = () => {
        if (this.state.showOverlay) {
            this.refs.menu.classList.remove('show');
            window.setTimeout(() => {
                this.setState({'showOverlay': false});
            }, 750);
        }
        else {
            this.setState({'showOverlay': true});
            window.setTimeout(() => {
                this.refs.menu.classList.add('show');
            }, 250);
        }
    };

    generateMenuList = (ref) => {
        return (
            <ul className="pure-menu-list" ref={ref ? ref : ""}>
                {this.props.navItems.map((item, index) => {
                    return <NavItem to={item.name} key={index} onClick={this.onNavItemClick}>{item.name}</NavItem>
                })}
            </ul>
        );
    };

    render() {
        return(
            <div className="resume-nav">
                {this.state.showOverlay &&
                    <FixedOverlay onClick={this.onMobileToggleClick} belowMenu={true}>
                        <div className="pure-menu mobile-menu">
                            {this.generateMenuList("menu")}
                        </div>
                    </FixedOverlay>
                }

                <div className={"pure-menu pure-menu-horizontal " + (this.state.showCards ? "menu-cards" : "pure-menu-fixed") }>
                    <div className="mobile-toggle" onClick={this.onMobileToggleClick}>
                        <s className="bar"></s>
                        <s className="bar"></s>
                        <s className="bar"></s>
                    </div>
                    {this.props.header &&
                        <Link to="/" className="pure-menu-heading pure-menu-link" onClick={this.onNavItemClick}>{this.props.header}</Link>
                    }
                    {this.generateMenuList()}
                </div>
            </div>
        );
    }
}

Navbar.propTypes = {
    header: React.PropTypes.string,
    navItems: React.PropTypes.arrayOf(
      React.PropTypes.shape({
          name: React.PropTypes.string.isRequired,
          to: React.PropTypes.string.isRequired
      }).isRequired
    ).isRequired,
    showCards: React.PropTypes.bool
};

Navbar.defaultProps = {
    header: false,
    showCards: false
};

export default Navbar;