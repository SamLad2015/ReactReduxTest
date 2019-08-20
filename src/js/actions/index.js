import {
    ADD_MOVIE,
    BAD_MOVIE,
    DATA_LOADED,
    DATA_REQUESTED,
    DATA_YIELDED,
    REMOVE_ERROR,
    REMOVE_MOVIE
} from "../constants/action-types";

export function addMovie(payload) {
    return { type: ADD_MOVIE, payload }
}

export function removeMovie(payload) {
    return { type: REMOVE_MOVIE, payload }
}

export function badMovie(payload) {
    return { type: BAD_MOVIE, payload }
}

export function removeError(payload) {
    return { type: REMOVE_ERROR, payload }
}

export function getData() {
    return function (dispatch) {
       return fetch("https://technoverse-6bec.restdb.io/rest/movies" ,{
           method: 'get',
           headers: new Headers({
               'apikey': '5c91422ccac6621685acc07e'
           })
       })
            .then(response => response.json())
            .then(json => {
                dispatch({ type: DATA_LOADED, payload: json });
            });
    };
}

export function getSagaData() {
    return function (dispatch) {
        dispatch({type: DATA_REQUESTED});
    };
}