import {
  ADD_CUSTOMER,
  ADD_CUSTOMER_FAIL,
  ADD_CUSTOMER_SUCCESS,
  GET_CUSTOMER,
  GET_CUSTOMER_SUCCESS,
  GET_CUSTOMER_FAIL,
} from "./actionTypes";

export const addCustomer = (data) => ({
  type: ADD_CUSTOMER,
  payload: data,
});
export const addCustomerSuccess = (data) => ({
  type: ADD_CUSTOMER_SUCCESS,
  payload: data,
});
export const addCustomerFail = (data) => ({
  type: ADD_CUSTOMER_FAIL,
  payload: data,
});
export const getCustomer = () => ({
  type: GET_CUSTOMER,
});
export const getCustomerSuccess = (data) => ({
  type: GET_CUSTOMER_SUCCESS,
  payload: data,
});
export const getCustomerFail = (data) => ({
  type: GET_CUSTOMER_FAIL,
  payload: data,
});
