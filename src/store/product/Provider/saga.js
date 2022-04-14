import { call, put, takeEvery, } from "redux-saga/effects"
import { ADD_PROVIDER, ADD_PROVIDER_SUCCESS, GET_PROVIDER } from "./actionTypes"

import { addProviderSuccess, addProviderFail, getProviderSuccess, getProviderFail } from "./action"

import { postAllProvider, postModifyProvider } from "../../../helpers/backend_helper"




function* fetchProvider() {
    try {
        const response = yield call(postAllProvider)
        if (response.success) {
            yield put(getProviderSuccess(response.data))
        } else {
            yield put(getProviderFail(response))
        }
    } catch (error) {
        yield put(getProviderFail(error))
    }
}

function* modifyProvider({ payload }) {

    try {
        const response = yield call(postModifyProvider, payload)
        if (response.success) {
            yield put(addProviderSuccess(response.data))
        } else {
            yield put(addProviderFail(response))
        }
    } catch (error) {
        yield put(addProviderFail(error))
    }
}

function* ProviderSaga() {
    yield takeEvery(GET_PROVIDER, fetchProvider)
    yield takeEvery(ADD_PROVIDER, modifyProvider)
    yield takeEvery(ADD_PROVIDER_SUCCESS, fetchProvider)
}
export default ProviderSaga