import { call, put, takeEvery, } from "redux-saga/effects"
import { ADD_PURCHASE_ORDER_REPORT, ADD_PURCHASE_ORDER_REPORT_SUCCESS, GET_PURCHASE_ORDER_REPORT } from "./actionTypes"

import { addPurchaseOrderReportSuccess, addPurchaseOrderReportFail, getPurchaseOrderReportSuccess, getPurchaseOrderReportFail } from "./action"

import { postAllPurchaseOrderReport, postModifyPurchaseOrderReport } from "../../../helpers/backend_helper"



function* fetchPurchaseOrderReport() {
    try {
        const response = yield call(postAllPurchaseOrderReport)
        if (response.success) {
            yield put(getPurchaseOrderReportSuccess(response.data))
        } else {
            yield put(getPurchaseOrderReportFail(response))
        }
    } catch (error) {
        yield put(getPurchaseOrderReportFail(error))
    }
}

function* modifyPurchaseOrderReport({ payload }) {

    try {
        const response = yield call(postModifyPurchaseOrderReport, payload)
        if (response.success) {
            yield put(addPurchaseOrderReportSuccess(response.data))
        } else {
            yield put(addPurchaseOrderReportFail(response))
        }
    } catch (error) {
        yield put(addPurchaseOrderReportFail(error))
    }
}

function* PurchaseOrderReportSaga() {
    yield takeEvery(GET_PURCHASE_ORDER_REPORT, fetchPurchaseOrderReport)
    yield takeEvery(ADD_PURCHASE_ORDER_REPORT, modifyPurchaseOrderReport)
    yield takeEvery(ADD_PURCHASE_ORDER_REPORT_SUCCESS, fetchPurchaseOrderReport)
}
export default PurchaseOrderReportSaga