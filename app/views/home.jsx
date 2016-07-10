import View from '../libs/view'
import SummaryContainer from '../components/summary-container';

class Home extends React.Component {
    render() {
        return (
            <View className="menu-not-fixed">
                <SummaryContainer graphicClass="home" alwaysShowGraphic={false}>
                    Career driven application developer dedicated to improving himself and those around him to achieve more productive and up to date workflows.  Excels at learning new skills and determining when and where to use them.
                </SummaryContainer>
            </View>
        );
    }
}

export default Home;