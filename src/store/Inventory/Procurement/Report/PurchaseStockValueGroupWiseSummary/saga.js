import { call, put, takeEvery, } from "redux-saga/effects"
import { ADD_PURCHASE_STOCK_VALUE_GROUP_WISE_SUMMARYß, ADD_PURCHASE_STOCK_VALUE_GROUP_WISE_SUMMARYß_SUCCESS, GET_PURCHASE_STOCK_VALUE_GROUP_WISE_SUMMARYß } from "./actionTypes"

import { addPurchaseStockValueGroupWiseSummarySuccess, addPurchaseStockValueGroupWiseSummaryFail, getPurchaseStockValueGroupWiseSummarySuccess, getPurchaseStockValueGroupWiseSummaryFail } from "./action"

import { postAllPurchaseStockValueGroupWiseSummary, postModifyPurchaseStockValueGroupWiseSummary } from "../../../helpers/backend_helper"



function* fetchPurchaseStockValueGroupWiseSummary() {
    try {
        const response = yield call(postAllPurchaseStockValueGroupWiseSummary)
        if (response.success) {
            yield put(getPurchaseStockValueGroupWiseSummarySuccess(response.data))
        } else {
            yield put(getPurchaseStockValueGroupWiseSummaryFail(response))
        }
    } catch (error) {
        yield put(getPurchaseStockValueGroupWiseSummaryFail(error))
    }
}

function* modifyPurchaseStockValueGroupWiseSummary({ payload }) {

    try {
        const response = yield call(postModifyPurchaseStockValueGroupWiseSummary, payload)
        if (response.success) {
            yield put(addPurchaseStockValueGroupWiseSummarySuccess(response.data))
        } else {
            yield put(addPurchaseStockValueGroupWiseSummaryFail(response))
        }
    } catch (error) {
        yield put(addPurchaseStockValueGroupWiseSummaryFail(error))
    }
}

function* PurchaseStockValueGroupWiseSummarySaga() {
    yield takeEvery(GET_PURCHASE_STOCK_VALUE_GROUP_WISE_SUMMARYß, fetchPurchaseStockValueGroupWiseSummary)
    yield takeEvery(ADD_PURCHASE_STOCK_VALUE_GROUP_WISE_SUMMARYß, modifyPurchaseStockValueGroupWiseSummary)
    yield takeEvery(ADD_PURCHASE_STOCK_VALUE_GROUP_WISE_SUMMARYß_SUCCESS, fetchPurchaseStockValueGroupWiseSummary)
}
export default PurchaseStockValueGroupWiseSummarySaga