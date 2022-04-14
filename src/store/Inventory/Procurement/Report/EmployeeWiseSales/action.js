import { ADD_EMPLOYEE_WISE_SALES, ADD_EMPLOYEE_WISE_SALES_FAIL, ADD_EMPLOYEE_WISE_SALES_SUCCESS, GET_EMPLOYEE_WISE_SALES, GET_EMPLOYEE_WISE_SALES_SUCCESS, GET_EMPLOYEE_WISE_SALES_FAIL } from "./actionTypes"

export const addEmployeeWiseSales = data => ({
    type: ADD_EMPLOYEE_WISE_SALES,
    payload: data,
})
export const addEmployeeWiseSalesSuccess = data => ({
    type: ADD_EMPLOYEE_WISE_SALES_SUCCESS,
    payload: data,
})
export const addEmployeeWiseSalesFail = data => ({
    type: ADD_EMPLOYEE_WISE_SALES_FAIL,
    payload: data,
})
export const getEmployeeWiseSales = () => ({
    type: GET_EMPLOYEE_WISE_SALES,
})
export const getEmployeeWiseSalesSuccess = data => ({
    type: GET_EMPLOYEE_WISE_SALES_SUCCESS,
    payload: data,
})
export const getEmployeeWiseSalesFail = data => ({
    type: GET_EMPLOYEE_WISE_SALES_FAIL,
    payload: data,
})

