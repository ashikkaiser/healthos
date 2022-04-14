import React, { useEffect, useState } from "react";
import { Row, Col, Card, CardBody, CardTitle, Table } from "reactstrap";
import Breadcrumbs from "../../../components/Common/Breadcrumb";
import "./datatables.scss";
import { getProduct } from "../../../store/actions";
import ProductModel from "../../../components/Models/Product/ProductModel";
import { useSelector, useDispatch } from "react-redux";
import { Menu, Item, useContextMenu } from "react-contexify";
import "react-contexify/dist/ReactContexify.css";
import CustomerModal from "../../../components/Models/Accounts/CustomerModel";
const Customers = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [eData, setEData] = useState(false);
  const product = useSelector((state) => state.Product);
  const MENU_ID = "menu-idx";
  const { show } = useContextMenu({
    id: MENU_ID,
  });
  function handleItemClick({ event, props, triggerEvent, data }) {
    if (props !== undefined) {
      setOpen(true);
      setEData(product.products.find((x) => x.id === props));
    }
  }
  function displayMenu(e) {
    show(e, { props: e.currentTarget.id });
  }
  useEffect(() => {
    dispatch(getProduct());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setEData(false);
  };
  return (
    <React.Fragment>
      <div className="page-content">
        <div className="container-fluid">
          <Breadcrumbs title="Accounts" breadcrumbItem="Customer List" />
          <Row>
            <Col className="col-12">
              <Card>
                <CardBody>
                  <CardTitle>
                    Customer List
                    <div className="float-end">
                      <div className="mb-3">
                        <div
                          to="#"
                          onClick={handleClickOpen}
                          className="btn btn-success waves-effect waves-light"
                        >
                          <i className="mdi mdi-plus me-2"></i> Add Customer
                        </div>
                        <CustomerModal
                          open={open}
                          onClose={handleClose}
                          editeData={eData}
                        />
                      </div>
                    </div>
                  </CardTitle>
                  <div className="mt-5">
                    <Table className="table mb-0">
                      <thead>
                        <tr>
                          <th>SL</th>
                          <th>ID</th>
                          <th>NAME</th>
                          <th>SEX</th>
                          <th>MOBILE</th>
                          <th>PAYABLE</th>
                          <th>RECEIVABLE</th>
                        </tr>
                      </thead>
                      <tbody>
                        {product.products.map((row, index) => (
                          <tr
                            key={index}
                            id={`${row.id}`}
                            onContextMenu={displayMenu}
                          >
                            <td>{index + 1}</td>
                            <td>
                              {row.form && row.form.name.substring(0, 3)}{" "}
                              <strong>{row.name} </strong>
                              <em>{row.strength}</em>
                              <br />
                              {row.provider && row.provider.name}
                            </td>
                            <td>{row.sale_price}</td>
                            <td>{row.provider && row.provider.name}</td>
                            <td>{row.form && row.form.name}</td>
                            <td>{row.subgroup && row.subgroup.name}</td>
                            <td>{row.subgroup && row.group.name}</td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  </div>
                  <Menu id={MENU_ID}>
                    <Item onClick={handleItemClick}> Edit </Item>
                    <Item onClick={handleItemClick}> Delete </Item>
                  </Menu>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Customers;
