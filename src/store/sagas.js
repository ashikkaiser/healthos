import { all, fork } from "redux-saga/effects";

//public
import AccountSaga from "./auth/register/saga";
import AuthSaga from "./auth/login/saga";
import ForgetSaga from "./auth/forgetpwd/saga";
import ProfileSaga from "./auth/profile/saga";
import LayoutSaga from "./layout/saga";

import formSaga from "./product/Form/saga";
import GenericSaga from "./product/Generic/saga";
import CategorySaga from "./product/Category/saga";
import GroupSaga from "./product/Group/saga";
import SubgroupSaga from "./product/Subgroup/saga";
import ProviderSaga from "./product/Provider/saga";
import UnitSaga from "./product/Unit/saga";
import ProductSaga from "./product/Product/saga";
import SupplierSaga from "./Inventory/Suppliers/saga";
import CustomerSaga from "./accounts/customer/saga";

export default function* rootSaga() {
  yield all([
    //public
    AccountSaga(),
    fork(AuthSaga),
    ProfileSaga(),
    ForgetSaga(),
    fork(LayoutSaga),
    fork(formSaga),
    fork(GenericSaga),
    fork(CategorySaga),
    fork(GroupSaga),
    fork(SubgroupSaga),
    fork(ProviderSaga),
    fork(UnitSaga),
    fork(ProductSaga),
    fork(SupplierSaga),
    fork(CustomerSaga),
  ]);
}
