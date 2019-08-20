import {applyMiddleware, createStore, compose} from "redux";
import rootReducer from "../js/reducers";
import { forbiddenWordsMiddleware } from "../js/middleware";
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import apiSaga from "../js/sagas/api-saga";

const initialiseSagaMiddleware = createSagaMiddleware();

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer,
    storeEnhancers(applyMiddleware(forbiddenWordsMiddleware, initialiseSagaMiddleware, thunk))
);

initialiseSagaMiddleware.run(apiSaga);

export default store;