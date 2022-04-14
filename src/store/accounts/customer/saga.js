import { call, put, takeEvery } from "redux-saga/effects";
import {
  ADD_CUSTOMER,
  ADD_CUSTOMER_SUCCESS,
  GET_CUSTOMER,
} from "./actionTypes";

import {
  addCustomerSuccess,
  addCustomerFail,
  getCustomerSuccess,
  getCustomerFail,
} from "./action";

import {
  postAllCustomer,
  postModifyCustomer,
} from "../../../helpers/backend_helper";

function* fetchCustomer() {
  try {
    const response = yield call(postAllCustomer);
    if (response.success) {
      yield put(getCustomerSuccess(response.data));
    } else {
      yield put(getCustomerFail(response));
    }
  } catch (error) {
    yield put(getCustomerFail(error));
  }
}

function* modifyCustomer({ payload }) {
  try {
    const response = yield call(postModifyCustomer, payload);
    if (response.success) {
      yield put(addCustomerSuccess(response.data));
    } else {
      yield put(addCustomerFail(response));
    }
  } catch (error) {
    yield put(addCustomerFail(error));
  }
}

function* CustomerSaga() {
  yield takeEvery(GET_CUSTOMER, fetchCustomer);
  yield takeEvery(ADD_CUSTOMER, modifyCustomer);
  yield takeEvery(ADD_CUSTOMER_SUCCESS, fetchCustomer);
}
export default CustomerSaga;
