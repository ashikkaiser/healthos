import { call, put, takeEvery, } from "redux-saga/effects"
import { ADD_EMPLOYEE_WISE_SALES, ADD_EMPLOYEE_WISE_SALES_SUCCESS, GET_EMPLOYEE_WISE_SALES } from "./actionTypes"

import { addEmployeeWiseSalesSuccess, addEmployeeWiseSalesFail, getEmployeeWiseSalesSuccess, getEmployeeWiseSalesFail } from "./action"

import { postAllEmployeeWiseSales, postModifyEmployeeWiseSales } from "../../../helpers/backend_helper"

EmployeeWiseSales
EMPLOYEE_WISE_SALES


function* fetchEmployeeWiseSales() {
    try {
        const response = yield call(postAllEmployeeWiseSales)
        if (response.success) {
            yield put(getEmployeeWiseSalesSuccess(response.data))
        } else {
            yield put(getEmployeeWiseSalesFail(response))
        }
    } catch (error) {
        yield put(getEmployeeWiseSalesFail(error))
    }
}

function* modifyEmployeeWiseSales({ payload }) {

    try {
        const response = yield call(postModifyEmployeeWiseSales, payload)
        if (response.success) {
            yield put(addEmployeeWiseSalesSuccess(response.data))
        } else {
            yield put(addEmployeeWiseSalesFail(response))
        }
    } catch (error) {
        yield put(addEmployeeWiseSalesFail(error))
    }
}

function* EmployeeWiseSalesSaga() {
    yield takeEvery(GET_EMPLOYEE_WISE_SALES, fetchEmployeeWiseSales)
    yield takeEvery(ADD_EMPLOYEE_WISE_SALES, modifyEmployeeWiseSales)
    yield takeEvery(ADD_EMPLOYEE_WISE_SALES_SUCCESS, fetchEmployeeWiseSales)
}
export default EmployeeWiseSalesSaga