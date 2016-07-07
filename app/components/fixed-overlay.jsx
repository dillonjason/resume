class FixedOverlay extends React.Component {
    componentWillMount() {
        document.body.classList.add('no-scroll');
    }

    componentWillUnmount() {
        document.body.classList.remove('no-scroll');
    }

    render(){
        return(
            <div className={"fixed-overlay-component " + (this.props.belowMenu ? "below-menu" : "")}
                    onClick={this.props.onClick}>
                {this.props.children}
            </div>
        );
    }
}

FixedOverlay.propTypes = {
    onClick: React.PropTypes.func,
    belowMenu: React.PropTypes.bool
};

FixedOverlay.defaultProps = {
    onClick: f => f,
    belowMenu: false
};

export default FixedOverlay;