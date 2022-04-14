import React, { useState, useEffect } from 'react';

import {
    Row,
    Col,
    Button,
    Label,
    Input,
    Modal,

} from "reactstrap"
import { useDispatch } from 'react-redux';
import {
    addSupplier
} from "../../../store/actions"
import "react-datepicker/dist/react-datepicker.css"
import Flatpickr from "react-flatpickr"
import "flatpickr/dist/themes/material_blue.css"
import Radio from '@material-ui/core/Radio';
import { FormControl, FormControlLabel, FormLabel, RadioGroup } from '@material-ui/core';
export default function EmployeeModel(props) {
    const [file, setfile] = useState(null)
    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        designation: "",
        joining_date: "",
        registration_number: "",
        dob: "",
        gender: 0,
        email: "",
        phone: "",
        nid: "",
        birth_id: "",
        permanent_address: "",
        present_address: "",
        fathers_name: "",
        mothers_name: "",
        husbands_name: "",
        balance: "",
        remarks: "",
        status: "",
        password: "",
        repassword: "",
    })


    useEffect(() => {
        setFormData(formData)
    }, [setFormData])

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
                        <h5 className="modal-title mt-0" id="myLargeModalLabel" >  {props.editeData ? "Edit " : "Add"} Suppliers </h5>
                        <button
                            onClick={() => props.onClose()}
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close"
                        >
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <Col md="6">
                            <div className="mb-3 position-relative imagehover" style={{
                                minHeight: 200,
                                maxWidth: 200,
                                border: '1px solid',
                                borderColor: 'red',
                                borderStyle: "dashed",
                                backgroundImage: file ? `url(${URL.createObjectURL(file)})` : false,
                                backgroundSize: "200px 200px",

                            }}>
                                {file ? <label className="text-center " style={{ position: "absolute", top: "45%", left: "25%", marginRight: "-50%", transform: 'translate(-50 %, -50 %)', cursor: "pointer", textAlign: "center" }}>Update Picture</label>
                                    :
                                    <label onClick={() => setfile(null)} style={{ position: "absolute", top: "45%", left: "25%", marginRight: "-50%", transform: 'translate(-50 %, -50 %)', cursor: "pointer", textAlign: "center" }}>Upload picture</label>}

                                <input type="file" style={{ position: "relative", width: "100%", height: 200, opacity: 0, zIndex: 2 }} onChange={(e) => setfile(e.target.files[0])} />
                            </div>
                        </Col>


                        <Row>
                            <Col md="6">
                                <div className="mb-3 position-relative">
                                    <Label htmlFor="fname">
                                        FIRST NAME
                                    </Label>
                                    <Input
                                        type="text"
                                        className="form-control"
                                        id="fname"
                                        placeholder="First Name"
                                        required
                                        defaultValue={formData.first_name}
                                        onChange={(e) => formData.first_name = e.target.value}
                                    />
                                </div>
                            </Col>
                            <Col md="6">
                                <div className="mb-3 position-relative">
                                    <Label htmlFor="lname">LAST NAME</Label>
                                    <Input
                                        type="text"
                                        className="form-control"
                                        id="lname"
                                        placeholder="Last Name"
                                        defaultValue={formData.last_name}
                                        onChange={(e) => formData.last_name = e.target.value}
                                    />

                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="6">
                                <div className="mb-3 position-relative">
                                    <Label htmlFor="DESIGNATION">
                                        DESIGNATION
                                    </Label>
                                    <Input
                                        type="text"
                                        className="form-control"
                                        id="DESIGNATION"
                                        placeholder="Designation"
                                        required
                                        defaultValue={formData.designation}
                                        onChange={(e) => formData.designation = e.target.value}
                                    />
                                </div>
                            </Col>
                            <Col md="6">
                                <div className="mb-3 position-relative">
                                    <Label htmlFor="jdate">  JOINING DATE </Label>
                                    <Flatpickr
                                        className="form-control d-block"
                                        placeholder={formatDate(new Date())}
                                        defaultValue={formData.joining_date}
                                        options={{
                                            altInput: true,
                                            altFormat: "d-m-Y",
                                            dateFormat: "Y-m-d"
                                        }}
                                        onChange={(e) => formData.joining_date = formatDate(e)}
                                    />
                                </div>
                            </Col>
                        </Row>



                        <Row>
                            <Col md="6">
                                <div className="mb-3 position-relative">
                                    <Label htmlFor="regno"> REG NO </Label>
                                    <Input
                                        type="text"
                                        className="form-control"
                                        id="regno"
                                        placeholder="Registration Number"
                                        required
                                        defaultValue={formData.registration_number}
                                        onChange={(e) => formData.registration_number = e.target.value}
                                    />
                                </div>
                            </Col>
                            <Col md="6">
                                <div className="mb-3 position-relative">
                                    <Label htmlFor="Degrees">DEGREES</Label>
                                    <Input
                                        type="text"
                                        className="form-control"
                                        id="Degrees"
                                        placeholder="Degrees"
                                        defaultValue={formData.degree}
                                        onChange={(e) => {
                                            formData.degree = e.target.value

                                        }}
                                    />

                                </div>
                            </Col>

                        </Row>

                        <Row>
                            <Col md="6">
                                <div className="mb-3 position-relative">
                                    <Label htmlFor="dobirth">DATE OF BIRTH</Label>
                                    <Flatpickr
                                        className="form-control d-block"
                                        placeholder={formatDate(new Date())}
                                        defaultValue={formData.dob}
                                        options={{
                                            altInput: true,
                                            altFormat: "d-m-Y",
                                            dateFormat: "Y-m-d"
                                        }}
                                        onChange={(e) => formData.dob = formatDate(e)}
                                    />
                                </div>
                            </Col>
                            <Col md="6">
                                <div className="mb-3 position-relative" >
                                    <FormControl component="fieldset">
                                        <FormLabel component="legend">Gender</FormLabel>
                                        <RadioGroup row aria-label="gender" name="gender1" onChange={(e) => console.log(e.target.value)}>
                                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                                            <FormControlLabel value="others" control={<Radio />} label="OTHERS" />
                                        </RadioGroup>
                                    </FormControl>
                                </div>
                            </Col>

                        </Row>

                        <Row>
                            <Col md="6">
                                <div className="mb-3 position-relative">
                                    <Label htmlFor="email"> EMAIL </Label>
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
                                    <Label htmlFor="mobile">MOBILE</Label>
                                    <Input
                                        type="text"
                                        className="form-control"
                                        id="mobile"
                                        placeholder="Mobile"
                                        defaultValue={formData.phone}
                                        onChange={(e) => formData.phone = e.target.value}
                                    />

                                </div>
                            </Col>

                        </Row>

                        <Row>
                            <Col md="6">
                                <div className="mb-3 position-relative">
                                    <Label htmlFor="NID"> NID </Label>
                                    <Input
                                        type="text"
                                        className="form-control"
                                        id="NID"
                                        placeholder="NID"
                                        required
                                        defaultValue={formData.nid}
                                        onChange={(e) => formData.nid = e.target.value}
                                    />
                                </div>
                            </Col>
                            <Col md="6">
                                <div className="mb-3 position-relative">
                                    <Label htmlFor="address">BIRTH ID</Label>
                                    <Input
                                        type="text"
                                        className="form-control"
                                        id="address"
                                        placeholder="Birth ID"
                                        defaultValue={formData.birth_id}
                                        onChange={(e) => formData.birth_id = e.target.value}
                                    />

                                </div>
                            </Col>

                        </Row>
                        <Row>
                            <Col md="6">
                                <div className="mb-3 position-relative">
                                    <Label htmlFor="PERMANENT"> PERMANENT ADDRESS </Label>
                                    <Input
                                        type="textarea"
                                        // rows={}
                                        className="form-control"
                                        id="PERMANENT"
                                        placeholder="NID"
                                        required
                                        defaultValue={formData.permanent_address}
                                        onChange={(e) => formData.permanent_address = e.target.value}
                                    />
                                </div>
                            </Col>
                            <Col md="6">
                                <div className="mb-3 position-relative">
                                    <Label htmlFor="PRESENT">PRESENT ADDRESS</Label>
                                    <Input
                                        type="textarea"
                                        className="form-control"
                                        id="PRESENT"
                                        placeholder="Birth ID"
                                        defaultValue={formData.present_address}
                                        onChange={(e) => formData.present_address = e.target.value}
                                    />

                                </div>
                            </Col>

                        </Row>

                        <Row>
                            <Col md="6">
                                <div className="mb-3 position-relative">
                                    <Label htmlFor="FATHER">FATHER'S NAME</Label>
                                    <Input
                                        type="text"
                                        // rows={}
                                        className="form-control"
                                        id="FATHER"
                                        placeholder="Father's Name"
                                        required
                                        defaultValue={formData.fathers_name}
                                        onChange={(e) => formData.fathers_name = e.target.value}
                                    />
                                </div>
                                <div className="mb-3 position-relative">
                                    <Label htmlFor="SPOUSE">SPOUSE'S NAME</Label>
                                    <Input
                                        type="text"
                                        className="form-control"
                                        id="SPOUSE"
                                        placeholder="Spouse's Name"
                                        defaultValue={formData.mothers_name}
                                        onChange={(e) => formData.mothers_name = e.target.value}
                                    />

                                </div>
                                <div className="mb-3 position-relative">
                                    <Label htmlFor="Balance">BALANCE</Label>
                                    <Input
                                        type="text"
                                        className="form-control"
                                        id="Balance"
                                        placeholder="Balance"
                                        defaultValue={formData.husbands_name}
                                        onChange={(e) => formData.husbands_name = e.target.value}
                                    />

                                </div>
                            </Col>
                            <Col md="6">
                                <div className="mb-3 position-relative">
                                    <Label htmlFor="MOTHER">MOTHER'S NAME</Label>
                                    <Input
                                        type="text"
                                        className="form-control"
                                        id="MOTHER"
                                        placeholder="Mother's Name"
                                        defaultValue={formData.balance}
                                        onChange={(e) => formData.balance = e.target.value}
                                    />

                                </div>
                                <div className="mb-3 position-relative">
                                    <Label htmlFor="REMARKS">REMARKS</Label>
                                    <Input
                                        type="textarea"
                                        rows="5"
                                        className="form-control"
                                        id="REMARKS"
                                        placeholder="Remarks"
                                        defaultValue={formData.remarks}
                                        onChange={(e) => formData.remarks = e.target.value}
                                    />

                                </div>
                            </Col>

                        </Row>


                        <Col xl={12}>
                            <div className="mt-4 mt-lg-0">
                                <h5 className="font-size-14 mb-3">LOG IN ACCESS</h5>
                                <div className="d-flex">
                                    <div className="square-switch">
                                        <input
                                            type="checkbox"
                                            id="square-switch3"
                                            switch="bool"
                                            //   checked={sq3}
                                            onChange={() => {
                                                // setsq3(!sq3)
                                            }}
                                        />
                                        <label
                                            htmlFor="square-switch3"
                                            data-on-label="Yes"
                                            data-off-label="No"
                                        />
                                    </div>
                                </div>
                            </div>
                        </Col>




                        <Row>
                            <Col md="6">
                                <div className="mb-3 position-relative">
                                    <Label htmlFor="PASSWORD">PASSWORD </Label>
                                    <Input
                                        type="password"
                                        className="form-control"
                                        id="PASSWORD"
                                        placeholder="Enter Password"
                                        required
                                        defaultValue={formData.password}
                                        onChange={(e) => formData.password = e.target.value}
                                    />
                                </div>
                            </Col>
                            <Col md="6">
                                <div className="mb-3 position-relative">
                                    <Label htmlFor="CONFIRM">CONFIRM PASSWORD</Label>
                                    <Input
                                        type="password"
                                        className="form-control"
                                        id="CONFIRM"
                                        placeholder="Enter Confirm Password"
                                        defaultValue={formData.repassword}
                                        onChange={(e) => formData.repassword = e.target.value}
                                    />

                                </div>
                            </Col>

                        </Row>

                    </div>

                    <div className="modal-footer">
                        <Button type="submit" className="btn btn-success" > Submit </Button>
                    </div>
                </form >
            </Modal >




        </div >
    );
}