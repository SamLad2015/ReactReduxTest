import React from "react";
import { connect } from "react-redux";
const mapStateToProps = state => {
    return { movies: state.movies };
};
const ConnectedList = ({ movies }) => (
    <ul className="list-group list-group-flush">
        {movies.map(el => (
            <li className="list-group-item" key={el.id}>
                {el.title}
            </li>
        ))}
    </ul>
);
const List = connect(mapStateToProps)(ConnectedList);
export default List;