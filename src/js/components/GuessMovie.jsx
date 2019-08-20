import React from "react";
import List from "./List.jsx";
import Errors from "./Errors.jsx";
import Form from "./Form.jsx";
import Posts from "./Posts.jsx";

const GuessMovie = () => (
    <div className="row mt-5">
        <div className="col-md-4 offset-md-1">
            <h2>Movies</h2>
            <List />
            <Errors />
            <Posts/>
        </div>
        <div className="col-md-4 offset-md-1">
            <h2>Add a new movie</h2>
            <Form />
        </div>
    </div>
);
export default GuessMovie;