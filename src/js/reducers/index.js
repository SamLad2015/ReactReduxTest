import {
    ADD_MOVIE,
    BAD_MOVIE,
    DATA_LOADED,
    DATA_REQUESTED,
    DATA_YIELDED,
    REMOVE_ERROR,
    REMOVE_MOVIE
} from "../constants/action-types";

const initialState = {
    movies: [],
    errors: [],
    remoteArticles: []
};
function rootReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_MOVIE:
            return {
                ...state,
                movies: state.movies.concat(action.payload)
            };
        case REMOVE_MOVIE:
            return {
                ...state,
                movies: state.movies.filter((m) => action.payload.id !== m.id)
            };
        case  BAD_MOVIE:
            return {
                ...state,
                errors: state.errors.concat({...action.payload, message: 'bad movie title'})
            };
        case REMOVE_ERROR:
            return {
                ...state,
                errors: state.errors.filter((el) => action.payload.id !== el.id)
            };
        case DATA_LOADED:
            return {
                ...state,
                remoteArticles: state.remoteArticles.concat(action.payload)
            };
        case DATA_REQUESTED:
            return {
                ...state,
                remoteArticles: state.remoteArticles.concat(action.payload)
            };
        case DATA_YIELDED:
            return {
                ...state,
                remoteArticles: state.remoteArticles.concat(action.payload)
            };
        default:
            return state;
    }
}
export default rootReducer;