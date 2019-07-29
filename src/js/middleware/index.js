import { ADD_MOVIE } from "../constants/action-types";
import {badMovie} from "../actions";
const forbiddenWords = ["spam", "money"];
export function forbiddenWordsMiddleware({ dispatch }) {
    return function(next) {
        return function(action) {
            // do your stuff
            if (action.type === ADD_MOVIE) {

                const foundWord = forbiddenWords.filter(word =>
                    action.payload.title.includes(word)
                );
                if (foundWord.length) {
                    return dispatch(badMovie(action.payload));
                }
            }
            return next(action);
        };
    };
}