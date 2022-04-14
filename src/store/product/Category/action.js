import { ADD_CATEGORY, ADD_CATEGORY_FAIL, ADD_CATEGORY_SUCCESS, GET_CATEGORY, GET_CATEGORY_FAIL, GET_CATEGORY_SUCCESS } from "./actionTypes"

export const addCategory = data => ({
    type: ADD_CATEGORY,
    payload: data,
})
export const addCategorySuccess = data => ({
    type: ADD_CATEGORY_SUCCESS,
    payload: data,
})
export const addCategoryFail = data => ({
    type: ADD_CATEGORY_FAIL,
    payload: data,
})
export const getCategory = () => ({
    type: GET_CATEGORY,






















})
export const getCategorySuccess = data => ({
    type: GET_CATEGORY_SUCCESS,
    payload: data,
})
export const getCategoryFail = data => ({
    type: GET_CATEGORY_FAIL,
    payload: data,
})