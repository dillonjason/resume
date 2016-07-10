import Modal from '../components/modal'
import MyPicture from '../images/banners/home/home-image-md.jpg'

class ContactInfo extends React.Component {
    render() {
        return(
            <Modal
                title="About Me"
                graphic={MyPicture}
                onCloseClick={this.props.onCloseClick}
                show={this.props.show}
            >
                <p>
                    Welcome to my webpage!<br/>
                    My name is Dillon Jason, a full stack developer with a slight bit more interest in front end work.
                </p>

                <p>
                    I am very passionate about my work and strive to continue learning new and exciting things in the
                    field of web development.  I have recently become very impressed with a React, Redux, Webpack, SASS, and
                    PostCSS development stack.  I believe that code should be simple to read and follow and modularized
                    for increased reusability.  There are many different design principles out there, but I find these two
                    concepts to be the primary foundation for almost all of them.
                </p>

                <p>
                    In my free time I enjoy working on new projects, playing hours of video games, and getting excited
                    about new gadgets and gizmos.
                </p>

                <p>
                    In the past year I have been exposed to a lot of new technologies but haven't always had the time at work to try them out,
                    so I often find myself working on little side projects.  Most recently I have worked on refining my knowledge of
                    React and Webpack with this site!
                </p>

                <p>
                    The first thing I did after getting a "real" job out of college was build a gaming PC.  I have put an unhealthy amount of hours
                    in the Dark Souls series, Skyrim, Civilization, Fallout, and many more.  I just picked up Stellaris and Overwatch
                    and am excited to see how fun they are!  Feel free to send me any email or friend me on Steam (djasuar)!
                </p>

                <p>
                    I'm a pretty big fan of Android, so I like to keep up on all the stuff they release (Google I/O is like Christmas to me).
                    I think it's incredible how dramatically technology and the internet can change our lives so I love to get all the latest
                    info on all the new and incredible things coming out.
                </p>

                <div className="pure-g">
                    <div className="pure-u-1 pure-u-sm-1-2">
                        <strong>Phone Number</strong>
                        <p>540-645-8629</p>
                    </div>

                    <div className="pure-u-1 pure-u-sm-1-2">
                        <strong>Email</strong>
                        <p><a href="mailto:dillon.jason123@gmail.com">dillon.jason123@gmail.com</a></p>
                    </div>
                </div>

                <div className="pure-g">
                    <div className="pure-u-1 pure-u-sm-1-2">
                        <strong>Resume</strong>
                        <p><a href="https://docs.google.com/document/d/1EGVpwsN0wJ0QmKNCvWe3YGzkylXkTMUoc6hnO5cRuAQ/edit?usp=sharing">View in Google Docs</a></p>
                    </div>

                    <div className="pure-u-1 pure-u-sm-1-2">
                        <strong>GitHub</strong>
                        <p><a href="https://github.com/dillonjason">Check out some of my work</a></p>
                    </div>
                </div>
            </Modal>
        );
    }
}

ContactInfo.propTypes = {
    onCloseClick: React.PropTypes.func.isRequired,
    show: React.PropTypes.bool.isRequired
};

export default ContactInfo;