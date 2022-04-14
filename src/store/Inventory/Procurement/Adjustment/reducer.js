import { ADD_ADJUSTMENT_SUCCESS, GET_ADJUSTMENT_SUCCESS } from "./actionTypes"
const INIT_STATE = {
    adjustments: [],
    error: {},
}

const ProductAdjustment = (state = INIT_STATE, action) => {
    switch (action.type) {
        case ADD_ADJUSTMENT_SUCCESS:
            return {
                ...state,
                adjustments: action.payload,
            }
        case GET_ADJUSTMENT_SUCCESS:
            return {
                ...state,
                adjustments: action.payload,
            }
        default:
            return state
    }
}
export default Productsale


