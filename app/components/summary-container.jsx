class SummaryContainer extends React.Component {
    render() {
        let style = {
            "backgroundImage": "url('" + this.props.graphic + "')"
        };
        return(
            <div className="summary-container">
                <div className="graphic" style={style} >
                </div>
                <div className="text">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default SummaryContainer;