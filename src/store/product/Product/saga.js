import { call, put, takeEvery, } from "redux-saga/effects"
import { ADD_PRODUCT, ADD_PRODUCT_SUCCESS, GET_PRODUCT } from "./actionTypes"

import { addProductSuccess, addProductFail, getProductSuccess, getProductFail } from "./action"

import { postAllProduct, postModifyProduct } from "../../../helpers/backend_helper"




function* fetchProduct() {
    try {
        const response = yield call(postAllProduct)
        if (response.success) {
            yield put(getProductSuccess(response.data))
        } else {
            yield put(getProductFail(response))
        }
    } catch (error) {
        yield put(getProductFail(error))
    }
}

function* modifyProduct({ payload }) {

    try {
        const response = yield call(postModifyProduct, payload)
        if (response.success) {
            yield put(addProductSuccess(response.data))
        } else {
            yield put(addProductFail(response))
        }
    } catch (error) {
        yield put(addProductFail(error))
    }
}

function* ProductSaga() {
    yield takeEvery(GET_PRODUCT, fetchProduct)
    yield takeEvery(ADD_PRODUCT, modifyProduct)
    yield takeEvery(ADD_PRODUCT_SUCCESS, fetchProduct)
}
export default ProductSaga