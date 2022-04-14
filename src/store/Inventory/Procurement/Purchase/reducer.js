import { ADD_PURCHASE_SUCCESS, GET_PURCHASE_SUCCESS } from "./actionTypes"
const INIT_STATE = {
    purchases: [],
    error: {},
}


const ProductPurchase = (state = INIT_STATE, action) => {
    switch (action.type) {
        case ADD_PURCHASE_SUCCESS:
            return {
                ...state,
                purchases: action.payload,
            }
        case GET_PURCHASE_SUCCESS:
            return {
                ...state,
                purchases: action.payload,
            }
        default:
            return state
    }
}
export default ProductPurchase
