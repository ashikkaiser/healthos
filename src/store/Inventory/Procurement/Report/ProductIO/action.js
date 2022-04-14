import { ADD_PRODUCT_IO, ADD_PRODUCT_IO_FAIL, ADD_PRODUCT_IO_SUCCESS, GET_PRODUCT_IO, GET_PRODUCT_IO_SUCCESS, GET_PRODUCT_IO_FAIL } from "./actionTypes"

export const addProductIO = data => ({
    type: ADD_PRODUCT_IO,
    payload: data,
})
export const addProductIOSuccess = data => ({
    type: ADD_PRODUCT_IO_SUCCESS,
    payload: data,
})
export const addProductIOFail = data => ({
    type: ADD_PRODUCT_IO_FAIL,
    payload: data,
})
export const getProductIO = () => ({
    type: GET_PRODUCT_IO,
})
export const getProductIOSuccess = data => ({
    type: GET_PRODUCT_IO_SUCCESS,
    payload: data,
})
export const getProductIOFail = data => ({
    type: GET_PRODUCT_IO_FAIL,
    payload: data,
})

