import PropTypes from "prop-types";
import React, { useCallback, useEffect, useRef } from "react";

// //Import Scrollbar
import SimpleBar from "simplebar-react";

// MetisMenu
import MetisMenu from "metismenujs";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

//i18n
import { withTranslation } from "react-i18next";

const SidebarContent = (props) => {
  const ref = useRef();

  const activateParentDropdown = useCallback((item) => {
    item.classList.add("active");
    const parent = item.parentElement;
    const parent2El = parent.childNodes[1];
    if (parent2El && parent2El.id !== "side-menu") {
      parent2El.classList.add("mm-show");
    }

    if (parent) {
      parent.classList.add("mm-active");
      const parent2 = parent.parentElement;

      if (parent2) {
        parent2.classList.add("mm-show"); // ul tag

        const parent3 = parent2.parentElement; // li tag

        if (parent3) {
          parent3.classList.add("mm-active"); // li
          parent3.childNodes[0].classList.add("mm-active"); //a
          const parent4 = parent3.parentElement; // ul
          if (parent4) {
            parent4.classList.add("mm-show"); // ul
            const parent5 = parent4.parentElement;
            if (parent5) {
              parent5.classList.add("mm-show"); // li
              parent5.childNodes[0].classList.add("mm-active"); // a tag
            }
          }
        }
      }
      scrollElement(item);
      return false;
    }
    scrollElement(item);
    return false;
  }, []);

  // Use ComponentDidMount and ComponentDidUpdate method symultaniously
  useEffect(() => {
    const pathName = props.location.pathname;

    new MetisMenu("#side-menu");
    let matchingMenuItem = null;
    const ul = document.getElementById("side-menu");
    const items = ul.getElementsByTagName("a");
    for (let i = 0; i < items.length; ++i) {
      if (pathName === items[i].pathname) {
        matchingMenuItem = items[i];
        break;
      }
    }
    if (matchingMenuItem) {
      activateParentDropdown(matchingMenuItem);
    }
  }, [props.location.pathname, activateParentDropdown]);

  useEffect(() => {
    ref.current.recalculate();
  });

  function scrollElement(item) {
    if (item) {
      const currentPosition = item.offsetTop;
      if (currentPosition > window.innerHeight) {
        ref.current.getScrollElement().scrollTop = currentPosition - 300;
      }
    }
  }

  return (
    <React.Fragment>
      <SimpleBar
        style={{ maxHeight: "100%" }}
        ref={ref}
        className="sidebar-menu-scroll"
      >
        <div id="sidebar-menu">
          <ul className="metismenu list-unstyled" id="side-menu">
            <li className="menu-title">{props.t("Main")} </li>
            <li>
              <Link to="/#" className="waves-effect">
                <i className="uil-home-alt"></i>
                <span>{props.t("Dashboard")}</span>
              </Link>
            </li>
            <li>
              <Link to="/#" className="has-arrow waves-effect">
                <i className="uil-share-alt"></i>
                <span>{props.t("Inventory")}</span>
              </Link>
              <ul className="sub-menu">
                <li>
                  <Link to="/store/sales">{props.t("Sales")}</Link>
                </li>
                <li>
                  <Link to="/#" className="has-arrow">
                    {props.t("Requisition")}
                  </Link>
                  <ul className="sub-menu">
                    <li>
                      <Link to="/#">{props.t("Purchase Requisition")}</Link>
                    </li>
                    <li>
                      <Link to="/#">
                        {props.t("Stock Transfer Requisition")}
                      </Link>
                    </li>
                  </ul>
                </li>

                <li>
                  <Link to="/#" className="has-arrow">
                    {props.t("Procurement")}
                  </Link>
                  <ul className="sub-menu">
                    <li>
                      <Link to="/#">{props.t("Order")}</Link>
                    </li>
                    <li>
                      <Link to="/#">{props.t("Purchase")}</Link>
                    </li>
                    <li>
                      <Link to="/#">{props.t("Transfer")}</Link>
                    </li>
                    <li>
                      <Link to="/#">{props.t("Adjustment")}</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/#" className="has-arrow">
                    {props.t("Report")}
                  </Link>
                  <ul className="sub-menu">
                    <li>
                      <Link to="/#">{props.t("Stock Report")}</Link>
                    </li>
                    <li>
                      <Link to="/#">{props.t("Stock Value Summary")}</Link>
                    </li>
                    <li>
                      <Link to="/#">{props.t("Cash Flow Summary")}</Link>
                    </li>
                    <li>
                      <Link to="/#">{props.t("Sales Summary Report")}</Link>
                    </li>
                    <li>
                      <Link to="/#">{props.t("Employee Wise Sales")}</Link>
                    </li>
                    <li>
                      <Link to="/#">{props.t("Sales Vat Report")}</Link>
                    </li>
                    <li>
                      <Link to="/#">{props.t("Purchase Order Report")}</Link>
                    </li>
                    <li>
                      <Link to="/#">{props.t("Purchase Summary Report")}</Link>
                    </li>
                    <li>
                      <Link to="/#">
                        {props.t(
                          "Sale Purchase Stock Value Group Wise Summary"
                        )}
                      </Link>
                    </li>
                    <li>
                      <Link to="/#">{props.t("Product Purchase Summary")}</Link>
                    </li>
                    <li>
                      <Link to="/#">{props.t("Product IO")}</Link>
                    </li>
                    <li>
                      <Link to="/#">{props.t("Product Stock Summary")}</Link>
                    </li>
                    <li>
                      <Link to="/#">{props.t("Product Short List")}</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/suppliers">{props.t("Suppliers")}</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/#" className="has-arrow waves-effect">
                <i className="uil-store"></i>
                <span>{props.t("Accounts")}</span>
              </Link>
              <ul className="sub-menu">
                <li>
                  <Link to="/#">{props.t("Transactions")}</Link>
                </li>
                <li>
                  <Link to="/#">{props.t("Income and Cost Statement")}</Link>
                </li>
                <li>
                  <Link to="/customer/list">{props.t("Customer")}</Link>
                </li>
                <li>
                  <Link to="/#">{props.t("Accounts")}</Link>
                </li>
                <li>
                  <Link to="/#">{props.t("Person Discount")}</Link>
                </li>
                <li>
                  <Link to="/#">{props.t("Transaction Head")}</Link>
                </li>
                <li>
                  <Link to="/#">{props.t("Merge Transaction Heads")}</Link>
                </li>
                <li>
                  <Link to="/#"> {props.t("Trial Balance")} </Link>
                </li>
                <li>
                  <Link to="/#"> {props.t("Cash Point Summary")} </Link>
                </li>
              </ul>
            </li>

            <li>
              <Link to="/#" className="has-arrow waves-effect">
                <i className="uil-envelope"></i>
                <span>{props.t("Products")}</span>
              </Link>
              <ul className="sub-menu">
                <li>
                  <Link to="/product-forms">{props.t("Product Forms")}</Link>
                </li>
                <li>
                  <Link to="/product-generic">
                    {props.t("Product Generics")}{" "}
                  </Link>
                </li>
                <li>
                  <Link to="/product-category">
                    {props.t("Product Categories")}{" "}
                  </Link>
                </li>
                <li>
                  <Link to="/product-groups">{props.t("Product Groups")} </Link>
                </li>
                <li>
                  <Link to="/manufacturing-companies">
                    {props.t("Manufacturing Company")}{" "}
                  </Link>
                </li>
                <li>
                  <Link to="/products">{props.t("Products")} </Link>
                </li>
                <li>
                  <Link to="/#">{props.t("Possible Duplicate Products")} </Link>
                </li>
                <li>
                  <Link to="/#">{props.t("Merge Products")} </Link>
                </li>
                <li>
                  <Link to="/store">{props.t("Stores")} </Link>
                </li>
                <li>
                  <Link to="/product-subgroups">
                    {props.t("Product Subgroups")}{" "}
                  </Link>
                </li>
                <li>
                  <Link to="/product-unit">{props.t("Unit")} </Link>
                </li>
                <li>
                  <Link to="/#">
                    {props.t("Update Rack, Stock and Discount")}{" "}
                  </Link>
                </li>
              </ul>
            </li>

            <li className="menu-title">{props.t("Components")}</li>
            <li>
              <Link to="/#" className="has-arrow waves-effect">
                <i className="uil-user-circle"></i>
                <span>{props.t("Admin")}</span>
              </Link>
              <ul className="sub-menu">
                <li>
                  <Link to="/hr/employees">{props.t("Employee")}</Link>
                </li>
                <li>
                  <Link to="/#">{props.t("Stack Holder")}</Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </SimpleBar>
    </React.Fragment>
  );
};

SidebarContent.propTypes = {
  location: PropTypes.object,
  t: PropTypes.any,
};

export default withRouter(withTranslation()(SidebarContent));
