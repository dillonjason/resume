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
        //document.body.classList.remove('mobile-menu');
    };

    onMobileToggleClick = () => {
        this.refs.menu.classList.toggle('show');
        //document.body.classList.toggle('mobile-menu');
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
                <div className={"pure-menu pure-menu-horizontal " + (this.state.showCards ? "menu-cards" : "pure-menu-fixed") }>
                    <div className="mobile-toggle" onClick={this.onMobileToggleClick}>
                        <s className="bar"></s>
                        <s className="bar"></s>
                        <s className="bar"></s>
                    </div>
                    {this.props.header &&
                        <Link to="/" className="pure-menu-heading pure-menu-link">{this.props.header}</Link>
                    }
                    {this.generateMenuList()}
                </div>

                <div className="pure-menu mobile-menu">
                    {this.generateMenuList("menu")}
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