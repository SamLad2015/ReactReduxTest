import React, { Component } from "react";
import { connect } from "react-redux";
import { getSagaData } from "../actions/index";

export class Posts extends Component {
    componentDidMount() {
        // calling the new action creator
        this.props.getSagaData();
    }
    render() {
        return (
            <ul className="list-group list-group-flush">
                {this.props.articles.map(el => (
                    <li className="list-group-item" key={el.id}>
                        {el.title}
                    </li>
                ))}
            </ul>
        );
    }
}

function mapStateToProps(state) {
    return {
        articles: state.remoteArticles.slice(0, 10)
    };
}

export default connect(
    mapStateToProps,
    { getSagaData }
)(Posts);