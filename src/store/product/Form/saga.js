import { call, put, takeEvery, } from "redux-saga/effects"
import { ADD_FORM, ADD_FORM_SUCCESS, GET_FORM } from "./actionTypes"

import { addformSuccess, addformFail, getformsSuccess, getformsFail } from "./action"

import { postAllForm, postModifyForm } from "../../../helpers/backend_helper"




function* fetchForm() {
    try {
        const response = yield call(postAllForm)
        if (response.success) {
            yield put(getformsSuccess(response.data))
        } else {
            yield put(getformsFail(response))
        }
    } catch (error) {
        yield put(getformsFail(error))
    }
}

function* modifyForm({ payload }) {

    try {
        const response = yield call(postModifyForm, payload)
        if (response.success) {
            yield put(addformSuccess(response.data))
        } else {
            yield put(addformFail(response))
        }
    } catch (error) {
        yield put(addformFail(error))
    }
}

function* formSaga() {
    yield takeEvery(GET_FORM, fetchForm)
    yield takeEvery(ADD_FORM, modifyForm)
    yield takeEvery(ADD_FORM_SUCCESS, fetchForm)
}
export default formSaga