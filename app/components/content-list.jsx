import Content from '../components/content'
import Separator from '../components/separator'

class ComponentList extends React.Component {
    render() {
        return(
            <div className="content-list-component content">
                {this.props.children.map((child, index) => {
                    let showSeparator = this.props.children.length - 1 > index;
                    return (
                        <div key={index}>
                            {child}
                            {showSeparator &&
                                <Separator />
                            }
                        </div>
                    );
                })}
            </div>
        );
    }
}

ComponentList.propTypes = {
    children: (props, propName, componentName) => {
        let prop = props[propName];
        if (React.Children.count(prop) === 0 || prop.find(item => item.type !== Content) !== undefined)
            return new Error('`' + componentName + '`' + ' should have at least child and must be of type Content')
    }
};

export default ComponentList;