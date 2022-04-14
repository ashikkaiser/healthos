import { ADD_EMPLOYEE, ADD_EMPLOYEE_FAIL, ADD_EMPLOYEE_SUCCESS, GET_EMPLOYEE, GET_EMPLOYEE_SUCCESS, GET_EMPLOYEE_FAIL } from "./actionTypes"

export const addEmployee = data => ({
    type: ADD_EMPLOYEE,
    payload: data,
})
export const addEmployeeSuccess = data => ({
    type: ADD_EMPLOYEE_SUCCESS,
    payload: data,
})
export const addEmployeeFail = data => ({
    type: ADD_EMPLOYEE_FAIL,
    payload: data,
})
export const getEmployee = () => ({
    type: GET_EMPLOYEE,
})
export const getEmployeeSuccess = data => ({
    type: GET_EMPLOYEE_SUCCESS,
    payload: data,
})
export const getEmployeeFail = data => ({
    type: GET_EMPLOYEE_FAIL,
    payload: data,
})