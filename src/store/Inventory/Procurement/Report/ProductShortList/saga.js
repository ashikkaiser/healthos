import { call, put, takeEvery, } from "redux-saga/effects"
import { ADD_PRODUCT_SHORT_LIST, ADD_PRODUCT_SHORT_LIST_SUCCESS, GET_PRODUCT_SHORT_LIST } from "./actionTypes"

import { addProductShortListSuccess, addProductShortListFail, getProductShortListSuccess, getProductShortListFail } from "./action"

import { postAllProductShortList, postModifyProductShortList } from "../../../helpers/backend_helper"


function* fetchProductShortList() {
    try {
        const response = yield call(postAllProductShortList)
        if (response.success) {
            yield put(getProductShortListSuccess(response.data))
        } else {
            yield put(getProductShortListFail(response))
        }
    } catch (error) {
        yield put(getProductShortListFail(error))
    }
}

function* modifyProductShortList({ payload }) {

    try {
        const response = yield call(postModifyProductShortList, payload)
        if (response.success) {
            yield put(addProductShortListSuccess(response.data))
        } else {
            yield put(addProductShortListFail(response))
        }
    } catch (error) {
        yield put(addProductShortListFail(error))
    }
}

function* ProductShortListSaga() {
    yield takeEvery(GET_PRODUCT_SHORT_LIST, fetchProductShortList)
    yield takeEvery(ADD_PRODUCT_SHORT_LIST, modifyProductShortList)
    yield takeEvery(ADD_PRODUCT_SHORT_LIST_SUCCESS, fetchProductShortList)
}
export default ProductShortListSaga