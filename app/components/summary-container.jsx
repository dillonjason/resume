class SummaryContainer extends React.Component {
    render() {
        let style = {};

        if (this.props.graphic)
            style = {
                "backgroundImage": "url('" + this.props.graphic + "')"
            };
        let graphicClasses = (this.props.alwaysShowGraphic ? "" : "hide-md") + " " +
            (this.props.graphicClass ? this.props.graphicClass : "");
        return(
            <div className="summary-container">
                <div className={"graphic " + graphicClasses} style={style} >
                </div>
                <div className={"text " + (this.props.alwaysShowGraphic ? "no-float" : "")}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

SummaryContainer.propTypes = {
    graphic: React.PropTypes.string,
    graphicClass: React.PropTypes.string,
    alwaysShowGraphic: React.PropTypes.bool
};

SummaryContainer.defaultProps = {
  alwaysShowGraphic: true
};

export default SummaryContainer;