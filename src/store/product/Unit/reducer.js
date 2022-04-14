import { ADD_UNIT_SUCCESS, GET_UNIT_SUCCESS } from "./actionTypes"
const INIT_STATE = {
    units: [],
    error: {},
}

const ProductUnit = (state = INIT_STATE, action) => {
    switch (action.type) {
        case ADD_UNIT_SUCCESS:
            return {
                ...state,
                units: action.payload,
            }
        case GET_UNIT_SUCCESS:
            return {
                ...state,
                units: action.payload,
            }
        default:
            return state
    }
}
export default ProductUnit
