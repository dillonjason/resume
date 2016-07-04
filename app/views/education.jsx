import SummaryContainer from '../components/summary-container'
import Quote from '../components/quote'
import ContentList from '../components/content-list'
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

                <ContentList>
                    <Content
                        contentClass={true}
                        title="Virginia Commonwealth University"
                        subTitle="Richmond, VA"
                    >
                        <p>
                            Graduated August 2012<br/>
                            Bachelor of Science, Computer Science<br/>
                            Major GPA: 3.25     GPA: 2.85
                        </p>
                    </Content>
                    <Content
                        contentClass={true}
                        title="Interesting Electives"
                    >
                        <ul>
                            <li>Database Design</li>
                            <li>Artificial Intelligence</li>
                            <li>Web Development</li>
                        </ul>
                    </Content>
                </ContentList>

            </div>
        );
    }
}

export default Education;