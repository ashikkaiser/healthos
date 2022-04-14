import { ADD_ACTION_SUCCESS, GET_ACTION_SUCCESS } from "./actionTypes"
const INIT_STATE = {
    actions: [],
    error: {},
}

const ProductAction = (state = INIT_STATE, action) => {
    switch (action.type) {
        case ADD_ACTION_SUCCESS:
            return {
                ...state,
                actions: action.payload,
            }
        case GET_ACTION_SUCCESS:
            return {
                ...state,
                actions: action.payload,
            }
        default:
            return state
    }
}
export default ProductAction
