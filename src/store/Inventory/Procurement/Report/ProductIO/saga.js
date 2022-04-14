import { call, put, takeEvery, } from "redux-saga/effects"
import { ADD_PRODUCT_IO, ADD_PRODUCT_IO_SUCCESS, GET_PRODUCT_IO } from "./actionTypes"

import { addProductIOSuccess, addProductIOFail, getProductIOSuccess, getProductIOFail } from "./action"

import { postAllProductIO, postModifyProductIO } from "../../../helpers/backend_helper"


ProductIO
PRODUCT_IO

function* fetchProductIO() {
    try {
        const response = yield call(postAllProductIO)
        if (response.success) {
            yield put(getProductIOSuccess(response.data))
        } else {
            yield put(getProductIOFail(response))
        }
    } catch (error) {
        yield put(getProductIOFail(error))
    }
}

function* modifyProductIO({ payload }) {

    try {
        const response = yield call(postModifyProductIO, payload)
        if (response.success) {
            yield put(addProductIOSuccess(response.data))
        } else {
            yield put(addProductIOFail(response))
        }
    } catch (error) {
        yield put(addProductIOFail(error))
    }
}

function* ProductIOSaga() {
    yield takeEvery(GET_PRODUCT_IO, fetchProductIO)
    yield takeEvery(ADD_PRODUCT_IO, modifyProductIO)
    yield takeEvery(ADD_PRODUCT_IO_SUCCESS, fetchProductIO)
}
export default ProductIOSaga