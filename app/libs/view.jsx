// Wrapper class for all views

class View extends React.Component {
    render() {
        return(
            <div className={"view " + this.props.className}>
                <div className="view-animation"></div>
                {this.props.children}
            </div>
        );
    }
}

View.propTypes = {
    className: React.PropTypes.string
};

View.defaultProps = {
    className: ""
};

export default View;