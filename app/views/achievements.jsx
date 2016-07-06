import SummaryContainer from '../components/summary-container'
import AchievementsImage from '../images/achievements-image.jpg'
import Quote from '../components/quote'
import ContentList from '../components/content-list'
import Content from '../components/content'
import CardList from '../components/card-list'

class Achievements extends React.Component {
    render() {
        return(
            <div>
                <SummaryContainer graphic={AchievementsImage}>
                    <Quote
                        quote="The best solution to a problem is usually the easiest one..."
                        source="GLaDOS"
                    />
                </SummaryContainer>
            </div>
        );
    }
}

export default Achievements;