import { ADD_UNIT, ADD_UNIT_FAIL, ADD_UNIT_SUCCESS, GET_UNIT, GET_UNIT_SUCCESS, GET_UNIT_FAIL } from "./actionTypes"

export const addUnit = data => ({
    type: ADD_UNIT,
    payload: data,
})
export const addUnitSuccess = data => ({
    type: ADD_UNIT_SUCCESS,
    payload: data,
})
export const addUnitFail = data => ({
    type: ADD_UNIT_FAIL,
    payload: data,
})
export const getUnit = () => ({
    type: GET_UNIT,
})
export const getUnitSuccess = data => ({
    type: GET_UNIT_SUCCESS,
    payload: data,
})
export const getUnitFail = data => ({
    type: GET_UNIT_FAIL,
    payload: data,
})