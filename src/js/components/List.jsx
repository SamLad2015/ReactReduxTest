import React, { Component } from "react";
import { connect } from "react-redux";
import { removeMovie } from "../actions";
const mapStateToProps = state => {
    return { movies: state.movies };
};
const mapDispatchToProps = (dispatch) => {
    return {
        removeMovie: id => dispatch(removeMovie(id))
    };
};
class MovieControl extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e){
        e.preventDefault();
        const movie = {
            id: e.target.parentElement.id
        };
        this.props.removeMovie(movie);
    }
    render() {
        return (
            <ul className="list-group list-group-flush">
                {this.props.movies.map(el => (
                    <li className="list-group-item" id={el.id} key={el.id}>
                        {el.title}
                        <span aria-hidden="true" onClick={this.handleClick}>&times;</span>
                    </li>
                ))}
            </ul>
        );
    }
}
const List = connect(mapStateToProps, mapDispatchToProps)(MovieControl);
export default List;