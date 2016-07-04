class Content extends React.Component {
    render() {
        const { title, date, subTitle, contentClass } = this.props;

        return(
            <div className={(contentClass ? "content" : "") + " content-component"}>
                <div className="title-container pure-g">
                    <div className={"title " + (date ? "pure-u-2-3" : "pure-u-1")}>{title}</div>
                    {date &&
                        <div className="date pure-u-1-3">{date}</div>
                    }
                </div>
                {subTitle &&
                    <div className="subtitle">{subTitle}</div>
                }
                <div className="main-content">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

Content.propTypes = {
    title: React.PropTypes.string.isRequired,
    date: React.PropTypes.string,
    subTitle: React.PropTypes.string,
    contentClass: React.PropTypes.bool
};

Content.defaultProps = {
    date: false,
    subTitle: false,
    contentClass: false
};

export default Content;