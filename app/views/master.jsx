import View from '../libs/view'
import { Link } from 'react-router'

class Master extends React.Component {
    render() {
        return (
            <View>
                <div className="pure-menu pure-menu-horizontal pure-menu-fixed">
                    <Link to="/" className="pure-menu-heading pure-menu-link">DILLON JASON</Link>
                    <ul className="pure-menu-list">
                        <li className="pure-menu-item">
                            <Link to="/Education" className="pure-menu-link">Education</Link>
                        </li>
                        <li className="pure-menu-item">
                            <Link to="/Experience" className="pure-menu-link">Experience</Link>
                        </li>
                        <li className="pure-menu-item">
                            <Link to="/Skills" className="pure-menu-link">Skills</Link>
                        </li>
                        <li className="pure-menu-item">
                            <Link to="/Achievements" className="pure-menu-link">Achievements</Link>
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