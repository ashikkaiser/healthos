//import liraries
import React, { Component, useState } from "react";
import Breadcrumbs from "../../../components/Common/Breadcrumb";
import {
  TabContent,
  TabPane,
  Collapse,
  NavLink,
  NavItem,
  Nav,
  Card,
  Row,
  Col,
  CardBody,
  CardTitle,
  Container,
} from "reactstrap";
import classnames from "classnames";
import SalesPage from "./component/sales";
import SalesReturnPage from "./component/salseReturn";
// create a component
const Sales = () => {
  const [activeTab, setactiveTab] = useState("1");

  function toggle(tab) {
    if (activeTab !== tab) {
      setactiveTab(tab);
    }
  }

  return (
    <React.Fragment>
      <div className="page-content">
        <div className="container-fluid">
          <Breadcrumbs title="Products" breadcrumbItem="Product List" />

          <Nav tabs>
            <NavItem>
              <NavLink
                style={{ cursor: "pointer" }}
                className={classnames({
                  active: activeTab === "1",
                })}
                onClick={() => {
                  toggle("1");
                }}
              >
                <span className="d-block d-sm-none">
                  <i className="fas fa-home"></i>
                </span>
                <span className="d-none d-sm-block">Sales</span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                style={{ cursor: "pointer" }}
                className={classnames({
                  active: activeTab === "2",
                })}
                onClick={() => {
                  toggle("2");
                }}
              >
                <span className="d-block d-sm-none">
                  <i className="far fa-user"></i>
                </span>
                <span className="d-none d-sm-block">Sales Return</span>
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={activeTab} className="">
            <TabPane tabId="1">
              <SalesPage />
            </TabPane>
            <TabPane tabId="2">
              <SalesReturnPage />
            </TabPane>
          </TabContent>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Sales;
