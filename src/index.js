import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./store/index";
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
import App from "./js/components/App.jsx";
import Locales from "./js/components/Locales";
// if you're in create-react-app import the files as:
// import store from "./js/store/index";
// import App from "./js/components/App.jsx";
const routing = (
    <Provider store={store}>
        <Router>
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <ul className="navbar-nav mr-auto">
                        <li><Link to={'/'} className="nav-link"> Home </Link></li>
                        <li><Link to={'/locales'} className="nav-link">Locales</Link></li>
                    </ul>
                </nav>
                <Switch>
                    <Route exact path="/" component={App} />
                    <Route path="/locales" component={Locales} />
                </Switch>
            </div>
        </Router>
    </Provider>
);

render(routing, document.getElementById("root"));