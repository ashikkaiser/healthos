import { call, put, takeEvery, } from "redux-saga/effects"
import { ADD_UNIT, ADD_UNIT_SUCCESS, GET_UNIT } from "./actionTypes"

import { addUnitSuccess, addUnitFail, getUnitSuccess, getUnitFail } from "./action"

import { postAllUnit, postModifyUnit } from "../../../helpers/backend_helper"




function* fetchUnit() {
    try {
        const response = yield call(postAllUnit)
        if (response.success) {
            yield put(getUnitSuccess(response.data))
        } else {
            yield put(getUnitFail(response))
        }
    } catch (error) {
        yield put(getUnitFail(error))
    }
}

function* modifyUnit({ payload }) {

    try {
        const response = yield call(postModifyUnit, payload)
        if (response.success) {
            yield put(addUnitSuccess(response.data))
        } else {
            yield put(addUnitFail(response))
        }
    } catch (error) {
        yield put(addUnitFail(error))
    }
}

function* UnitSaga() {
    yield takeEvery(GET_UNIT, fetchUnit)
    yield takeEvery(ADD_UNIT, modifyUnit)
    yield takeEvery(ADD_UNIT_SUCCESS, fetchUnit)
}
export default UnitSaga