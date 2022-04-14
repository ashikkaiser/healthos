import { ADD_PURCHASE_STOCK_VALUE_GROUP_WISE_SUMMARYß, ADD_PURCHASE_STOCK_VALUE_GROUP_WISE_SUMMARYß_FAIL, ADD_PURCHASE_STOCK_VALUE_GROUP_WISE_SUMMARYß_SUCCESS, GET_PURCHASE_STOCK_VALUE_GROUP_WISE_SUMMARYß, GET_PURCHASE_STOCK_VALUE_GROUP_WISE_SUMMARYß_SUCCESS, GET_PURCHASE_STOCK_VALUE_GROUP_WISE_SUMMARYß_FAIL } from "./actionTypes"

export const addPurchaseStockValueGroupWiseSummary = data => ({
    type: ADD_PURCHASE_STOCK_VALUE_GROUP_WISE_SUMMARYß,
    payload: data,
})
export const addPurchaseStockValueGroupWiseSummarySuccess = data => ({
    type: ADD_PURCHASE_STOCK_VALUE_GROUP_WISE_SUMMARYß_SUCCESS,
    payload: data,
})
export const addPurchaseStockValueGroupWiseSummaryFail = data => ({
    type: ADD_PURCHASE_STOCK_VALUE_GROUP_WISE_SUMMARYß_FAIL,
    payload: data,
})
export const getPurchaseStockValueGroupWiseSummary = () => ({
    type: GET_PURCHASE_STOCK_VALUE_GROUP_WISE_SUMMARYß,
})
export const getPurchaseStockValueGroupWiseSummarySuccess = data => ({
    type: GET_PURCHASE_STOCK_VALUE_GROUP_WISE_SUMMARYß_SUCCESS,
    payload: data,
})
export const getPurchaseStockValueGroupWiseSummaryFail = data => ({
    type: GET_PURCHASE_STOCK_VALUE_GROUP_WISE_SUMMARYß_FAIL,
    payload: data,
})

