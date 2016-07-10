import View from '../libs/view'
import SummaryContainer from '../components/summary-container'
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

import EFLogo from '../images/logos/ef-logo.jpg'
import ESRILogo from '../images/logos/esri-logo.png'
import GitLogo from '../images/logos/git-logo.png'
import GruntLogo from '../images/logos/grunt-logo.png'
import NodeLogo from '../images/logos/node-logo.jpg'
import PetaPocoLogo from '../images/logos/petapoco-logo.png'
import SVNLogo from '../images/logos/svn-logo.png'
import TFSLogo from '../images/logos/tfs-logo.jpg'
import WebpackLogo from '../images/logos/webpack-logo.png'


class Skills extends React.Component {
    render() {
        return(
            <View>
                <SummaryContainer graphicClass="skills">
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
                        <CardList
                            horizontalImage={true}
                            images={[
                                EFLogo,
                                PetaPocoLogo
                            ]}
                        >
                            <div>Entity Framework</div>
                            <div>PetaPoco</div>
                        </CardList>

                    </Content>

                    <Content
                        title="Tools"
                    >
                        <CardList
                            horizontalImage={true}
                            images={[
                                GitLogo,
                                SVNLogo,
                                TFSLogo,
                                NodeLogo,
                                GruntLogo,
                                WebpackLogo,
                                ESRILogo
                            ]}
                        >
                            <div>Git</div>
                            <div>SVN</div>
                            <div>TFS</div>
                            <div>Node.js</div>
                            <div>Grunt</div>
                            <div>Webpack</div>
                            <div>Openlayers/ESRI JS API</div>
                        </CardList>

                    </Content>

                    <Content
                        title="Teamwork and Communication"
                    >
                        <CardList>
                            <div>Years of experience dealing with multitudes of direct customer communication/interaction</div>
                            <div>Listen to everyone’s opinions and never reject any idea</div>
                            <div>Realize when other team members may need some help understanding a concept or idea</div>
                            <div>Prepared to be wrong when showed the best way by someone else</div>
                        </CardList>
                    </Content>
                </ContentList>
            </View>
        );
    }
}

export default Skills;