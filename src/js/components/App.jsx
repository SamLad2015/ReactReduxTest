import React from "react";
import List from "./List.jsx";
import Errors from "./Errors.jsx";
import PostsThunkExpm from "./PostsThunkExpm";
const App = () => (
    <div className="row mt-5">
        <div className="col-md-4 offset-md-1">
            <h2>Movies</h2>
            <List />
            <Errors />
            <PostsThunkExpm/>
        </div>
    </div>
);
export default App;