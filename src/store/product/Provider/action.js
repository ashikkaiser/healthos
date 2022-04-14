import { ADD_PROVIDER, ADD_PROVIDER_FAIL, ADD_PROVIDER_SUCCESS, GET_PROVIDER, GET_PROVIDER_SUCCESS, GET_PROVIDER_FAIL } from "./actionTypes"

export const addProvider = data => ({
    type: ADD_PROVIDER,
    payload: data,
})
export const addProviderSuccess = data => ({
    type: ADD_PROVIDER_SUCCESS,
    payload: data,
})
export const addProviderFail = data => ({
    type: ADD_PROVIDER_FAIL,
    payload: data,
})
export const getProvider = () => ({
    type: GET_PROVIDER,
})
export const getProviderSuccess = data => ({
    type: GET_PROVIDER_SUCCESS,
    payload: data,
})
export const getProviderFail = data => ({
    type: GET_PROVIDER_FAIL,
    payload: data,
})