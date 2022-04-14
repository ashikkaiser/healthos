import { ADD_GROUP_SUCCESS, GET_GROUP_SUCCESS } from "./actionTypes"
const INIT_STATE = {
    groups: [],
    error: {},
}

const ProductGroup = (state = INIT_STATE, action) => {
    switch (action.type) {
        case ADD_GROUP_SUCCESS:
            return {
                ...state,
                groups: action.payload,
            }
        case GET_GROUP_SUCCESS:
            return {
                ...state,
                groups: action.payload,
            }
        default:
            return state
    }
}
export default ProductGroup
