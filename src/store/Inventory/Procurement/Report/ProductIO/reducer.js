import { ADD_PRODUCT_IO_SUCCESS, GET_PRODUCT_IO_SUCCESS } from "./actionTypes"
const INIT_STATE = {
    productIOs: [],
    error: {},
}

const ProductProductIO = (state = INIT_STATE, action) => {
    switch (action.type) {
        case ADD_PRODUCT_IO_SUCCESS:
            return {
                ...state,
                productIOs: action.payload,
            }
        case GET_PRODUCT_IO_SUCCESS:
            return {
                ...state,
                productIOs: action.payload,
            }
        default:
            return state
    }
}
export default ProductProductIO
