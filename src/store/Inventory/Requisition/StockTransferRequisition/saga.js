import { call, put, takeEvery, } from "redux-saga/effects"
import { ADD_STOCK_TRANSFER_REQUISITION, ADD_STOCK_TRANSFER_REQUISITION_SUCCESS, GET_STOCK_TRANSFER_REQUISITION } from "./actionTypes"

import { addStockTransferRequisitionSuccess, addStockTransferRequisitionFail, getStockTransferRequisitionSuccess, getStockTransferRequisitionFail } from "./action"

import { postAllStockTransferRequisition, postModifyStockTransferRequisition } from "../../../helpers/backend_helper"


function* fetchStockTransferRequisition() {
    try {
        const response = yield call(postAllStockTransferRequisition)
        if (response.success) {
            yield put(getStockTransferRequisitionSuccess(response.data))
        } else {
            yield put(getStockTransferRequisitionFail(response))
        }
    } catch (error) {
        yield put(getStockTransferRequisitionFail(error))
    }
}

function* modifyStockTransferRequisition({ payload }) {

    try {
        const response = yield call(postModifyStockTransferRequisition, payload)
        if (response.success) {
            yield put(addStockTransferRequisitionSuccess(response.data))
        } else {
            yield put(addStockTransferRequisitionFail(response))
        }
    } catch (error) {
        yield put(addStockTransferRequisitionFail(error))
    }
}

function* StockTransferRequisitionSaga() {
    yield takeEvery(GET_STOCK_TRANSFER_REQUISITION, fetchStockTransferRequisition)
    yield takeEvery(ADD_STOCK_TRANSFER_REQUISITION, modifyStockTransferRequisition)
    yield takeEvery(ADD_STOCK_TRANSFER_REQUISITION_SUCCESS, fetchStockTransferRequisition)
}
export default StockTransferRequisitionSaga