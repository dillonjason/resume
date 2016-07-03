import View from '../libs/view'
import Navbar from '../components/nav/navbar'
import { browserHistory } from 'react-router'

class Master extends React.Component {
    render() {
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
                    showCards={this.props.location.pathname === '/'}
                />
                <View>
                    <div className="content">
                        {this.props.children}
                    </div>
                </View>
            </div>
        );
    }
}

export default Master;