import { ADD_EMPLOYEE_WISE_SALES_SUCCESS, GET_EMPLOYEE_WISE_SALES_SUCCESS } from "./actionTypes"
const INIT_STATE = {
    employeeWiseSales: [],
    error: {},
}

const ProductEmployeeWiseSales = (state = INIT_STATE, action) => {
    switch (action.type) {
        case ADD_EMPLOYEE_WISE_SALES_SUCCESS:
            return {
                ...state,
                employeeWiseSales: action.payload,
            }
        case GET_EMPLOYEE_WISE_SALES_SUCCESS:
            return {
                ...state,
                employeeWiseSales: action.payload,
            }
        default:
            return state
    }
}
export default ProductEmployeeWiseSales
