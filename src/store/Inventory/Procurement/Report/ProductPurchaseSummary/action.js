import { ADD_PRODUCT_PURCHASE_SUMMARY, ADD_PRODUCT_PURCHASE_SUMMARY_FAIL, ADD_PRODUCT_PURCHASE_SUMMARY_SUCCESS, GET_PRODUCT_PURCHASE_SUMMARY, GET_PRODUCT_PURCHASE_SUMMARY_SUCCESS, GET_PRODUCT_PURCHASE_SUMMARY_FAIL } from "./actionTypes"

export const addProductPurchaseSummary = data => ({
    type: ADD_PRODUCT_PURCHASE_SUMMARY,
    payload: data,
})
export const addProductPurchaseSummarySuccess = data => ({
    type: ADD_PRODUCT_PURCHASE_SUMMARY_SUCCESS,
    payload: data,
})
export const addProductPurchaseSummaryFail = data => ({
    type: ADD_PRODUCT_PURCHASE_SUMMARY_FAIL,
    payload: data,
})
export const getProductPurchaseSummary = () => ({
    type: GET_PRODUCT_PURCHASE_SUMMARY,
})
export const getProductPurchaseSummarySuccess = data => ({
    type: GET_PRODUCT_PURCHASE_SUMMARY_SUCCESS,
    payload: data,
})
export const getProductPurchaseSummaryFail = data => ({
    type: GET_PRODUCT_PURCHASE_SUMMARY_FAIL,
    payload: data,

})
    