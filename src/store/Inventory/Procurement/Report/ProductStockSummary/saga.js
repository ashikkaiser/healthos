import { call, put, takeEvery, } from "redux-saga/effects"
import { ADD_PRODUCT_STOCK_SUMMARY, ADD_PRODUCT_STOCK_SUMMARY_SUCCESS, GET_PRODUCT_STOCK_SUMMARY } from "./actionTypes"

import { addProductStockSummarySuccess, addProductStockSummaryFail, getProductStockSummarySuccess, getProductStockSummaryFail } from "./action"

import { postAllProductStockSummary, postModifyProductStockSummary } from "../../../helpers/backend_helper"




function* fetchProductStockSummary() {
    try {
        const response = yield call(postAllProductStockSummary)
        if (response.success) {
            yield put(getProductStockSummarySuccess(response.data))
        } else {
            yield put(getProductStockSummaryFail(response))
        }
    } catch (error) {
        yield put(getProductStockSummaryFail(error))
    }
}

function* modifyProductStockSummary({ payload }) {

    try {
        const response = yield call(postModifyProductStockSummary, payload)
        if (response.success) {
            yield put(addProductStockSummarySuccess(response.data))
        } else {
            yield put(addProductStockSummaryFail(response))
        }
    } catch (error) {
        yield put(addProductStockSummaryFail(error))
    }
}

function* ProductStockSummarySaga() {
    yield takeEvery(GET_PRODUCT_STOCK_SUMMARY, fetchProductStockSummary)
    yield takeEvery(ADD_PRODUCT_STOCK_SUMMARY, modifyProductStockSummary)
    yield takeEvery(ADD_PRODUCT_STOCK_SUMMARY_SUCCESS, fetchProductStockSummary)
}
export default ProductStockSummarySaga