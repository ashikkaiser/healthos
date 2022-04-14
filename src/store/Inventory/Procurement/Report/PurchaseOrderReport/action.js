import { ADD_PURCHASE_ORDER_REPORT, ADD_PURCHASE_ORDER_REPORT_FAIL, ADD_PURCHASE_ORDER_REPORT_SUCCESS, GET_PURCHASE_ORDER_REPORT, GET_PURCHASE_ORDER_REPORT_SUCCESS, GET_PURCHASE_ORDER_REPORT_FAIL } from "./actionTypes"

export const addPurchaseOrderReport = data => ({
    type: ADD_PURCHASE_ORDER_REPORT,
    payload: data,
})
export const addPurchaseOrderReportSuccess = data => ({
    type: ADD_PURCHASE_ORDER_REPORT_SUCCESS,
    payload: data,
})
export const addPurchaseOrderReportFail = data => ({
    type: ADD_PURCHASE_ORDER_REPORT_FAIL,
    payload: data,
})
export const getPurchaseOrderReport = () => ({
    type: GET_PURCHASE_ORDER_REPORT,
})
export const getPurchaseOrderReportSuccess = data => ({
    type: GET_PURCHASE_ORDER_REPORT_SUCCESS,
    payload: data,
})
export const getPurchaseOrderReportFail = data => ({
    type: GET_PURCHASE_ORDER_REPORT_FAIL,
    payload: data,
})

