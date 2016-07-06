import SummaryContainer from '../components/summary-container'
import SkillsImage from '../images/skills-image.jpg'
import Quote from '../components/quote'
import ContentList from '../components/content-list'
import Content from '../components/content'
import CardList from '../components/card-list'

import ASPLogo from '../images/logos/asplogo.png'
import BackboneLogo from '../images/logos/backbone-logo.png'
import CLogo from '../images/logos/c-logo.png'
import ES6Logo from '../images/logos/es6-logo.jpg'
import JavaLogo from '../images/logos/java-logo.png'
import jQueryLogo from '../images/logos/jquery-logo.png'
import jsLogo from '../images/logos/js-logo.png'
import MarionetteLogo from '../images/logos/marionette-logo.png'
import MVCLogo from '../images/logos/mvc-logo.png'
import ReactLogo from '../images/logos/react-logo.png'
import SassLogo from '../images/logos/sass-logo.png'
import SQLLogo from '../images/logos/sql-logo.jpg'
import VBNetLogo from '../images/logos/vnet-logo.jpg'


class Skills extends React.Component {
    render() {
        return(
            <div>
                <SummaryContainer graphic={SkillsImage}>
                    <Quote
                        quote="I have forgotten much that I thought I knew, and learned again much that I had forgotten."
                        source="Gandalf"
                    />
                </SummaryContainer>

                <ContentList>
                    <Content
                        title="Programming Languages and Frameworks"
                    >
                        <CardList
                            horizontalImage={true}
                            images={[
                                ASPLogo,
                                MVCLogo,
                                CLogo,
                                VBNetLogo,
                                jsLogo,
                                jQueryLogo,
                                ES6Logo,
                                ReactLogo,
                                MarionetteLogo,
                                BackboneLogo,
                                SassLogo,
                                SQLLogo,
                                JavaLogo
                            ]}
                        >
                            <div>ASP.Net</div>
                            <div>MVC</div>
                            <div>C#</div>
                            <div>VB</div>
                            <div>JavaScript</div>
                            <div>jQuery</div>
                            <div>ES6</div>
                            <div>React</div>
                            <div>Marionette</div>
                            <div>Backbone</div>
                            <div>CSS/SASS</div>
                            <div>T-SQL</div>
                            <div>Java</div>
                        </CardList>
                    </Content>

                    <Content
                        title="ORMs"
                    >
                    </Content>

                    <Content
                        title="Tools"
                    >
                    </Content>

                    <Content
                        title="Teamwork and Communication"
                    >
                    </Content>
                </ContentList>
            </div>
        );
    }
}

export default Skills;