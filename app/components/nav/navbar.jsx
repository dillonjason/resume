import NavItem from './nav-item'
import { Link } from 'react-router'

class Navbar extends React.Component {
    constructor(props) {
        super();

        this.state = {
            showCards: props.showCards
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({'showCards': nextProps.showCards});
    }

    onNavItemClick = () => {
      this.setState({'showCards': false});
        this.refs.menu.classList.remove('show');
    };

    onMobileToggleClick = () => {
        this.refs.menu.classList.toggle('show');
    };

    render() {
        return(
            <div className={"pure-menu pure-menu-horizontal pure-menu-fixed " + (this.state.showCards ? "menu-cards" : "") }>
                <div className="mobile-toggle" onClick={this.onMobileToggleClick}>
                    <s className="bar"></s>
                    <s className="bar"></s>
                    <s className="bar"></s>
                </div>
                {this.props.header &&
                    <Link to="/" className="pure-menu-heading pure-menu-link">{this.props.header}</Link>
                }
                <ul className="pure-menu-list" ref="menu">
                    {this.props.navItems.map((item, index) => {
                        return <NavItem to={item.name} key={index} onClick={this.onNavItemClick}>{item.name}</NavItem>
                    })}
                </ul>
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