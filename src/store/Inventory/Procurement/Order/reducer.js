import { ADD_ORDER_SUCCESS, GET_ORDER_SUCCESS } from "./actionTypes"
const INIT_STATE = {
    orders: [],
    error: {},
}

const ProductOrder = (state = INIT_STATE, action) => {
    switch (action.type) {
        case ADD_ORDER_SUCCESS:
            return {
                ...state,
                orders: action.payload,
            }
        case GET_ORDER_SUCCESS:
            return {
                ...state,
                orders: action.payload,
            }
        default:
            return state
    }
}
export default ProductOrder
