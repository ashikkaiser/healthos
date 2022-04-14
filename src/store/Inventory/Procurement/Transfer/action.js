import { ADD_ACTION, ADD_ACTION_FAIL, ADD_ACTION_SUCCESS, GET_ACTION, GET_ACTION_SUCCESS, GET_ACTION_FAIL } from "./actionTypes"

export const addAction = data => ({
    type: ADD_ACTION,
    payload: data,
})
export const addActionSuccess = data => ({
    type: ADD_ACTION_SUCCESS,
    payload: data,
})
export const addActionFail = data => ({
    type: ADD_ACTION_FAIL,
    payload: data,
})
export const getAction = () => ({
    type: GET_ACTION,
})
export const getActionSuccess = data => ({
    type: GET_ACTION_SUCCESS,
    payload: data,
})
export const getActionFail = data => ({
    type: GET_ACTION_FAIL,
    payload: data,
})