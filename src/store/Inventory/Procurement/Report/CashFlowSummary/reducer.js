import { ADD_CASH_FLOW_SUMMARY_SUCCESS, GET_CASH_FLOW_SUMMARY_SUCCESS } from "./actionTypes"
const INIT_STATE = {
    cashFlowSummarys: [],
    error: {},
}


const ProductCashFlowSummary = (state = INIT_STATE, action) => {
    switch (action.type) {
        case ADD_CASH_FLOW_SUMMARY_SUCCESS:
            return {
                ...state,
                cashFlowSummarys: action.payload,
            }
        case GET_CASH_FLOW_SUMMARY_SUCCESS:
            return {
                ...state,
                cashFlowSummarys: action.payload,
            }
        default:
            return state
    }
}
export default ProductCashFlowSummary
