import { call, put, takeEvery, } from "redux-saga/effects"
import { ADD_ADJUSTMENT, ADD_ADJUSTMENT_SUCCESS, GET_ADJUSTMENT } from "./actionTypes"

import { addAdjustmentSuccess, addAdjustmentFail, getAdjustmentSuccess, getAdjustmentFail } from "./action"

import { postAllAdjustment, postModifyAdjustment } from "../../../helpers/backend_helper"


function* fetchAdjustment() {
    try {
        const response = yield call(postAllAdjustment)
        if (response.success) {
            yield put(getAdjustmentSuccess(response.data))
        } else {
            yield put(getAdjustmentFail(response))
        }
    } catch (error) {
        yield put(getAdjustmentFail(error))
    }
}

function* modifyAdjustment({ payload }) {

    try {
        const response = yield call(postModifyAdjustment, payload)
        if (response.success) {
            yield put(addAdjustmentSuccess(response.data))
        } else {
            yield put(addAdjustmentFail(response))
        }
    } catch (error) {
        yield put(addAdjustmentFail(error))
    }
}

function* AdjustmentSaga() {
    yield takeEvery(GET_ADJUSTMENT, fetchAdjustment)
    yield takeEvery(ADD_ADJUSTMENT, modifyAdjustment)
    yield takeEvery(ADD_ADJUSTMENT_SUCCESS, fetchAdjustment)
}
export default AdjustmentSaga