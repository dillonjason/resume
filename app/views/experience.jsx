import SummaryContainer from '../components/summary-container'
import Quote from '../components/quote'
import ContentList from '../components/content-list'
import Content from '../components/content'
import CardList from '../components/card-list'

class Experience extends React.Component {
    render() {
        return(
            <div>
                <SummaryContainer graphicClass="experience">
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
                        <CardList>
                            <div>Full stack development on most projects</div>
                            <div>Worked on multiple projects at the same time with tight deadlines</div>
                            <div>Worked in an Agile workspace</div>
                            <div>Set up and maintained ESRI Arcgis Server</div>
                            <div>Built web applications that utilized ESRI mapping services</div>
                            <div>Presented ideas and accomplishments to the entire team to help educate them and myself</div>
                            <div>Worked directly with clients to gather business requirements and to ensure that the product being delivered solved the issues they had</div>
                            <div>Worked with automation automation tools such as psake and roundhouse</div>
                            <div>Worked with front end task runners Grunt and WebPack to automate front end compiling and error warnings</div>
                            <div>Managed automatic deployments from TeamCity and Git</div>
                            <div>Supported old applications as well as wrote new applications from the ground up</div>
                        </CardList>
                    </Content>
                    <Content
                        title="Henrico County"
                        date="2013-2015"
                        subTitle="IT Specialist II"
                    >
                        <CardList>
                            <div>Redesign of entire Henrico Police Data Inquiry Web pages that included the use of SQL, ASP.Net, and jQuery</div>
                            <div>Designed and developed a customizable real time updating home page to be used by police officers to monitor officer discussions and crime</div>
                            <div>Designed and developed an intranet based library that included jQuery plugins, css, Web API controllers, images, and development standards that could be referenced by any new or old applications</div>
                            <div>Taught classes and wrote up documentation to train fellow employees on the use of javascript/jQuery, MVC, and Entity Framework</div>
                            <div>Developed and designed multiple CRUD based application that utilized MVC</div>
                            <div>Developed multiple mapping applications using ESRI/ArcGIS javascript api</div>
                            <div>Designed multiple database diagrams using SQL Server Management Studio</div>
                            <div>Set up and encouraged the use of Visual Studio Online for source control and Scrum based development</div>
                            <div>Worked with incorporating vendor hardware/software into current systems</div>
                            <div>Improved programs written using WPF</div>
                            <div>Setup a server NLB with Windows Server 2012 and prepared IIS 8 for first time use</div>
                            <div>Worked with a team to manage massive deployment that required code changes in over six different systems</div>
                            <div>Worked with RedMine</div>
                            <div>Worked with WordPress</div>
                            <div>Worked with an intern to teach him how our systems work and prepared him to develop in our environment</div>
                            <div>Worked directly with user in determining what they expected from the program and figuring out how they ran into bugs to quickly fix their issues</div>
                        </CardList>
                    </Content>

                    <Content
                        title="Virginia Commonwealth University"
                        date="2011-2012"
                        subTitle="Senior Design Project - CapTech"
                    >
                        <CardList>
                            <div>Designed auto chat bot for remote timesheet handling</div>
                            <div>Acquired software development team skills</div>
                            <div>Designed with test driven development</div>
                        </CardList>
                    </Content>

                    <Content
                        title="Faces of Hope"
                        date="2011-2012"
                        subTitle="Head Database Designer"
                    >
                        <CardList>
                            <div>Redesigned inefficient database</div>
                            <div>Worked with Microsoft Access</div>
                            <div>MySQL</div>
                        </CardList>
                    </Content>
                </ContentList>
            </div>
        );
    }
}

export default Experience;