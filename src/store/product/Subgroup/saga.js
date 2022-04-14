import { call, put, takeEvery, } from "redux-saga/effects"
import { ADD_SUBGROUP, ADD_SUBGROUP_SUCCESS, GET_SUBGROUP } from "./actionTypes"

import { addSubgroupSuccess, addSubgroupFail, getSubgroupSuccess, getSubgroupFail } from "./action"

import { postAllSubgroup, postModifySubgroup } from "../../../helpers/backend_helper"




function* fetchSubgroup() {
    try {
        const response = yield call(postAllSubgroup)
        if (response.success) {
            yield put(getSubgroupSuccess(response.data))
        } else {
            yield put(getSubgroupFail(response))
        }
    } catch (error) {
        yield put(getSubgroupFail(error))
    }
}

function* modifySubgroup({ payload }) {

    try {
        const response = yield call(postModifySubgroup, payload)
        if (response.success) {
            yield put(addSubgroupSuccess(response.data))
        } else {
            yield put(addSubgroupFail(response))
        }
    } catch (error) {
        yield put(addSubgroupFail(error))
    }
}

function* SubgroupSaga() {
    yield takeEvery(GET_SUBGROUP, fetchSubgroup)
    yield takeEvery(ADD_SUBGROUP, modifySubgroup)
    yield takeEvery(ADD_SUBGROUP_SUCCESS, fetchSubgroup)
}
export default SubgroupSaga