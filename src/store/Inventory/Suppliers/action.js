import { ADD_SUPPLIER, ADD_SUPPLIER_FAIL, ADD_SUPPLIER_SUCCESS, GET_SUPPLIER, GET_SUPPLIER_SUCCESS, GET_SUPPLIER_FAIL } from "./actionTypes"

export const addSupplier = data => ({
    type: ADD_SUPPLIER,
    payload: data,
})
export const addSupplierSuccess = data => ({
    type: ADD_SUPPLIER_SUCCESS,
    payload: data,
})
export const addSupplierFail = data => ({
    type: ADD_SUPPLIER_FAIL,
    payload: data,
})
export const getSupplier = () => ({
    type: GET_SUPPLIER,
})
export const getSupplierSuccess = data => ({
    type: GET_SUPPLIER_SUCCESS,
    payload: data,
})
export const getSupplierFail = data => ({
    type: GET_SUPPLIER_FAIL,
    payload: data,
})