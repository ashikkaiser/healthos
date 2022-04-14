import React from "react";
import { Redirect } from "react-router-dom";
// Dashboard
import Dashboard from "../pages/Dashboard/index";
import ProductForm from "../pages/Products/Form/index";
import ProductGeneric from "../pages/Products/Generic/index";
import ProductCategory from "../pages/Products/Category";
import ProductGroups from "../pages/Products/Groups";
import ProductProviders from "../pages/Products/Providers";
import ProductUnit from "../pages/Products/Unit";
import ProductSubgroup from "../pages/Products/SubGroup";
import Products from "../pages/Products/Product";
import Suppliers from "../pages/Inventory/Suppliers";
import Employe from "../pages/Admin/Employe";

// Authentication related pages
import Login from "../pages/Authentication/Login";
import Logout from "../pages/Authentication/Logout";
import Register from "../pages/Authentication/Register";
import ForgetPwd from "../pages/Authentication/ForgetPassword";
import Sales from "../pages/Inventory/Sales/index";
import Customers from "../pages/Accounts/Customer";

// Profile
// import UserProfile from "../pages/Authentication/user-profile"

const userRoutes = [
  { path: "/dashboard", component: Dashboard },
  { path: "/product-forms", component: ProductForm },
  { path: "/product-generic", component: ProductGeneric },
  { path: "/product-category", component: ProductCategory },
  { path: "/product-groups", component: ProductGroups },
  { path: "/manufacturing-companies", component: ProductProviders },
  { path: "/product-unit", component: ProductUnit },
  { path: "/product-subgroups", component: ProductSubgroup },
  { path: "/products", component: Products },
  { path: "/suppliers", component: Suppliers },
  { path: "/hr/employees", component: Employe },
  { path: "/store/sales", component: Sales },
  { path: "/customer/list", component: Customers },

  // //profile

  // this route should be at the end of all other routes
  { path: "/", exact: true, component: () => <Redirect to="/dashboard" /> },
];

const authRoutes = [
  { path: "/logout", component: Logout },
  { path: "/login", component: Login },
  { path: "/forgot-password", component: ForgetPwd },
  { path: "/register", component: Register },
];

export { userRoutes, authRoutes };
