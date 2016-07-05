class Card extends React.Component {
    render() {
        return(
            <div className={"card-component " + this.props.className}>
                <div className="card">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

Card.defaultProps = {
    className: '',
    image: ''
};

export default Card;