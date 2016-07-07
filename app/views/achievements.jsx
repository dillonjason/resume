import SummaryContainer from '../components/summary-container'
import AchievementsImage from '../images/achievements-image.jpg'
import Quote from '../components/quote'
import ContentList from '../components/content-list'
import Content from '../components/content'
import CardList from '../components/card-list'
import Card from '../components/card'
import ImageList from '../components/image-list'

import IfrisSearch from '../images/projects/ifris-15-search.png'
import IfrisDetail from '../images/projects/ifris-15-details.png'
import IfrisMap from '../images/projects/ifris-15-map.png'
import IfrisEasement from '../images/projects/ifris-easements.png'

import BfgLogin from '../images/projects/bfg-login.png'
import BfgDashboard from '../images/projects/bfg-dashboard.png'
import BfgForm from '../images/projects/bfg-form.png'
import BfgSearch from '../images/projects/bfg-search.png'

class Achievements extends React.Component {
    render() {
        return(
            <div>
                <SummaryContainer graphic={AchievementsImage}>
                    <Quote
                        quote="Happiness lies int he joy of achievement and the thrill of creative effort"
                        source="Franklin D. Roosevelt"
                    />
                </SummaryContainer>

                <ContentList>
                    <Content
                        title="Awards"
                    >
                        <CardList>
                            <div>
                                <div>
                                    <strong>Henrico Police TEMPO Dashboard</strong>
                                </div>
                                <div className="text-secondary">
                                    Feb 16, 2014
                                </div>

                                <p>
                                    Henrico County<br/>
                                    Acknowledgment by County Manager and Chief of Police
                                </p>
                            </div>
                            <div>
                                <div>
                                    <strong>Senior Design Expo</strong>
                                </div>
                                <div className="text-secondary">
                                    April 27, 2012
                                </div>

                                <p>
                                    VCU School of Engineering<br/>
                                    Excellence in Design
                                </p>
                            </div>
                        </CardList>
                    </Content>

                    <Content
                        title="IFRIS"
                        subTitle="Role: Support and Full Stack"
                    >
                        <ImageList>
                            <img src={IfrisSearch}/>
                            <img src={IfrisDetail}/>
                            <img src={IfrisMap}/>
                            <img src={IfrisEasement}/>
                        </ImageList>

                        <Card>
                            <div><strong>Summary</strong></div>
                            Application to allow foresters to map tracts by drawing boundaries and associate the tract with activities.
                            As well as create easements to manage forest preservation around the state of Virginia.
                        </Card>

                        <CardList>
                            <div>Introduced to Openlayers</div>
                            <div>Introduced to Coffee JS</div>
                            <div>Introduced to PetaPoco</div>
                            <div>Project is around 10 years old, had to learn to work with webforms and MVC in the same application</div>
                            <div>Great client interaction</div>
                        </CardList>
                    </Content>

                    <Content
                        title="WILMA"
                        subTitle="Role: Backend Developer"
                    >
                        <Card>
                            <div><strong>Summary</strong></div>
                             Application needed to be designed such that users can manage data through an external tool (ArcMap) and needs to have
                            a simple and fast API for mobile support.
                        </Card>

                        <CardList>
                            <div>Inherited application halfway through development</div>
                            <div>PetaPoco</div>
                            <div>Very ESRI intensive</div>
                            <div>Web API for Mobile App support</div>
                            <div>Learned to develop a database with the understanding of the client's needs</div>
                        </CardList>
                    </Content>

                    <Content
                        title="BFG"
                        subTitle="Role: Frontend Developer"
                    >
                        <ImageList>
                            <img src={BfgLogin}/>
                            <img src={BfgDashboard}/>
                            <img src={BfgForm}/>
                            <img src={BfgSearch}/>
                        </ImageList>

                        <Card>
                            <div><strong>Summary</strong></div>
                            Backend had been completed by another company.
                            The goal of this project was to develop a modern front end single-paged application.
                        </Card>

                        <CardList>
                            <div>Introduced to Webpack</div>
                            <div>Introduced to React</div>
                            <div>Introduced to Redux</div>
                            <div>Work closely with backend team to work with API</div>
                        </CardList>
                    </Content>

                    <Content
                        title="TEMPO"
                        subTitle="Role: Full Stack"
                    >
                        <Card>
                            <div><strong>Summary</strong></div>
                            Develop a web application to allow police officers to have a customizable dashboard that
                            allows them to see information that is important to them.  Also build multiple query pages
                            to allow users to quickly research all stored data.
                        </Card>

                        <CardList>
                            <div>Introduced to jQuery</div>
                            <div>Introduced to Bootstrap</div>
                            <div>First Complete application built</div>
                            <div>Work directly with users to determine what was most beneficial to them</div>
                        </CardList>
                    </Content>
                </ContentList>
            </div>
        );
    }
}

export default Achievements;