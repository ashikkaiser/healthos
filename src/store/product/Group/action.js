import { ADD_GROUP, ADD_GROUP_FAIL, ADD_GROUP_SUCCESS, GET_GROUP, GET_GROUP_SUCCESS, GET_GROUP_FAIL } from "./actionTypes"

export const addGroup = data => ({
    type: ADD_GROUP,
    payload: data,
})
export const addGroupSuccess = data => ({
    type: ADD_GROUP_SUCCESS,
    payload: data,
})
export const addGroupFail = data => ({
    type: ADD_GROUP_FAIL,
    payload: data,
})
export const getGroup = () => ({
    type: GET_GROUP,
})
export const getGroupSuccess = data => ({
    type: GET_GROUP_SUCCESS,
    payload: data,
})
export const getGroupFail = data => ({
    type: GET_GROUP_FAIL,
    payload: data,
})