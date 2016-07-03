import View from '../libs/view'
import Navbar from '../components/nav/navbar'

class Master extends React.Component {
    render() {
        return (
            <View>
                <Navbar
                    header="DILLON JASON"
                    navItems={
                        [
                            {name: "Eduction", to: "/Education"},
                            {name: "Experience", to: "/Experience"},
                            {name: "Skills", to: "/Skills"},
                            {name: "Achievements", to: "/Achievements"}
                        ]
                    }
                />

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