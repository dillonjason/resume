import SummaryContainer from '../components/summary-container'
import ExpImage from '../images/work-image.jpg'
import Quote from '../components/quote'
import ContentList from '../components/content-list'
import Content from '../components/content'

class Experience extends React.Component {
    render() {
        return(
            <div>
                <SummaryContainer graphic={ExpImage}>
                    <Quote
                        quote="The best solution to a problem is usually the easiest one..."
                        source="GLaDOS"
                    />
                </SummaryContainer>

                <ContentList>
                    <Content
                        title="Timmons Group"
                        date="2015-Current"
                        subTitle="Enterprise GIS Application Developer"
                    >
                        <p>
                        </p>
                    </Content>
                    <Content
                        title="Henrico County"
                        date="2013-2015"
                        subTitle="IT Specialist II"
                    >
                        <p>
                        </p>
                    </Content>
                </ContentList>
            </div>
        );
    }
}

export default Experience;