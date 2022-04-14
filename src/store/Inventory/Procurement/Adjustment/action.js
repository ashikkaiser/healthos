import { ADD_ADJUSTMENT, ADD_ADJUSTMENT_FAIL, ADD_ADJUSTMENT_SUCCESS, GET_ADJUSTMENT, GET_ADJUSTMENT_SUCCESS, GET_ADJUSTMENT_FAIL } from "./actionTypes"

export const addAdjustment = data => ({
    type: ADD_ADJUSTMENT,
    payload: data,
})
export const addAdjustmentSuccess = data => ({
    type: ADD_ADJUSTMENT_SUCCESS,
    payload: data,
})
export const addAdjustmentFail = data => ({
    type: ADD_ADJUSTMENT_FAIL,
    payload: data,
})
export const getAdjustment = () => ({
    type: GET_ADJUSTMENT,
})
export const getAdjustmentSuccess = data => ({
    type: GET_ADJUSTMENT_SUCCESS,
    payload: data,
})
export const getAdjustmentFail = data => ({
    type: GET_ADJUSTMENT_FAIL,
    payload: data,
})

