import { call, put, takeEvery, } from "redux-saga/effects"
import { ADD_CATEGORY, ADD_CATEGORY_SUCCESS, GET_CATEGORY } from "./actionTypes"

import { addCategorySuccess, addCategoryFail, getCategorySuccess, getCategoryFail } from "./action"

import { postAllCategory, postModifyCategory } from "../../../helpers/backend_helper"




function* fetchCategory() {
    try {
        const response = yield call(postAllCategory)
        if (response.success) {
            yield put(getCategorySuccess(response.data))
        } else {
            yield put(getCategoryFail(response))
        }
    } catch (error) {
        yield put(getCategoryFail(error))
    }
}

function* modifyCategory({ payload }) {

    try {
        const response = yield call(postModifyCategory, payload)
        if (response.success) {
            yield put(addCategorySuccess(response.data))
        } else {
            yield put(addCategoryFail(response))
        }
    } catch (error) {
        yield put(addCategoryFail(error))
    }
}

function* CategorySaga() {
    yield takeEvery(GET_CATEGORY, fetchCategory)
    yield takeEvery(ADD_CATEGORY, modifyCategory)
    yield takeEvery(ADD_CATEGORY_SUCCESS, fetchCategory)
}
export default CategorySaga