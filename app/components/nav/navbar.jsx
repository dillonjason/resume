import NavItem from './nav-item'
import { Link } from 'react-router'

class Navbar extends React.Component {
    render() {
        return(
            <div className={"pure-menu pure-menu-horizontal pure-menu-fixed " + (this.props.showCards ? "menu-cards" : "") }>
                {this.props.header &&
                    <Link to="/" className="pure-menu-heading pure-menu-link">{this.props.header}</Link>
                }
                <ul className="pure-menu-list">
                    {this.props.navItems.map((item, index) => {
                        return <NavItem to={item.name} key={index}>{item.name}</NavItem>
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