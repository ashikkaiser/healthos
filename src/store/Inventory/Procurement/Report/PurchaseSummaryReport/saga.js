import { call, put, takeEvery, } from "redux-saga/effects"
import { ADD_PURCHASE_SUMMARY_REPORT, ADD_PURCHASE_SUMMARY_REPORT_SUCCESS, GET_PURCHASE_SUMMARY_REPORT } from "./actionTypes"

import { addPurchaseSummaryReportSuccess, addPurchaseSummaryReportFail, getPurchaseSummaryReportSuccess, getPurchaseSummaryReportFail } from "./action"

import { postAllPurchaseSummaryReport, postModifyPurchaseSummaryReport } from "../../../helpers/backend_helper"



function* fetchPurchaseSummaryReport() {
    try {
        const response = yield call(postAllPurchaseSummaryReport)
        if (response.success) {
            yield put(getPurchaseSummaryReportSuccess(response.data))
        } else {
            yield put(getPurchaseSummaryReportFail(response))
        }
    } catch (error) {
        yield put(getPurchaseSummaryReportFail(error))
    }
}

function* modifyPurchaseSummaryReport({ payload }) {

    try {
        const response = yield call(postModifyPurchaseSummaryReport, payload)
        if (response.success) {
            yield put(addPurchaseSummaryReportSuccess(response.data))
        } else {
            yield put(addPurchaseSummaryReportFail(response))
        }
    } catch (error) {
        yield put(addPurchaseSummaryReportFail(error))
    }
}

function* PurchaseSummaryReportSaga() {
    yield takeEvery(GET_PURCHASE_SUMMARY_REPORT, fetchPurchaseSummaryReport)
    yield takeEvery(ADD_PURCHASE_SUMMARY_REPORT, modifyPurchaseSummaryReport)
    yield takeEvery(ADD_PURCHASE_SUMMARY_REPORT_SUCCESS, fetchPurchaseSummaryReport)
}
export default PurchaseSummaryReportSaga