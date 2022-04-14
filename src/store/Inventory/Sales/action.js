import { ADD_SALE, ADD_SALE_FAIL, ADD_SALE_SUCCESS, GET_SALE, GET_SALE_SUCCESS, GET_SALE_FAIL } from "./actionTypes"

export const addSale = data => ({
    type: ADD_SALE,
    payload: data,
})
export const addSaleSuccess = data => ({
    type: ADD_SALE_SUCCESS,
    payload: data,
})
export const addSaleFail = data => ({
    type: ADD_SALE_FAIL,
    payload: data,
})
export const getSale = () => ({
    type: GET_SALE,
})
export const getSaleSuccess = data => ({
    type: GET_SALE_SUCCESS,
    payload: data,
})
export const getSaleFail = data => ({
    type: GET_SALE_FAIL,
    payload: data,
})