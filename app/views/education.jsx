import SummaryContainer from '../components/summary-container'
import EducationImage from '../images/education-image.jpg'

class Education extends React.Component {
    render() {
        return(
            <div>
                <SummaryContainer graphic={EducationImage}>
                    Some education stuffs
                </SummaryContainer>

                <div className="content">
                    Some crazy stuff is gonna happen here.
                </div>
            </div>
        );
    }
}

export default Education;