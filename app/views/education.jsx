import SummaryContainer from '../components/summary-container'
import Quote from '../components/quote'
import Content from '../components/content'
import EducationImage from '../images/education-image.jpg'

class Education extends React.Component {
    render() {
        return(
            <div>
                <SummaryContainer graphic={EducationImage}>
                    <Quote
                        quote="I am always doing that which I cannot do, in order that I may learn how to do it."
                        source="Pablo Picasso"
                    />
                </SummaryContainer>

                <Content
                    contentClass={true}
                    title="Virginia Commonwealth University"
                    date="July 2016"
                    subTitle="Richmond, VA"
                >
                    <p>
                        Graduated August 2012<br/>
                        Bachelor of Science, Computer Science<br/>
                        Major GPA: 3.25     GPA: 2.85
                    </p>
                </Content>
            </div>
        );
    }
}

export default Education;