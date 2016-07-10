import Card from '../components/card'
import FixedOverlay from '../components/fixed-overlay'
import ReactGA from 'react-ga'

class Modal extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            delay: null
        };
    }

    componentDidMount() {
        this.toggleModal(this.props);
    }

    componentWillReceiveProps(nextProps) {
        this.toggleModal(nextProps);
    }

    toggleModal = (props) => {
        if (this.state.delay) {
            window.clearTimeout(this.state.delay);
        }

        if (props.show) {
            ReactGA.modalview(props.title.replace(/\s/g, '') || 'UnknownModalViewed');
            let delay = window.setTimeout(() => {
                this.refs.modal.classList.add('show');
            }, 250);

            this.setState({'delay': delay});
        }
        else {
            this.refs.modal.classList.remove('show');
        }
    };

    render() {
        return (
            <div className="modal-component" ref="modal">
                {this.props.show &&
                    <FixedOverlay onClick={this.props.onCloseClick} stopPropagation={true}>
                        <Card image={this.props.graphic} imageHeight={230} >
                            {this.props.title &&
                                <h3>{this.props.title}</h3>
                            }
                            {this.props.children}
                            <div className="button">
                                <div className="pull-right">
                                    <button type="button" className="pure-button accent-button" onClick={this.props.onCloseClick}>Close</button>
                                </div>
                            </div>
                        </Card>
                    </FixedOverlay>
                }
            </div>
        )
    }
}

Modal.propTypes = {
    show: React.PropTypes.bool.isRequired,
    graphic: React.PropTypes.string,
    onCloseClick: React.PropTypes.func.isRequired,
    title: React.PropTypes.string
};

Modal.defaultProps = {
    graphic: '',
    title: ''
};

export default Modal;