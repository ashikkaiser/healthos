import { ADD_PURCHASE_REQUISITION, ADD_PURCHASE_REQUISITION_FAIL, ADD_PURCHASE_REQUISITION_SUCCESS, GET_PURCHASE_REQUISITION, GET_PURCHASE_REQUISITION_SUCCESS, GET_PURCHASE_REQUISITION_FAIL } from "./actionTypes"

export const addPurchaseRequisition = data => ({
    type: ADD_PURCHASE_REQUISITION,
    payload: data,
})
export const addPurchaseRequisitionSuccess = data => ({
    type: ADD_PURCHASE_REQUISITION_SUCCESS,
    payload: data,
})
export const addPurchaseRequisitionFail = data => ({
    type: ADD_PURCHASE_REQUISITION_FAIL,
    payload: data,
})
export const getPurchaseRequisition = () => ({
    type: GET_PURCHASE_REQUISITION,
})
export const getPurchaseRequisitionSuccess = data => ({
    type: GET_PURCHASE_REQUISITION_SUCCESS,
    payload: data,
})
export const getPurchaseRequisitionFail = data => ({
    type: GET_PURCHASE_REQUISITION_FAIL,
    payload: data,
})
