import { ADD_PRODUCT_PURCHASE_SUMMARY_SUCCESS, GET_PRODUCT_PURCHASE_SUMMARY_SUCCESS } from "./actionTypes"
const INIT_STATE = {
    productPurchaseSummaryes: [],
    error: {},
}

const ProductProductPurchaseSummary = (state = INIT_STATE, action) => {
    switch (action.type) {
        case ADD_PRODUCT_PURCHASE_SUMMARY_SUCCESS:
            return {
                ...state,
                productPurchaseSummaryes: action.payload,
            }
        case GET_PRODUCT_PURCHASE_SUMMARY_SUCCESS:
            return {
                ...state,
                productPurchaseSummaryes: action.payload,
            }
        default:
            return state
    }
}
export default ProductProductPurchaseSummary
