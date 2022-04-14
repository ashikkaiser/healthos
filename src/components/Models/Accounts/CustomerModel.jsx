import React, { useState, useEffect } from "react";
import { Row, Col, Button, Label, Input, Modal } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { addCustomer } from "../../../store/actions";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@material-ui/core";

export default function CustomerModal(props) {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    balance: "",
    gender: "",
    mobile: "",
  });

  // eslint-disable-next-line

  // const [subgroup, setSubgroup] = useState(false);
  // eslint-disable-next-line react-hooks/exhaustive-deps

  const dispatch = useDispatch();
  const { Group, Category, Provider, Subgroup, Form, Generic, Unit } =
    useSelector((state) => state);
  const handelSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // dispatch(addCustomer(formData));
  };

  return (
    <div>
      <Modal
        size="lg"
        isOpen={props.open}
        toggle={() => {
          props.onClose();
        }}
        centered={true}
      >
        <form
          className="needs-validation"
          method="post"
          id="tooltipForm"
          onSubmit={(e) => {
            handelSubmit(e);
          }}
        >
          <div className="modal-header">
            <h5 className="modal-title mt-0" id="myLargeModalLabel">
              Add Customer
            </h5>
            <button
              onClick={() => {
                props.onClose();
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
            <div className="row">
              <div className="col-md-6">
                <Label htmlFor="lname">MOBILE</Label>
                <PhoneInput
                  country={"bd"}
                  onlyCountries={["bd"]}
                  inputStyle={{}}
                  // value={this.state.phone}
                  onChange={(mobile) => (formData.mobile = mobile)}
                />
              </div>
              <Col md="6">
                <div className="mb-3 position-relative">
                  <Label htmlFor="lname">FIRST NAME</Label>
                  <Input
                    type="text"
                    className="form-control"
                    id="lname"
                    placeholder="First Name"
                    defaultValue={formData.first_name}
                    onChange={(e) => (formData.first_name = e.target.value)}
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
                    onChange={(e) => (formData.last_name = e.target.value)}
                  />
                </div>
              </Col>
              <Col md="6">
                <div className="mb-3 position-relative">
                  <Label htmlFor="lname">BALANCE</Label>
                  <Input
                    type="text"
                    className="form-control"
                    id="lname"
                    placeholder="Last Name"
                    defaultValue={formData.balance}
                    onChange={(e) => (formData.balance = e.target.value)}
                  />
                </div>
              </Col>
              <Col md="6">
                <div className="mb-3 position-relative">
                  <FormControl component="fieldset">
                    <FormLabel component="legend">Gender</FormLabel>
                    <RadioGroup
                      row
                      aria-label="gender"
                      name="gender1"
                      onChange={(e) => (formData.gender = e.target.value)}
                    >
                      <FormControlLabel
                        value="male"
                        control={<Radio />}
                        label="Male"
                      />
                      <FormControlLabel
                        value="female"
                        control={<Radio />}
                        label="Female"
                      />
                      <FormControlLabel
                        value="others"
                        control={<Radio />}
                        label="Others"
                      />
                    </RadioGroup>
                  </FormControl>
                </div>
              </Col>
            </div>
          </div>

          <div className="modal-footer">
            <Button type="submit" className="btn btn-success">
              {" "}
              Submit{" "}
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
