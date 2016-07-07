class SummaryContainer extends React.Component {
    render() {
        let style = {
            "backgroundImage": "url('" + this.props.graphic + "')"
        };
        return(
            <div className="summary-container">
                <div className={"graphic " + (this.props.alwaysShowGraphic ? "" : "hide-md")} style={style} >
                </div>
                <div className={"text " + (this.props.alwaysShowGraphic ? "no-float" : "")}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

SummaryContainer.defaultProps = {
  alwaysShowGraphic: true
};

export default SummaryContainer;