import { post } from "./api_helper";
import * as url from "./api";

const postAllForm = () => post(url.GET_FORM_URL);
const postModifyForm = (data) => post(url.MODIFY_FORM_URL, data);
const postAllGeneric = () => post(url.GET_GENERIC_URL);
const postModifyGeneric = (data) => post(url.MODIFY_GENERIC_URL, data);
const postAllCategory = () => post(url.GET_CATEGORY_URL);
const postModifyCategory = (data) => post(url.MODIFY_CATEGORY_URL, data);
const postAllGroup = () => post(url.GET_GROUP_URL);
const postModifyGroup = (data) => post(url.MODIFY_GROUP_URL, data);
const postAllSubgroup = () => post(url.GET_SUBGROUP_URL);
const postModifySubgroup = (data) => post(url.MODIFY_SUBGROUP_URL, data);
const postAllProvider = () => post(url.GET_PROVIDER_URL);
const postModifyProvider = (data) => post(url.MODIFY_PROVIDER_URL, data);
const postAllUnit = () => post(url.GET_UNIT_URL);
const postModifyUnit = (data) => post(url.MODIFY_UNIT_URL, data);
const postAllProduct = () => post(url.GET_PRODUCT_URL);
const postModifyProduct = (data) => post(url.MODIFY_PRODUCT_URL, data);

const postAllSupplier = () => post(url.GET_SUPPLIER_URL);
const postModifySupplier = (data) => post(url.MODIFY_SUPPLIER_URL, data);

const postAllEmployee = () => post(url.GET_EMPLOYEE_URL);
const postModifyEmployee = (data) => post(url.MODIFY_EMPLOYEE_URL, data);

const postAllCustomer = () => post(url.GET_CUSTOMER_URL);
const postModifyCustomer = (data) => post(url.MODIFY_CUSTOMER_URL, data);

export {
  postAllForm,
  postModifyForm,
  postAllGeneric,
  postModifyGeneric,
  postAllCategory,
  postModifyCategory,
  postAllGroup,
  postModifyGroup,
  postAllSubgroup,
  postModifySubgroup,
  postAllProvider,
  postModifyProvider,
  postAllUnit,
  postModifyUnit,
  postAllProduct,
  postModifyProduct,
  postAllSupplier,
  postModifySupplier,
  postAllEmployee,
  postModifyEmployee,
  postAllCustomer,
  postModifyCustomer,
};
