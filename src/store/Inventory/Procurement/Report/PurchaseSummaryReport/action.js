import { ADD_PURCHASE_SUMMARY_REPORT, ADD_PURCHASE_SUMMARY_REPORT_FAIL, ADD_PURCHASE_SUMMARY_REPORT_SUCCESS, GET_PURCHASE_SUMMARY_REPORT, GET_PURCHASE_SUMMARY_REPORT_SUCCESS, GET_PURCHASE_SUMMARY_REPORT_FAIL } from "./actionTypes"

export const addPurchaseSummaryReport = data => ({
    type: ADD_PURCHASE_SUMMARY_REPORT,
    payload: data,
})
export const addPurchaseSummaryReportSuccess = data => ({
    type: ADD_PURCHASE_SUMMARY_REPORT_SUCCESS,
    payload: data,
})
export const addPurchaseSummaryReportFail = data => ({
    type: ADD_PURCHASE_SUMMARY_REPORT_FAIL,
    payload: data,
})
export const getPurchaseSummaryReport = () => ({
    type: GET_PURCHASE_SUMMARY_REPORT,
})
export const getPurchaseSummaryReportSuccess = data => ({
    type: GET_PURCHASE_SUMMARY_REPORT_SUCCESS,
    payload: data,
})
export const getPurchaseSummaryReportFail = data => ({
    type: GET_PURCHASE_SUMMARY_REPORT_FAIL,
    payload: data,
})

