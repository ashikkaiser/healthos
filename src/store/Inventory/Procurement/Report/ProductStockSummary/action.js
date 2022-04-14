import { ADD_PRODUCT_STOCK_SUMMARY, ADD_PRODUCT_STOCK_SUMMARY_FAIL, ADD_PRODUCT_STOCK_SUMMARY_SUCCESS, GET_PRODUCT_STOCK_SUMMARY, GET_PRODUCT_STOCK_SUMMARY_SUCCESS, GET_PRODUCT_STOCK_SUMMARY_FAIL } from "./actionTypes"

export const addProductStockSummary = data => ({
    type: ADD_PRODUCT_STOCK_SUMMARY,
    payload: data,
})
export const addProductStockSummarySuccess = data => ({
    type: ADD_PRODUCT_STOCK_SUMMARY_SUCCESS,
    payload: data,
})
export const addProductStockSummaryFail = data => ({
    type: ADD_PRODUCT_STOCK_SUMMARY_FAIL,
    payload: data,
})
export const getProductStockSummary = () => ({
    type: GET_PRODUCT_STOCK_SUMMARY,
})
export const getProductStockSummarySuccess = data => ({
    type: GET_PRODUCT_STOCK_SUMMARY_SUCCESS,
    payload: data,
})
export const getProductStockSummaryFail = data => ({
    type: GET_PRODUCT_STOCK_SUMMARY_FAIL,
    payload: data,
})

