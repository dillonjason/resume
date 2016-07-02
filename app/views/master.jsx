import View from '../libs/view'
import { Link } from 'react-router'

class Master extends React.Component {
    render() {
        return (
            <View>
                <div className="pure-menu pure-menu-horizontal pure-menu-fixed">
                    <Link to="/" className="pure-menu-heading pure-menu-link">BOILER PLATE</Link>
                    <ul className="pure-menu-list">
                        <li className="pure-menu-item">
                            <Link to="/Home" className="pure-menu-link">Home</Link>
                        </li>
                        <li className="pure-menu-item">
                            <Link to="/About" className="pure-menu-link">About</Link>
                        </li>
                    </ul>
                </div>

                <div className="content-wrapper">
                    <div className="content">
                        {this.props.children}
                    </div>
                </div>
            </View>
        );
    }
}

export default Master;