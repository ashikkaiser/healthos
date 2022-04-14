import { call, put, takeEvery, } from "redux-saga/effects"
import { ADD_GENERICS, ADD_GENERICS_SUCCESS, GET_GENERICS } from "./actionTypes"

import { addGenericSuccess, addGenericFail, getGenericSuccess, getGenericFail } from "./action"

import { postAllGeneric, postModifyGeneric } from "../../../helpers/backend_helper"




function* fetchGeneric() {
    try {
        const response = yield call(postAllGeneric)
        if (response.success) {
            yield put(getGenericSuccess(response.data))
        } else {
            yield put(getGenericFail(response))
        }
    } catch (error) {
        yield put(getGenericFail(error))
    }
}

function* modifyGeneric({ payload }) {

    try {
        const response = yield call(postModifyGeneric, payload)
        if (response.success) {
            yield put(addGenericSuccess(response.data))
        } else {
            yield put(addGenericFail(response))
        }
    } catch (error) {
        yield put(addGenericFail(error))
    }
}

function* GenericSaga() {
    yield takeEvery(GET_GENERICS, fetchGeneric)
    yield takeEvery(ADD_GENERICS, modifyGeneric)
    yield takeEvery(ADD_GENERICS_SUCCESS, fetchGeneric)
}
export default GenericSaga