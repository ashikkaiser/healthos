import { ADD_STOCK_TRANSFER_REQUISITION, ADD_STOCK_TRANSFER_REQUISITION_FAIL, ADD_STOCK_TRANSFER_REQUISITION_SUCCESS, GET_STOCK_TRANSFER_REQUISITION, GET_STOCK_TRANSFER_REQUISITION_SUCCESS, GET_STOCK_TRANSFER_REQUISITION_FAIL } from "./actionTypes"

export const addStockTransferRequisition = data => ({
    type: ADD_STOCK_TRANSFER_REQUISITION,
    payload: data,
})
export const addStockTransferRequisitionSuccess = data => ({
    type: ADD_STOCK_TRANSFER_REQUISITION_SUCCESS,
    payload: data,
})
export const addStockTransferRequisitionFail = data => ({
    type: ADD_STOCK_TRANSFER_REQUISITION_FAIL,
    payload: data,
})
export const getStockTransferRequisition = () => ({
    type: GET_STOCK_TRANSFER_REQUISITION,
})
export const getStockTransferRequisitionSuccess = data => ({
    type: GET_STOCK_TRANSFER_REQUISITION_SUCCESS,
    payload: data,
})
export const getStockTransferRequisitionFail = data => ({
    type: GET_STOCK_TRANSFER_REQUISITION_FAIL,
    payload: data,
})
