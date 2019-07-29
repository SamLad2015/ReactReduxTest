import {applyMiddleware, createStore, compose} from "redux";
import rootReducer from "../js/reducers";
import { forbiddenWordsMiddleware } from "../js/middleware";

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer,
    storeEnhancers(applyMiddleware(forbiddenWordsMiddleware))
);
export default store;