import { call, put, takeEvery, } from "redux-saga/effects"
import { ADD_PURCHASE, ADD_PURCHASE_SUCCESS, GET_PURCHASE } from "./actionTypes"

import { addPurchaseSuccess, addPurchaseFail, getPurchaseSuccess, getPurchaseFail } from "./action"

import { postAllPurchase, postModifyPurchase } from "../../../helpers/backend_helper"

Purchase
PURCHASE


function* fetchPurchase() {
    try {
        const response = yield call(postAllPurchase)
        if (response.success) {
            yield put(getPurchaseSuccess(response.data))
        } else {
            yield put(getPurchaseFail(response))
        }
    } catch (error) {
        yield put(getPurchaseFail(error))
    }
}

function* modifyPurchase({ payload }) {

    try {
        const response = yield call(postModifyPurchase, payload)
        if (response.success) {
            yield put(addPurchaseSuccess(response.data))
        } else {
            yield put(addPurchaseFail(response))
        }
    } catch (error) {
        yield put(addPurchaseFail(error))
    }
}

function* PurchaseSaga() {
    yield takeEvery(GET_PURCHASE, fetchPurchase)
    yield takeEvery(ADD_PURCHASE, modifyPurchase)
    yield takeEvery(ADD_PURCHASE_SUCCESS, fetchPurchase)
}
export default PurchaseSaga