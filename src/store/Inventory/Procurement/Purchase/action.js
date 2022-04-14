import { ADD_PURCHASE, ADD_PURCHASE_FAIL, ADD_PURCHASE_SUCCESS, GET_PURCHASE, GET_PURCHASE_SUCCESS, GET_PURCHASE_FAIL } from "./actionTypes"

export const addPurchase = data => ({
    type: ADD_PURCHASE,
    payload: data,
})
export const addPurchaseSuccess = data => ({
    type: ADD_PURCHASE_SUCCESS,
    payload: data,
})
export const addPurchaseFail = data => ({
    type: ADD_PURCHASE_FAIL,
    payload: data,
})
export const getPurchase = () => ({
    type: GET_PURCHASE,
})
export const getPurchaseSuccess = data => ({
    type: GET_PURCHASE_SUCCESS,
    payload: data,
})
export const getPurchaseFail = data => ({
    type: GET_PURCHASE_FAIL,
    payload: data,
})

