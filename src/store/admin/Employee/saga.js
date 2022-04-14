import { call, put, takeEvery, } from "redux-saga/effects"
import { ADD_EMPLOYEE, ADD_EMPLOYEE_SUCCESS, GET_EMPLOYEE } from "./actionTypes"

import { addEmployeeSuccess, addEmployeeFail, getEmployeeSuccess, getEmployeeFail } from "./action"

import { postAllEmployee, postModifyEmployee } from "../../../helpers/backend_helper"




function* fetchEmployee() {
    try {
        const response = yield call(postAllEmployee)
        if (response.success) {
            yield put(getEmployeeSuccess(response.data))
        } else {
            yield put(getEmployeeFail(response))
        }
    } catch (error) {
        yield put(getEmployeeFail(error))
    }
}

function* modifyEmployee({ payload }) {

    try {
        const response = yield call(postModifyEmployee, payload)
        if (response.success) {
            yield put(addEmployeeSuccess(response.data))
        } else {
            yield put(addEmployeeFail(response))
        }
    } catch (error) {
        yield put(addEmployeeFail(error))
    }
}

function* EmployeeSaga() {
    yield takeEvery(GET_EMPLOYEE, fetchEmployee)
    yield takeEvery(ADD_EMPLOYEE, modifyEmployee)
    yield takeEvery(ADD_EMPLOYEE_SUCCESS, fetchEmployee)
}
export default EmployeeSaga