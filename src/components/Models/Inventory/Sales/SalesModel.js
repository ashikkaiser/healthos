import React, { useState, useEffect } from "react";

import Slide from "@material-ui/core/Slide";
import { Row, Col, Button, Label, Modal } from "reactstrap";
import { AvForm, AvField } from "availity-reactstrap-validation";
import { useDispatch } from "react-redux";
import "react-datepicker/dist/react-datepicker.css";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/material_blue.css";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});

export default function SalesModel(props) {
  const [name, setName] = useState("");
  const [description, setDec] = useState("");

  const dispatch = useDispatch();

  const handelSubmit = () => {
    const data = {
      name: name,
      description: description,
      edit: props.editeData ? props.editeData._id : false,
    };
    // dispatch(addCategory(data));
    props.onClose();
    setName("");
    setDec("");
  };
  useEffect(() => {
    if (props.editeData) {
      setName(props.editeData.name);
      setDec(props.editeData.description);
    }
  }, [props.editeData]);
  function formatDate(date) {
    var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;
    return [day, month, year].join("-");
  }
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
            // handelSubmit(e);
          }}
        >
          <div className="modal-header">
            <h5 className="modal-title mt-0" id="myLargeModalLabel">
              {props.editeData ? "Edit " : "New"}
              {" Sales"}
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
              <Col md="6">
                <div className="mb-3 position-relative">
                  <Label htmlFor="name">DATE</Label>
                  <Flatpickr
                    className="form-control d-block"
                    placeholder={formatDate(new Date())}
                    // defaultValue={formData.opening_balance}
                    options={{
                      altInput: true,
                      altFormat: "d-m-Y",
                      dateFormat: "Y-m-d",
                    }}
                    // onChange={(e) => (formData.joining_date = formatDate(e))}
                  />
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
