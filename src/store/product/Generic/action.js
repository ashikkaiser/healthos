import { ADD_GENERICS, ADD_GENERICS_FAIL, ADD_GENERICS_SUCCESS, GET_GENERICS, GET_GENERICS_FAIL, GET_GENERICS_SUCCESS } from "./actionTypes"

export const addGeneric = data => ({
    type: ADD_GENERICS,
    payload: data,
})
export const addGenericSuccess = data => ({
    type: ADD_GENERICS_SUCCESS,
    payload: data,
})
export const addGenericFail = data => ({
    type: ADD_GENERICS_FAIL,
    payload: data,
})
export const getGenerics = () => ({
    type: GET_GENERICS,
})
export const getGenericSuccess = data => ({
    type: GET_GENERICS_SUCCESS,
    payload: data,
})
export const getGenericFail = data => ({
    type: GET_GENERICS_FAIL,
    payload: data,
})