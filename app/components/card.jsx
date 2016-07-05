class Card extends React.Component {
    render() {
        let style = {
            "backgroundImage": "url('" + this.props.image + "')",
            "height": this.props.imageHeight + "px"
        };

        return(
            <div className={"card-component " + this.props.className}>

                <div className="card">
                    {this.props.image &&
                        <div className="graphic" style={style}>
                        </div>
                    }
                    {this.props.children}
                </div>
            </div>
        );
    }
}

Card.defaultProps = {
    className: '',
    image: '',
    imageHeight: 150
};

export default Card;