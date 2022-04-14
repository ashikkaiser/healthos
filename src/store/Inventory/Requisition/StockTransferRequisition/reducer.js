import { ADD_STOCK_TRANSFER_REQUISITION_SUCCESS, GET_STOCK_TRANSFER_REQUISITION_SUCCESS } from "./actionTypes"
const INIT_STATE = {
    stockTransferRequisitions: [],
    error: {},
}



const ProductStockTransferRequisition = (state = INIT_STATE, action) => {
    switch (action.type) {
        case ADD_STOCK_TRANSFER_REQUISITION_SUCCESS:
            return {
                ...state,
                StockTransferRequisitions: action.payload,
            }
        case GET_STOCK_TRANSFER_REQUISITION_SUCCESS:
            return {
                ...state,
                StockTransferRequisitions: action.payload,
            }
        default:
            return state
    }
}
export default ProductStockTransferRequisition
