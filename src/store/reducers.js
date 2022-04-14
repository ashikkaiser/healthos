import { combineReducers } from "redux";

// Front
import Layout from "./layout/reducer";

// Authentication
import Login from "./auth/login/reducer";
import Account from "./auth/register/reducer";
import ForgetPassword from "./auth/forgetpwd/reducer";
import Profile from "./auth/profile/reducer";

import Form from "./product/Form/reducer";
import Generic from "./product/Generic/reducer";
import Category from "./product/Category/reducer";
import Group from "./product/Group/reducer";
import Subgroup from "./product/Subgroup/reducer";
import Provider from "./product/Provider/reducer";
import Unit from "./product/Unit/reducer";
import Product from "./product/Product/reducer";
import Suppliers from "./Inventory/Suppliers/reducer";
import Customers from "./accounts/customer/reducer";

const rootReducer = combineReducers({
  // public
  Layout,
  Login,
  Account,
  ForgetPassword,
  Profile,
  Form,
  Generic,
  Category,
  Group,
  Subgroup,
  Provider,
  Unit,
  Product,
  Suppliers,
  Customers,
});

export default rootReducer;
