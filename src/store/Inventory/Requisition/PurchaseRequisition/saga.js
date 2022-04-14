import { call, put, takeEvery, } from "redux-saga/effects"
import { ADD_PURCHASE_REQUISITION, ADD_PURCHASE_REQUISITION_SUCCESS, GET_PURCHASE_REQUISITION } from "./actionTypes"

import { addPurchaseRequisitionSuccess, addPurchaseRequisitionFail, getPurchaseRequisitionSuccess, getPurchaseRequisitionFail } from "./action"

import { postAllPurchaseRequisition, postModifyPurchaseRequisition } from "../../../helpers/backend_helper"




function* fetchPurchaseRequisition() {
    try {
        const response = yield call(postAllPurchaseRequisition)
        if (response.success) {
            yield put(getPurchaseRequisitionSuccess(response.data))
        } else {
            yield put(getPurchaseRequisitionFail(response))
        }
    } catch (error) {
        yield put(getPurchaseRequisitionFail(error))
    }
}

function* modifyPurchaseRequisition({ payload }) {

    try {
        const response = yield call(postModifyPurchaseRequisition, payload)
        if (response.success) {
            yield put(addPurchaseRequisitionSuccess(response.data))
        } else {
            yield put(addPurchaseRequisitionFail(response))
        }
    } catch (error) {
        yield put(addPurchaseRequisitionFail(error))
    }
}

function* PurchaseRequisitionSaga() {
    yield takeEvery(GET_PURCHASE_REQUISITION, fetchPurchaseRequisition)
    yield takeEvery(ADD_PURCHASE_REQUISITION, modifyPurchaseRequisition)
    yield takeEvery(ADD_PURCHASE_REQUISITION_SUCCESS, fetchPurchaseRequisition)
}
export default PurchaseRequisitionSaga