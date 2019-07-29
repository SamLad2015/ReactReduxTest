import {ADD_MOVIE, BAD_MOVIE, REMOVE_ERROR} from "../constants/action-types";

export function addMovie(payload) {
    return { type: ADD_MOVIE, payload }
};

export function badMovie(payload) {
    return { type: BAD_MOVIE, payload }
};

export function removeError(payload) {
    return { type: REMOVE_ERROR, payload }
};