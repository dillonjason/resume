import SummaryContainer from '../components/summary-container';
import HomeImage from '../images/banners/home/home-image.jpg';

class Home extends React.Component {
    render() {
        return (
            <div>
                <SummaryContainer graphic={HomeImage} alwaysShowGraphic={false}>
                    Career driven application developer dedicated to improving himself and those around him to achieve more productive and up to date workflows.  Excels at learning new skills and determining when and where to use them.
                </SummaryContainer>
            </div>
        );
    }
}

export default Home;