import React, { useEffect, useState } from "react"

import { Row, Col, Card, CardBody, CardTitle, Table } from "reactstrap"

//Import Breadcrumb
import Breadcrumbs from "../../../components/Common/Breadcrumb"
import "./datatables.scss"
import { getGroup } from "../../../store/actions"

import ProductGroupsModel from "../../../components/Models/Product/ProductGroupsModel"
import { useSelector, useDispatch } from "react-redux"
import {
    Menu,
    Item,
    useContextMenu,
} from "react-contexify";
import "react-contexify/dist/ReactContexify.css";
const ProductGeneric = () => {
    const dispatch = useDispatch()
    const [open, setOpen] = useState(false);
    const [eData, setEData] = useState(false);
    const group = useSelector(state => state.Group)
    const MENU_ID = "menu-idx";
    const { show } = useContextMenu({
        id: MENU_ID
    });
    function handleItemClick({ event, props, triggerEvent, data }) {
        if (props !== undefined) {
            setOpen(true)
            setEData(group.groups.find(x => x._id === props))
        }
    }
    function displayMenu(e) {
        show(e, { props: e.currentTarget.id });
    }
    useEffect(() => {
        dispatch(getGroup())
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
                    <Breadcrumbs title="Products" breadcrumbItem="Product Groups" />
                    <Row>
                        <Col className="col-12">
                            <Card>
                                <CardBody>
                                    <CardTitle>
                                        Product Groups
                                        <div className="float-end">
                                            <div className="mb-3">
                                                <div to="#" onClick={handleClickOpen} className="btn btn-success waves-effect waves-light"><i className="mdi mdi-plus me-2"></i> Add Groups</div>
                                                <ProductGroupsModel open={open} onClose={handleClose} editeData={eData} />
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
                                                {group.groups.map((row, index) => (
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
                                        <Item onClick={handleItemClick}>  Edit </Item>
                                        <Item onClick={handleItemClick}>  Delete </Item>
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

export default ProductGeneric
