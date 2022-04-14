import { ADD_FORM, ADD_FORM_FAIL, ADD_FORM_SUCCESS, GET_FORM, GET_FORM_FAIL, GET_FORM_SUCCESS } from "./actionTypes"

export const addform = data => ({
    type: ADD_FORM,
    payload: data,
})
export const addformSuccess = data => ({
    type: ADD_FORM_SUCCESS,
    payload: data,
})
export const addformFail = data => ({
    type: ADD_FORM_FAIL,
    payload: data,
})
export const getforms = () => ({
    type: GET_FORM,
})
export const getformsSuccess = data => ({
    type: GET_FORM_SUCCESS,
    payload: data,
})
export const getformsFail = data => ({
    type: GET_FORM_FAIL,
    payload: data,
})