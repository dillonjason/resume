import Modal from '../components/modal'
import MyPicture from '../images/banners/home/home-image-md.jpg'

class ContactInfo extends React.Component {
    render() {
        return(
            <Modal
                title="Contact Me"
                graphic={MyPicture}
                onCloseClick={this.props.onCloseClick}
                show={this.props.show}
            >
                <p>
                    Fill this in with a little info about me.
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
            </Modal>
        );
    }
}

ContactInfo.propTypes = {
    onCloseClick: React.PropTypes.func.isRequired,
    show: React.PropTypes.bool.isRequired
};

export default ContactInfo;