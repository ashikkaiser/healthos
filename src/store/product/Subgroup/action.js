import { ADD_SUBGROUP, ADD_SUBGROUP_FAIL, ADD_SUBGROUP_SUCCESS, GET_SUBGROUP,GET_SUBGROUP_FAIL,GET_SUBGROUP_SUCCESS } from "./actionTypes"

export const addSubgroup = data => ({
    type: ADD_SUBGROUP,
    payload: data,
})
export const addSubgroupSuccess = data => ({
    type: ADD_SUBGROUP_SUCCESS,
    payload: data,
})
export const addSubgroupFail = data => ({
    type: ADD_SUBGROUP_FAIL,
    payload: data,
})
export const getSubgroup = () => ({
    type: GET_SUBGROUP,
})
export const getSubgroupSuccess = data => ({
    type: GET_SUBGROUP_SUCCESS,
    payload: data,
})
export const getSubgroupFail = data => ({
    type: GET_SUBGROUP_FAIL,
    payload: data,
})