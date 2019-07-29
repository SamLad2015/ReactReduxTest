import React, { Component } from "react";
import { connect } from "react-redux";
import {removeError} from "../actions";
const mapStateToProps = state => {
    return { errors: state.errors };
};
const mapDispatchToProps = (dispatch) => {
    return {
        removeError: id => dispatch(removeError(id))
    };
};
class ErrorControl extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e){
        e.preventDefault();
        const error = {
            id: e.target.parentElement.id
        };
        this.props.removeError(error);
    }
    render() {
        return (
            <ul className="list-group list-group-flush">
                {(this.props.errors || []).map(el => (
                    <li className="list-group-item alert alert-danger" id={el.id} key={el.id}>
                        {el.message}
                        <span aria-hidden="true" onClick={this.handleClick}>&times;</span>
                    </li>
                ))}
             </ul>
        );
    }
}

const Errors = connect(mapStateToProps, mapDispatchToProps)(ErrorControl);
export default Errors;