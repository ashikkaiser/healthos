import { ADD_PRODUCT_SUCCESS, GET_PRODUCT_SUCCESS } from "./actionTypes"
const INIT_STATE = {
    products: [],
    error: {},
}

const Products = (state = INIT_STATE, action) => {
    switch (action.type) {
        case ADD_PRODUCT_SUCCESS:
            return {
                ...state,
                products: action.payload,
            }
        case GET_PRODUCT_SUCCESS:
            return {
                ...state,
                products: action.payload,
            }
        default:
            return state
    }
}
export default Products
