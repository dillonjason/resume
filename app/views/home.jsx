import SummaryContainer from '../components/summary-container';
import HomeImage from '../images/home-image-2.jpg';

class Home extends React.Component {
    render() {
        return (
            <div>
                <SummaryContainer graphic={HomeImage}>
                    Career driven application developer dedicated to improving himself and those around him to achieve more productive and up to date workflows.  Excels at learning new skills and determining when and where to use them.
                </SummaryContainer>
            </div>
        );
    }
}

export default Home;