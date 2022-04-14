import { call, put, takeEvery, } from "redux-saga/effects"
import { ADD_CASH_FLOW_SUMMARY, ADD_CASH_FLOW_SUMMARY_SUCCESS, GET_CASH_FLOW_SUMMARY } from "./actionTypes"

import { addCashFlowSummarySuccess, addCashFlowSummaryFail, getCashFlowSummarySuccess, getCashFlowSummaryFail } from "./action"

import { postAllCashFlowSummary, postModifyCashFlowSummary } from "../../../helpers/backend_helper"




function* fetchCashFlowSummary() {
    try {
        const response = yield call(postAllCashFlowSummary)
        if (response.success) {
            yield put(getCashFlowSummarySuccess(response.data))
        } else {
            yield put(getCashFlowSummaryFail(response))
        }
    } catch (error) {
        yield put(getCashFlowSummaryFail(error))
    }
}

function* modifyCashFlowSummary({ payload }) {

    try {
        const response = yield call(postModifyCashFlowSummary, payload)
        if (response.success) {
            yield put(addCashFlowSummarySuccess(response.data))
        } else {
            yield put(addCashFlowSummaryFail(response))
        }
    } catch (error) {
        yield put(addCashFlowSummaryFail(error))
    }
}

function* CashFlowSummarySaga() {
    yield takeEvery(GET_CASH_FLOW_SUMMARY, fetchCashFlowSummary)
    yield takeEvery(ADD_CASH_FLOW_SUMMARY, modifyCashFlowSummary)
    yield takeEvery(ADD_CASH_FLOW_SUMMARY_SUCCESS, fetchCashFlowSummary)
}
export default CashFlowSummarySaga