import { ADD_PRODUCT_SHORT_LIST, ADD_PRODUCT_SHORT_LIST_FAIL, ADD_PRODUCT_SHORT_LIST_SUCCESS, GET_PRODUCT_SHORT_LIST, GET_PRODUCT_SHORT_LIST_SUCCESS, GET_PRODUCT_SHORT_LIST_FAIL } from "./actionTypes"

export const addProductShortList = data => ({
    type: ADD_PRODUCT_SHORT_LIST,
    payload: data,
})
export const addProductShortListSuccess = data => ({
    type: ADD_PRODUCT_SHORT_LIST_SUCCESS,
    payload: data,
})
export const addProductShortListFail = data => ({
    type: ADD_PRODUCT_SHORT_LIST_FAIL,
    payload: data,
})
export const getProductShortList = () => ({
    type: GET_PRODUCT_SHORT_LIST,
})
export const getProductShortListSuccess = data => ({
    type: GET_PRODUCT_SHORT_LIST_SUCCESS,
    payload: data,
})
export const getProductShortListFail = data => ({
    type: GET_PRODUCT_SHORT_LIST_FAIL,
    payload: data,
})

