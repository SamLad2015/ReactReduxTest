import {ADD_MOVIE, BAD_MOVIE, REMOVE_ERROR} from "../constants/action-types";

const initialState = {
    movies: [],
    errors: []
};
function rootReducer(state = initialState, action) {
    if (action.type === ADD_MOVIE) {
        return{
          ...state,
            movies: state.movies.concat(action.payload)
        };
    }
    if (action.type === BAD_MOVIE) {
        return{
            ...state,
            errors: state.errors.concat({...action.payload, message: 'bad movie title'})
        };
    }
    if (action.type === REMOVE_ERROR) {
        return{
            ...state,
            errors: state.errors.filter((el) => action.payload.id !== el.id)
        };
    }
    return state;
};
export default rootReducer;