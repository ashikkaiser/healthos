import { ADD_SALE_SUCCESS, GET_SALE_SUCCESS } from "./actionTypes"
const INIT_STATE = {
    sales: [],
    error: {},
}

const Productsale = (state = INIT_STATE, action) => {
    switch (action.type) {
        case ADD_SALE_SUCCESS:
            return {
                ...state,
                sales: action.payload,
            }
        case GET_SALE_SUCCESS:
            return {
                ...state,
                sales: action.payload,
            }
        default:
            return state
    }
}
export default Productsale
