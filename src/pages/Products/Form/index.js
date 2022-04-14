import React, { useEffect, useState } from "react"
import { Row, Col, Card, CardBody, CardTitle, Table } from "reactstrap"

import Breadcrumbs from "../../../components/Common/Breadcrumb"
import "./datatables.scss"
import { getforms } from "../../../store/actions"
import ProductFormModel from "../../../components/Models/Product/ProductFormModel"
import { useSelector, useDispatch } from "react-redux"
import {  Menu, Item, useContextMenu} from "react-contexify";
import "react-contexify/dist/ReactContexify.css";
const ProductForm = (props) => {
    const dispatch = useDispatch()
    const [open, setOpen] = useState(false);
    const [eData, setEData] = useState(false);
    const forms = useSelector(state => state.Form)
    const MENU_ID = "menu-idx";
    const { show } = useContextMenu({
        id: MENU_ID
    });
    function handleItemClick({ event, props, triggerEvent, data }) {

        if (props !== undefined) {
            setOpen(true)
            setEData(forms.forms.find(x => x._id === props))
        }
    }
    function displayMenu(e) {
        show(e, { props: e.currentTarget.id });
    }
    useEffect(() => {
        dispatch(getforms())
         // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setEData(false)
    };
    return (
        <React.Fragment>
            <div className="page-content">
                <div className="container-fluid">
                    <Breadcrumbs title="Products" breadcrumbItem="Product Form" />
                    <Row>
                        <Col className="col-12">
                            <Card>
                                <CardBody>
                                    <CardTitle>
                                        Product Forms
                                        <div className="float-end">
                                            <div className="mb-3">
                                                <div to="#" onClick={handleClickOpen} className="btn btn-success waves-effect waves-light"><i className="mdi mdi-plus me-2"></i> Add Forms</div>
                                                <ProductFormModel open={open} onClose={handleClose} editeData={eData} />
                                            </div>
                                        </div>

                                    </CardTitle>
                                    <div className="mt-5">
                                        <Table className="table mb-0">
                                            <thead>
                                                <tr>
                                                    <th>SL</th>
                                                    <th>Name</th>
                                                    <th>DESCRIPTION</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {forms.forms.map((row, index) => (
                                                    <tr key={index} id={`${row._id}`} onContextMenu={displayMenu}>
                                                        <td>{index + 1}</td>
                                                        <td>{row.name}</td>
                                                        <td>{row.description}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </Table>
                                    </div>


                                    <Menu id={MENU_ID}>
                                        <Item onClick={handleItemClick}>
                                            Edit
                                        </Item>
                                        <Item onClick={handleItemClick}>
                                            Delete
                                        </Item>
                                    </Menu>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>
        </React.Fragment>
    )
}

export default ProductForm
