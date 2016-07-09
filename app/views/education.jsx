import SummaryContainer from '../components/summary-container'
import Quote from '../components/quote'
import ContentList from '../components/content-list'
import Content from '../components/content'
import EducationImage from '../images/banners/education/education-image.jpg'
import CardList from '../components/card-list'
import Database from '../images/education-electives/database-flat.png'
import AI from '../images/education-electives/graph-flat.png'
import WebProgramming from '../images/education-electives/html-flat.png'

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
                            Bachelor of Science, Computer Science
                        </p>
                    </Content>
                    <Content
                        title="Interesting Electives"
                    >
                        <CardList
                            images={[Database, AI, WebProgramming]}
                        >
                            <div><strong>Database Design</strong></div>
                            <div><strong>Artificial Intelligence</strong></div>
                            <div><strong>Web Development</strong></div>
                        </CardList>
                    </Content>
                </ContentList>

            </div>
        );
    }
}

export default Education;