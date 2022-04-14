import { call, put, takeEvery, } from "redux-saga/effects"
import { ADD_ORDER, ADD_ORDER_SUCCESS, GET_ORDER } from "./actionTypes"

import { addOrderSuccess, addOrderFail, getOrderSuccess, getOrderFail } from "./action"

import { postAllOrder, postModifyOrder } from "../../../helpers/backend_helper"




function* fetchOrder() {
    try {
        const response = yield call(postAllOrder)
        if (response.success) {
            yield put(getOrderSuccess(response.data))
        } else {
            yield put(getOrderFail(response))
        }
    } catch (error) {
        yield put(getOrderFail(error))
    }
}

function* modifyOrder({ payload }) {

    try {
        const response = yield call(postModifyOrder, payload)
        if (response.success) {
            yield put(addOrderSuccess(response.data))
        } else {
            yield put(addOrderFail(response))
        }
    } catch (error) {
        yield put(addOrderFail(error))
    }
}

function* OrderSaga() {
    yield takeEvery(GET_ORDER, fetchOrder)
    yield takeEvery(ADD_ORDER, modifyOrder)
    yield takeEvery(ADD_ORDER_SUCCESS, fetchOrder)
}
export default OrderSaga