import { ADD_PROVIDER_SUCCESS, GET_PROVIDER_SUCCESS } from "./actionTypes"
const INIT_STATE = {
    providers: [],
    error: {},
}

const ProductProvider = (state = INIT_STATE, action) => {
    switch (action.type) {
        case ADD_PROVIDER_SUCCESS:
            return {
                ...state,
                providers: action.payload,
            }
        case GET_PROVIDER_SUCCESS:
            return {
                ...state,
                providers: action.payload,
            }
        default:
            return state
    }
}
export default ProductProvider
