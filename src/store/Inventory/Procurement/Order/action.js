import { ADD_ORDER, ADD_ORDER_FAIL, ADD_ORDER_SUCCESS, GET_ORDER, GET_ORDER_SUCCESS, GET_ORDER_FAIL } from "./actionTypes"

export const addOrder = data => ({
    type: ADD_ORDER,
    payload: data,
})
export const addOrderSuccess = data => ({
    type: ADD_ORDER_SUCCESS,
    payload: data,
})
export const addOrderFail = data => ({
    type: ADD_ORDER_FAIL,
    payload: data,
})
export const getOrder = () => ({
    type: GET_ORDER,
})
export const getOrderSuccess = data => ({
    type: GET_ORDER_SUCCESS,
    payload: data,
})
export const getOrderFail = data => ({
    type: GET_ORDER_FAIL,
    payload: data,
})