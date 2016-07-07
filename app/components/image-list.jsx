import FixedOverlay from '../components/fixed-overlay'

class ImageList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            largeImage: false
        }
    }

    toggleImage = (index) => {
        this.setState({largeImage: index});
    };

    render() {
        return(
            <div className="image-list-component">
                {this.state.largeImage !== false &&
                    <FixedOverlay onClick={() => this.toggleImage(false)}>{this.props.children[this.state.largeImage]}</FixedOverlay>
                }
                <div className="pure-g">
                    {this.props.children.map((image, index) => {
                        return(
                            <div key={index} className="pure-u-1 pure-u-md-1-2 pure-u-lg-1-3">
                                <div className="image-container" onClick={() => this.toggleImage(index)}>
                                    {image}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}

ImageList.propTypes = {
  children: (props, propName, componentName) => {
        let prop = props[propName];
        if (React.Children.count(prop) === 0 || prop.find(item => item.type !== 'img') !== undefined)
            return new Error('`' + componentName + '`' + ' should have at least child and must be of type img')
    }
};

export default ImageList;