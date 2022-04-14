import { ADD_PURCHASE_SUMMARY_REPORT_SUCCESS, GET_PURCHASE_SUMMARY_REPORT_SUCCESS } from "./actionTypes"
const INIT_STATE = {
    purchaseSummaryReports: [],
    error: {},
}

const ProductPurchaseSummaryReport = (state = INIT_STATE, action) => {
    switch (action.type) {
        case ADD_PURCHASE_SUMMARY_REPORT_SUCCESS:
            return {
                ...state,
                purchaseSummaryReports: action.payload,
            }
        case GET_PURCHASE_SUMMARY_REPORT_SUCCESS:
            return {
                ...state,
                purchaseSummaryReports: action.payload,
            }
        default:
            return state
    }
}
export default ProductPurchaseSummaryReport
