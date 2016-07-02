// Wrapper class for all views

class View extends React.Component {
    render() {
        return(
            <div className="view">
                {this.props.children}
            </div>
        );
    }
}

export default View;