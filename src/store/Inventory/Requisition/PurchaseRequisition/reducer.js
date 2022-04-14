import { ADD_PURCHASE_REQUISITION_SUCCESS, GET_PURCHASE_REQUISITION_SUCCESS } from "./actionTypes"
const INIT_STATE = {
    purchaseRequisitions: [],
    error: {},
}

const ProductPurchaseRequisition = (state = INIT_STATE, action) => {
    switch (action.type) {
        case ADD_PURCHASE_REQUISITION_SUCCESS:
            return {
                ...state,
                PurchaseRequisitions: action.payload,
            }
        case GET_PURCHASE_REQUISITION_SUCCESS:
            return {
                ...state,
                PurchaseRequisitions: action.payload,
            }
        default:
            return state
    }
}
export default ProductPurchaseRequisition
