import { call, put, takeEvery, } from "redux-saga/effects"
import { ADD_ACTION, ADD_ACTION_SUCCESS, GET_ACTION } from "./actionTypes"

import { addActionSuccess, addActionFail, getActionSuccess, getActionFail } from "./action"

import { postAllAction, postModifyAction } from "../../../helpers/backend_helper"



function* fetchAction() {
    try {
        const response = yield call(postAllAction)
        if (response.success) {
            yield put(getActionSuccess(response.data))
        } else {
            yield put(getActionFail(response))
        }
    } catch (error) {
        yield put(getActionFail(error))
    }
}

function* modifyAction({ payload }) {

    try {
        const response = yield call(postModifyAction, payload)
        if (response.success) {
            yield put(addActionSuccess(response.data))
        } else {
            yield put(addActionFail(response))
        }
    } catch (error) {
        yield put(addActionFail(error))
    }
}

function* ActionSaga() {
    yield takeEvery(GET_ACTION, fetchAction)
    yield takeEvery(ADD_ACTION, modifyAction)
    yield takeEvery(ADD_ACTION_SUCCESS, fetchAction)
}
export default ActionSaga