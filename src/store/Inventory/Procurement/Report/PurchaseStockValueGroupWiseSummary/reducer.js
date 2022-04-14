import { ADD_PURCHASE_STOCK_VALUE_GROUP_WISE_SUMMARYß_SUCCESS, GET_PURCHASE_STOCK_VALUE_GROUP_WISE_SUMMARYß_SUCCESS } from "./actionTypes"
const INIT_STATE = {
    purchaseStockValueGroupWiseSummarys: [],
    error: {},
}

const ProductPurchaseStockValueGroupWiseSummary = (state = INIT_STATE, action) => {
    switch (action.type) {
        case ADD_PURCHASE_STOCK_VALUE_GROUP_WISE_SUMMARYß_SUCCESS:
            return {
                ...state,
                sapurchaseStockValueGroupWiseSummarysles: action.payload,
            }
        case GET_PURCHASE_STOCK_VALUE_GROUP_WISE_SUMMARYß_SUCCESS:
            return {
                ...state,
                purchaseStockValueGroupWiseSummarys: action.payload,
            }
        default:
            return state
    }
}
export default ProductPurchaseStockValueGroupWiseSummary
