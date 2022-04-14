import { ADD_CASH_FLOW_SUMMARY, ADD_CASH_FLOW_SUMMARY_FAIL, ADD_CASH_FLOW_SUMMARY_SUCCESS, GET_CASH_FLOW_SUMMARY, GET_CASH_FLOW_SUMMARY_SUCCESS, GET_CASH_FLOW_SUMMARY_FAIL } from "./actionTypes"

export const addCashFlowSummary = data => ({
    type: ADD_CASH_FLOW_SUMMARY,
    payload: data,
})
export const addCashFlowSummarySuccess = data => ({
    type: ADD_CASH_FLOW_SUMMARY_SUCCESS,
    payload: data,
})
export const addCashFlowSummaryFail = data => ({
    type: ADD_CASH_FLOW_SUMMARY_FAIL,
    payload: data,
})
export const getCashFlowSummary = () => ({
    type: GET_CASH_FLOW_SUMMARY,
})
export const getCashFlowSummarySuccess = data => ({
    type: GET_CASH_FLOW_SUMMARY_SUCCESS,
    payload: data,
})
export const getCashFlowSummaryFail = data => ({
    type: GET_CASH_FLOW_SUMMARY_FAIL,
    payload: data,
})

