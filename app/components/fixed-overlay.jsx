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
                <div onClick={(e) => {if (this.props.stopPropagation) {e.stopPropagation()}}}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

FixedOverlay.propTypes = {
    onClick: React.PropTypes.func,
    belowMenu: React.PropTypes.bool,
    stopPropagation: React.PropTypes.bool
};

FixedOverlay.defaultProps = {
    onClick: f => f,
    belowMenu: false,
    stopPropagation: false
};

export default FixedOverlay;