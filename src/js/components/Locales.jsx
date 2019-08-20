import React, { Component } from "react";
import Form from "./Form.jsx";
import {connect} from "react-redux";
import {getLocales} from "../actions";


export class Locales extends Component {
    componentDidMount() {
        // calling the new action creator
        this.props.getLocales();
    }
    render() {
        return (
            <div className="row mt-5">
                <div className="col-md-4 offset-md-1">
                    <h2>Locales</h2>
                    <ul className="list-group list-group-flush">
                        {this.props.locales.map(el => (
                            <li className="list-group-item" key={el.id}>
                                {el.code}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="col-md-4 offset-md-1">
                    <h2>Add a new Movie</h2>
                    <Form />
                </div>
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        locales: state.remoteLocales.slice(0, 10)
    };
}

export default connect(
    mapStateToProps,
    { getLocales }
)(Locales);