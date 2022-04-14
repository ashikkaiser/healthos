import { ADD_SUPPLIER_SUCCESS, GET_SUPPLIER_SUCCESS } from "./actionTypes"
const INIT_STATE = {
    suppliers: [],
    error: {},
}

const Suppliers = (state = INIT_STATE, action) => {
    switch (action.type) {
        case ADD_SUPPLIER_SUCCESS:
            return {
                ...state,
                // suppliers: action.payload,
            }
        case GET_SUPPLIER_SUCCESS:
            return {
                ...state,
                suppliers: action.payload,
            }
        default:
            return state
    }
}
export default Suppliers
