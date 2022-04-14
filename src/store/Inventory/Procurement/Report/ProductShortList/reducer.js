import { ADD_PRODUCT_SHORT_LIST_SUCCESS, GET_PRODUCT_SHORT_LIST_SUCCESS } from "./actionTypes"
const INIT_STATE = {
    productShortLists: [],
    error: {},
}

const ProductProductShortList = (state = INIT_STATE, action) => {
    switch (action.type) {
        case ADD_PRODUCT_SHORT_LIST_SUCCESS:
            return {
                ...state,
                productShortLists: action.payload,
            }
        case GET_PRODUCT_SHORT_LIST_SUCCESS:
            return {
                ...state,
                productShortLists: action.payload,
            }
        default:
            return state
    }
}
export default ProductProductShortList
