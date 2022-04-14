import { ADD_PRODUCT, ADD_PRODUCT_FAIL, ADD_PRODUCT_SUCCESS, GET_PRODUCT, GET_PRODUCT_SUCCESS, GET_PRODUCT_FAIL } from "./actionTypes"

export const addProduct = data => ({
    type: ADD_PRODUCT,
    payload: data,
})
export const addProductSuccess = data => ({
    type: ADD_PRODUCT_SUCCESS,
    payload: data,
})
export const addProductFail = data => ({
    type: ADD_PRODUCT_FAIL,
    payload: data,
})
export const getProduct = () => ({
    type: GET_PRODUCT,
})
export const getProductSuccess = data => ({
    type: GET_PRODUCT_SUCCESS,
    payload: data,
})
export const getProductFail = data => ({
    type: GET_PRODUCT_FAIL,
    payload: data,
})