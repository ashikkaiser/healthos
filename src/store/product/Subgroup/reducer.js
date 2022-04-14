import { ADD_SUBGROUP_SUCCESS, GET_SUBGROUP_SUCCESS } from "./actionTypes"
const INIT_STATE = {
    subgroups: [],
    error: {},
}

const ProductSubGroup = (state = INIT_STATE, action) => {
    switch (action.type) {
        case ADD_SUBGROUP_SUCCESS:
            return {
                ...state,
                subgroups: action.payload,
            }
        case GET_SUBGROUP_SUCCESS:
            return {
                ...state,
                subgroups: action.payload,
            }
        default:
            return state
    }
}
export default ProductSubGroup
