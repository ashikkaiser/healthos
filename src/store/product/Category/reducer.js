import { ADD_CATEGORY_SUCCESS, GET_CATEGORY_SUCCESS } from "./actionTypes"
const INIT_STATE = {
    categories: [],
    error: {},
}

const ProductCategory = (state = INIT_STATE, action) => {
    switch (action.type) {
        case ADD_CATEGORY_SUCCESS:
            return {
                ...state,
                categories: action.payload,
            }
        case GET_CATEGORY_SUCCESS:
            return {
                ...state,
                categories: action.payload,
            }
        default:
            return state
    }
}
export default ProductCategory
