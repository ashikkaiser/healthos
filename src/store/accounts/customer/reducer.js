import { ADD_CUSTOMER_SUCCESS, GET_CUSTOMER_SUCCESS } from "./actionTypes";
const INIT_STATE = {
  customers: [],
  error: {},
};

const Customer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ADD_CUSTOMER_SUCCESS:
      return {
        ...state,
        // EMPLOYEEs: action.payload,
      };
    case GET_CUSTOMER_SUCCESS:
      return {
        ...state,
        customers: action.payload,
      };
    default:
      return state;
  }
};
export default Customer;
