import { call, put, takeEvery, } from "redux-saga/effects"
import { ADD_GROUP, ADD_GROUP_SUCCESS, GET_GROUP } from "./actionTypes"

import { addGroupSuccess, addGroupFail, getGroupSuccess, getGroupFail } from "./action"

import { postAllGroup, postModifyGroup } from "../../../helpers/backend_helper"




function* fetchGroup() {
    try {
        const response = yield call(postAllGroup)
        if (response.success) {
            yield put(getGroupSuccess(response.data))
        } else {
            yield put(getGroupFail(response))
        }
    } catch (error) {
        yield put(getGroupFail(error))
    }
}

function* modifyGroup({ payload }) {

    try {
        const response = yield call(postModifyGroup, payload)
        if (response.success) {
            yield put(addGroupSuccess(response.data))
        } else {
            yield put(addGroupFail(response))
        }
    } catch (error) {
        yield put(addGroupFail(error))
    }
}

function* GroupSaga() {
    yield takeEvery(GET_GROUP, fetchGroup)
    yield takeEvery(ADD_GROUP, modifyGroup)
    yield takeEvery(ADD_GROUP_SUCCESS, fetchGroup)
}
export default GroupSaga