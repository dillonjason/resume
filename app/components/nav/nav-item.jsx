import { Link } from 'react-router'

class NavItem extends React.Component {
    render() {
        return(
            <li className="pure-menu-item">
                <Link to={this.props.to} activeClassName="active" className="pure-menu-link">{this.props.children}</Link>
            </li>
        );
    }
}

NavItem.propTypes = {
  to: React.PropTypes.string.isRequired  
};

export default NavItem;