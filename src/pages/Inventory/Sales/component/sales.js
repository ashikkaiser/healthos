//import liraries
import React, { Component, useState } from "react";
import { Item, Menu, useContextMenu } from "react-contexify";
import { Card, CardBody, CardTitle, Col, Row, Table } from "reactstrap";
import SalesModel from "../../../../components/Models/Inventory/Sales/SalesModel";

// create a component
const SalesPage = () => {
  const MENU_ID = "menu-idx";
  const [open, setOpen] = useState(false);
  const { show } = useContextMenu({
    id: MENU_ID,
  });
  function handleItemClick({ event, props, triggerEvent, data }) {
    if (props !== undefined) {
      //   setOpen(true);
      //   setEData(product.products.find((x) => x.id === props));
    }
  }
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    // setEData(false);
  };
  return (
    <Row>
      <Col className="col-12">
        <Card>
          <CardBody>
            <CardTitle>
              Sales
              <div className="float-end">
                <div className="mb-3">
                  <div
                    to="#"
                    onClick={handleClickOpen}
                    className="btn btn-success waves-effect waves-light"
                  >
                    <i className="mdi mdi-plus me-2"></i> Add Product
                  </div>
                  {/* <SalesModel /> */}
                  <SalesModel
                    open={open}
                    onClose={handleClose}
                    // editeData={eData}
                  />
                </div>
              </div>
            </CardTitle>
            <div className="mt-5">
              <Table className="table mb-0">
                <thead>
                  <tr>
                    <th>SL</th>
                    <th>Name</th>
                    <th>PRICE</th>
                    <th>COMPANY</th>
                    <th>FORM</th>
                    <th>GROUP</th>
                    <th>SUBGROUP</th>
                    <th>GENERIC</th>
                    {/* <th>DESCRIPTION</th> */}
                  </tr>
                </thead>
                <tbody>
                  {/* {product.products.map((row, index) => (
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
                      <td>{row.generic && row.generic.name}</td>
                    </tr>
                  ))} */}
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
  );
};

export default SalesPage;
