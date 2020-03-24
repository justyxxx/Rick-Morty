import { put } from "redux-saga/effects";
import instance from "../../axios-rick-morty";
import * as actions from "../actions";

export function* listProcessSaga(action) {
    yield put(actions.listInit());
    try {
        const response = yield instance.get(action.page);
        yield put(actions.listSuccess(response.data))
    }
    catch(error) {
        yield put(actions.listFail(error.message));
    }
}
export function* autoInitListSaga() {
    yield put(actions.listProcess());
}