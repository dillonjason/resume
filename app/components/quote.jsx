class Quote extends React.Component {
    render() {
        return(
            <div className="quote-component">
                <p>"{this.props.quote}"</p>
                <strong>- {this.props.source}</strong>
                <div className="clear-fix"></div>
            </div>
        );
    }
}

Quote.propTypes = {
    quote: React.PropTypes.string.isRequired,
    source: React.PropTypes.string.isRequired
};

export default Quote;