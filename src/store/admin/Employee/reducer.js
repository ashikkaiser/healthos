import { ADD_EMPLOYEE_SUCCESS, GET_EMPLOYEE_SUCCESS } from "./actionTypes"
const INIT_STATE = {
    employees: [],
    error: {},
}

const Employee = (state = INIT_STATE, action) => {
    switch (action.type) {
        case ADD_EMPLOYEE_SUCCESS:
            return {
                ...state,
                // EMPLOYEEs: action.payload,
            }
        case GET_EMPLOYEE_SUCCESS:
            return {
                ...state,
                employees: action.payload,
            }
        default:
            return state
    }
}
export default Employee
