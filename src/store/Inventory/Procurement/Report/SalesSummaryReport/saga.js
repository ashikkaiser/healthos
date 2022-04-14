import { call, put, takeEvery, } from "redux-saga/effects"
import { ADD_SALE, ADD_SALE_SUCCESS, GET_SALE } from "./actionTypes"

import { addSaleSuccess, addSaleFail, getSaleSuccess, getSaleFail } from "./action"

import { postAllSale, postModifySale } from "../../../helpers/backend_helper"




function* fetchSale() {
    try {
        const response = yield call(postAllSale)
        if (response.success) {
            yield put(getSaleSuccess(response.data))
        } else {
            yield put(getSaleFail(response))
        }
    } catch (error) {
        yield put(getSaleFail(error))
    }
}

function* modifySale({ payload }) {

    try {
        const response = yield call(postModifySale, payload)
        if (response.success) {
            yield put(addSaleSuccess(response.data))
        } else {
            yield put(addSaleFail(response))
        }
    } catch (error) {
        yield put(addSaleFail(error))
    }
}

function* SaleSaga() {
    yield takeEvery(GET_SALE, fetchSale)
    yield takeEvery(ADD_SALE, modifySale)
    yield takeEvery(ADD_SALE_SUCCESS, fetchSale)
}
export default SaleSaga