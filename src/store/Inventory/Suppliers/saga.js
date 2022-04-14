import { call, put, takeEvery, } from "redux-saga/effects"
import { ADD_SUPPLIER, ADD_SUPPLIER_SUCCESS, GET_SUPPLIER } from "./actionTypes"

import { addSupplierSuccess, addSupplierFail, getSupplierSuccess, getSupplierFail } from "./action"

import { postAllSupplier, postModifySupplier } from "../../../helpers/backend_helper"




function* fetchSupplier() {
    try {
        const response = yield call(postAllSupplier)
        if (response.success) {
            yield put(getSupplierSuccess(response.data))
        } else {
            yield put(getSupplierFail(response))
        }
    } catch (error) {
        yield put(getSupplierFail(error))
    }
}

function* modifySupplier({ payload }) {

    try {
        const response = yield call(postModifySupplier, payload)
        if (response.success) {
            yield put(addSupplierSuccess(response.data))
        } else {
            yield put(addSupplierFail(response))
        }
    } catch (error) {
        yield put(addSupplierFail(error))
    }
}

function* SupplierSaga() {
    yield takeEvery(GET_SUPPLIER, fetchSupplier)
    yield takeEvery(ADD_SUPPLIER, modifySupplier)
    yield takeEvery(ADD_SUPPLIER_SUCCESS, fetchSupplier)
}
export default SupplierSaga