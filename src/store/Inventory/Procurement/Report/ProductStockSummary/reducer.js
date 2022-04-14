import { ADD_PRODUCT_STOCK_SUMMARY_SUCCESS, GET_PRODUCT_STOCK_SUMMARY_SUCCESS } from "./actionTypes"
const INIT_STATE = {
    productStockSummaryes: [],
    error: {},
}


const ProductProductStockSummary = (state = INIT_STATE, action) => {
    switch (action.type) {
        case ADD_PRODUCT_STOCK_SUMMARY_SUCCESS:
            return {
                ...state,
                productStockSummaryes: action.payload,
            }
        case GET_PRODUCT_STOCK_SUMMARY_SUCCESS:
            return {
                ...state,
                productStockSummaryes: action.payload,
            }
        default:
            return state
    }
}
export default ProductProductStockSummary
