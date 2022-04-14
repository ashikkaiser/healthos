import { ADD_PURCHASE_ORDER_REPORT_SUCCESS, GET_PURCHASE_ORDER_REPORT_SUCCESS } from "./actionTypes"
const INIT_STATE = {
    purchaseOrderReports: [],
    error: {},
}


const ProductPurchaseOrderReport = (state = INIT_STATE, action) => {
    switch (action.type) {
        case ADD_PURCHASE_ORDER_REPORT_SUCCESS:
            return {
                ...state,
                purchaseOrderReports: action.payload,
            }
        case GET_PURCHASE_ORDER_REPORT_SUCCESS:
            return {
                ...state,
                purchaseOrderReports: action.payload,
            }
        default:
            return state
    }
}
export default ProductPurchaseOrderReport
