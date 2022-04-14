import React, { useState, useEffect } from 'react';

import {
    Row,
    Col,
    Button,
    Label,
    Input,
    Modal
} from "reactstrap"
import { useDispatch } from 'react-redux';
import {
    addSupplier
} from "../../../store/actions"
import "react-datepicker/dist/react-datepicker.css"
import Flatpickr from "react-flatpickr"
import "flatpickr/dist/themes/material_blue.css"

export default function ProductProviderModel(props) {
    const [formData, setFormData] = useState({
        company_name: "",
        contact_person: "",
        contact_person_address: "",
        contact_person_number: "",
        email: "",
        phone: "",
        opening_balance: 0,
        joining_date: "",
    })
    // eslint-disable-next-line

    // eslint-disable-next-line react-hooks/exhaustive-deps

    const dispatch = useDispatch()
    // const { Supplier } = useSelector(state => state)
    const handelSubmit = (e) => {
        e.preventDefault()
        dispatch(addSupplier(formData))
        props.onClose()
        setFormData({
            company_name: "",
            contact_person: "",
            contact_person_address: "",
            contact_person_number: "",
            email: "",
            phone: "",
            opening_balance: "",
            joining_date: "",
        })
    }
    useEffect(() => {
        if (props.editeData) {
            const d = props.editeData
            // d.group.name.toLowerCase() === 'medicine' && setIsNeedGroup(true)
            setFormData({
                company_name: d.company_name,
                contact_person: d.contact_person,
                contact_person_address: d.contact_person_address,
                contact_person_number: d.contact_person_number,
                email: d.email,
                phone: d.phone,
                opening_balance: d.opening_balance,
                joining_date: d.joining_date,
            })

        }
    }, [props.editeData])



    useEffect(() => {
        // eslint-disable-next-line

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.open])

    function formatDate(date) {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();

        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;
        return [day, month, year].join('-');
    }


    return (
        <div>


            <Modal
                size="lg"
                isOpen={props.open}
                toggle={() => {
                    props.onClose()
                }}
                centered={true}
            >
                <form
                    className="needs-validation"
                    method="post"
                    id="tooltipForm"
                    onSubmit={e => {
                        handelSubmit(e)
                    }}
                >
                    <div className="modal-header">
                        <h5
                            className="modal-title mt-0"
                            id="myLargeModalLabel"
                        >
                            {props.editeData?"Edit ":"Add"} Suppliers
                        </h5>
                        <button
                            onClick={() => {
                                props.onClose()
                            }}
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close"
                        >
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">




                        <Row>
                            <Col md="6">
                                <div className="mb-3 position-relative">
                                    <Label htmlFor="name">
                                        REGISTRATION DATE

                                    </Label>
                                    <Flatpickr
                                        className="form-control d-block"
                                        placeholder={formatDate(new Date())}
                                        defaultValue={formData.opening_balance}
                                        options={{
                                            altInput: true,
                                            altFormat: "d-m-Y",
                                            dateFormat: "Y-m-d"
                                        }}
                                        onChange={(e) => formData.joining_date = formatDate(e)}
                                    />
                                </div>
                            </Col>
                            <Col md="6">
                                <div className="mb-3 position-relative">
                                    <Label htmlFor="mobile">MOBILE</Label>
                                    <Input
                                        type="text"
                                        className="form-control"
                                        id="mobile"
                                        placeholder="Mobile"
                                        defaultValue={formData.phone}
                                        onChange={(e) => {
                                            formData.phone = e.target.value

                                        }}
                                    />

                                </div>
                            </Col>

                        </Row>

                        <Row>
                            <Col md="6">
                                <div className="mb-3 position-relative">
                                    <Label htmlFor="email">
                                        EMAIL
                                    </Label>
                                    <Input
                                        type="text"
                                        className="form-control"
                                        id="email"
                                        placeholder="Email"
                                        required
                                        defaultValue={formData.email}
                                        onChange={(e) => formData.email = e.target.value}
                                    />
                                </div>
                            </Col>
                            <Col md="6">
                                <div className="mb-3 position-relative">
                                    <Label htmlFor="opening">OPENING BALANCE</Label>
                                    <Input
                                        type="text"
                                        className="form-control"
                                        id="opening"
                                        placeholder="Opening balance"
                                        defaultValue={formData.opening_balance}
                                        onChange={(e) => formData.opening_balance = e.target.value}
                                    />

                                </div>
                            </Col>

                        </Row>

                        <Row>
                            <Col md="6">
                                <div className="mb-3 position-relative">
                                    <Label htmlFor="company_name">
                                        COMPANY NAME
                                    </Label>
                                    <Input
                                        type="text"
                                        className="form-control"
                                        id="company_name"
                                        placeholder="Company Name"
                                        required
                                        defaultValue={formData.company_name}
                                        onChange={(e) => formData.company_name = e.target.value}
                                    />
                                </div>
                            </Col>
                            <Col md="6">
                                <div className="mb-3 position-relative">
                                    <Label htmlFor="person">CONTACT PERSON</Label>
                                    <Input
                                        type="text"
                                        className="form-control"
                                        id="person"
                                        placeholder="Contact Person"
                                        defaultValue={formData.contact_person}
                                        onChange={(e) => formData.contact_person = e.target.value}
                                    />

                                </div>
                            </Col>

                        </Row>

                        <Row>
                            <Col md="6">
                                <div className="mb-3 position-relative">
                                    <Label htmlFor="cnumber">
                                        CONTACT PERSON NUMBER
                                    </Label>
                                    <Input
                                        type="text"
                                        className="form-control"
                                        id="cnumber"
                                        placeholder="Contact Person Number"
                                        required
                                        defaultValue={formData.contact_person_number}
                                        onChange={(e) => formData.contact_person_number = e.target.value}
                                    />
                                </div>
                            </Col>
                            <Col md="6">
                                <div className="mb-3 position-relative">
                                    <Label htmlFor="address">CONTACT PERSON ADDRESS</Label>
                                    <Input
                                        type="textarea"
                                        className="form-control"
                                        id="address"
                                        placeholder="Contact person Address"
                                        defaultValue={formData.contact_person_address}
                                        onChange={(e) => formData.contact_person_address = e.target.value}
                                    />

                                </div>
                            </Col>

                        </Row>


                    </div>

                    <div className="modal-footer">
                        <Button type="submit" className="btn btn-success" > Submit </Button>
                    </div>
                </form>
            </Modal>




        </div>
    );
}