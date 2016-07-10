import View from '../libs/view'
import SummaryContainer from '../components/summary-container';
import ContactInfo from '../components/contact-info';

class Home extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            showContact: false
        };
    }
    
    onShowContactClick = () => {
        this.setState({'showContact': !this.state.showContact});
    };
    
    render() {
        return (
            <View className="menu-not-fixed">
                <ContactInfo show={this.state.showContact} onCloseClick={this.onShowContactClick}/>
                <SummaryContainer graphicClass="home" alwaysShowGraphic={false}>
                    <div>
                        Career driven application developer dedicated to improving himself and those around him to achieve more productive and up to date workflows.  Excels at learning new skills and determining when and where to use them.
                    </div>
                    <div className="clear-fix"></div>
                    <div className="after-clear-fix">
                        <div className="pull-right">
                            <button type="button" className="pure-button accent-button" onClick={this.onShowContactClick}>
                                Contact Info
                            </button>
                        </div>
                    </div>
                </SummaryContainer>
            </View>
        );
    }
}

export default Home;