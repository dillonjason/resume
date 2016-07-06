class Card extends React.Component {
    render() {
        let style = {
            "backgroundImage": "url('" + this.props.image + "')",
            "height": (this.props.horizontalImage ? 75 : this.props.imageHeight) + "px"
        };

        return(
            <div className={"card-component " + this.props.className}>

                <div className={"card " + (this.props.horizontalImage ? "horizontal" : "")}>
                    {this.props.image &&
                        <div className="graphic" style={style}>
                        </div>
                    }
                    <div className="child">
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}

Card.defaultProps = {
    className: '',
    image: '',
    imageHeight: 150,
    horizontalImage: false
};

export default Card;