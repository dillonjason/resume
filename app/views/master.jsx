import View from '../libs/view'
import Navbar from '../components/nav/navbar'
import { browserHistory } from 'react-router'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

export default ({children, location}) => {
    window.scrollTo(0,0);
    let isHome = location.pathname === '/';

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
                showCards={isHome}
            />
            <ReactCSSTransitionGroup
                component="div"
                className="react-animate-main"
                transitionName="main-animate"
                transitionEnterTimeout={1500}
                transitionLeaveTimeout={1500}
            >
                {React.cloneElement(children, {
                    key: location.pathname
                })}
            </ReactCSSTransitionGroup>
        </div>
    );
}

// class Master extends React.Component {
//     componentWillUpdate() {
//         window.scrollTo(0,0);
//     }
//
//     render() {
//         let isHome = this.props.location.pathname === '/';
//         return (
//             <div>
//                 <Navbar
//                     header="DILLON JASON"
//                     navItems={
//                         [
//                             {name: "Education", to: "/Education"},
//                             {name: "Experience", to: "/Experience"},
//                             {name: "Skills", to: "/Skills"},
//                             {name: "Achievements", to: "/Achievements"}
//                         ]
//                     }
//                     showCards={isHome}
//                 />
//                 <ReactCSSTransitionGroup
//                     component="div"
//                     className="react-animate-main"
//                     transitionName="main-animate"
//                     transitionEnterTimeout={750}
//                     transitionLeaveTimeout={750}
//                 >
//                     <View className={isHome ? "menu-not-fixed" : ""}>
//                         {React.cloneElement(this.props.children, {
//                             key: this.props.location.pathname
//                         })}
//                     </View>
//                 </ReactCSSTransitionGroup>
//             </div>
//         );
//     }
// }
//
// export default Master;