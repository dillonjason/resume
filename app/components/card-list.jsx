import Card from '../components/card'

class CardList extends React.Component {
    render() {
        return(
            <div className={"card-list-component pure-g " + this.props.className}>
                {this.props.children.map((child, index) => {
                    return(
                        <Card key={index}
                              className="pure-u-1 pure-u-md-1-2 pure-u-lg-1-3"
                              image={this.props.images[index]}
                        >
                            {child}
                        </Card>
                    );
                })}
            </div>
        );
    }
}

CardList.propTypes = {
    
};

CardList.defaultProps = {
    className: '',
    images:[]
};

export default CardList;