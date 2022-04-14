import { ADD_GENERICS_SUCCESS, GET_GENERICS_SUCCESS } from "./actionTypes"
const INIT_STATE = {
    generics: [],
    error: {},
}

const ProductGeneric = (state = INIT_STATE, action) => {
    switch (action.type) {
        case ADD_GENERICS_SUCCESS:
            return {
                ...state,
                generics: action.payload,
            }
        case GET_GENERICS_SUCCESS:
            return {
                ...state,
                generics: action.payload,
            }
        default:
            return state
    }
}

export default ProductGeneric
