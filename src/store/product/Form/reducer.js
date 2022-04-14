import { ADD_FORM_SUCCESS, GET_FORM_SUCCESS } from "./actionTypes"
const INIT_STATE = {
    forms: [],
    error: {},
}

const ProductForm = (state = INIT_STATE, action) => {
    switch (action.type) {
        case ADD_FORM_SUCCESS:
            return {
                ...state,
                forms: action.payload,
            }
        case GET_FORM_SUCCESS:
            return {
                ...state,
                forms: action.payload,
            }
        default:
            return state
    }
}

export default ProductForm
