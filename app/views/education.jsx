import SummaryContainer from '../components/summary-container'
import Quote from '../components/quote'
import ContentList from '../components/content-list'
import Content from '../components/content'
import EducationImage from '../images/education-image.jpg'
import CardList from '../components/card-list'

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
                        title="Interesting Electives"
                    >
                        <CardList>
                            <div>Database Design</div>
                            <div>Artificial Intelligence</div>
                            <div>Web Development</div>
                        </CardList>
                    </Content>
                </ContentList>

            </div>
        );
    }
}

export default Education;