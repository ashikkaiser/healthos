import { call, put, takeEvery, } from "redux-saga/effects"
import { ADD_PRODUCT_PURCHASE_SUMMARY, ADD_PRODUCT_PURCHASE_SUMMARY_SUCCESS, GET_PRODUCT_PURCHASE_SUMMARY } from "./actionTypes"

import { addProductPurchaseSummarySuccess, addProductPurchaseSummaryFail, getProductPurchaseSummarySuccess, getProductPurchaseSummaryFail } from "./action"

import { postAllProductPurchaseSummary, postModifyProductPurchaseSummary } from "../../../helpers/backend_helper"



function* fetchProductPurchaseSummary() {
    try {
        const response = yield call(postAllProductPurchaseSummary)
        if (response.success) {
            yield put(getProductPurchaseSummarySuccess(response.data))
        } else {
            yield put(getProductPurchaseSummaryFail(response))
        }
    } catch (error) {
        yield put(getProductPurchaseSummaryFail(error))
    }
}

function* modifyProductPurchaseSummary({ payload }) {

    try {
        const response = yield call(postModifyProductPurchaseSummary, payload)
        if (response.success) {
            yield put(addProductPurchaseSummarySuccess(response.data))
        } else {
            yield put(addProductPurchaseSummaryFail(response))
        }
    } catch (error) {
        yield put(addProductPurchaseSummaryFail(error))
    }
}

function* ProductPurchaseSummarySaga() {
    yield takeEvery(GET_PRODUCT_PURCHASE_SUMMARY, fetchProductPurchaseSummary)
    yield takeEvery(ADD_PRODUCT_PURCHASE_SUMMARY, modifyProductPurchaseSummary)
    yield takeEvery(ADD_PRODUCT_PURCHASE_SUMMARY_SUCCESS, fetchProductPurchaseSummary)
}
export default ProductPurchaseSummarySaga