import { takeLatest, call, put } from "redux-saga/effects";
import {API_ERRORED, DATA_REQUESTED, DATA_YIELDED} from "../constants/action-types";
export default function* watcherSaga() {
    yield takeLatest(DATA_REQUESTED, workerSaga);
}
function* workerSaga() {
    try {
        const payload = yield call(getSagaData);
        yield put({ type: DATA_YIELDED, payload });
    } catch (e) {
        yield put({ type: API_ERRORED, payload: e });
    }
}

function getSagaData(dispatch) {
    return fetch("https://jsonplaceholder.typicode.com/posts").then(response =>
        response.json()
    );
}