class Separator extends React.Component {
    render() {
        let style = {
            height: this.props.height.toString() + "px"
        };

        return(
            <div className={"separator " + (this.props.isLight ? "light" : "")} style={style}></div>
        );
    }
}

Separator.propTypes = {
    height: React.PropTypes.number,
    isLight: React.PropTypes.bool
};

Separator.defaultProps = {
    height: 1,
    isLight: false
};

export default Separator;