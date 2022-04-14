import React, { useState, useEffect } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import {
    Row,
    Col,
    Button,
    Label,
} from "reactstrap"
import { AvForm, AvField } from "availity-reactstrap-validation"
import { useDispatch, useSelector } from 'react-redux';
import { addSubgroup, getGroup } from "../../../store/actions"
import Select from "react-select"

import makeAnimated from 'react-select/animated';
const animatedComponents = makeAnimated();
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="left" ref={ref} {...props} />;
});

export default function ProductProviderModel(props) {
    const [name, setName] = useState("");
    const [description, setDec] = useState("");
    const [selectedGroup, setselectedGroup] = useState(null)
    const [optionGroup, setsoptionGroup] = useState(null)
    const groups = useSelector(state => state.Group.groups)
    const dispatch = useDispatch()
    const handelSubmit = () => {
        const data = { name: name, description: description, edit: props.editeData ? props.editeData._id : false, group_id: selectedGroup.value }
        dispatch(addSubgroup(data))
        props.onClose()
        setName('')
        setDec('')
        setselectedGroup(null)
    }
    useEffect(() => {

        if (props.editeData) {
            const pregroup = groups.find(g => g._id === props.editeData.group_id)
            setName(props.editeData.name)
            setDec(props.editeData.description)
            setselectedGroup({ value: pregroup._id, label: pregroup.name })
        }
        if (groups.length === 0) {
            dispatch(getGroup())
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.editeData])
    useEffect(() => {
        if (groups.length === 0) {
            dispatch(getGroup())
        }

        const formatedGroup = []
        // eslint-disable-next-line react-hooks/exhaustive-deps
        groups.map(group => {
            formatedGroup.push({
                value: group._id,
                label: group.name
            })
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
        setsoptionGroup(formatedGroup)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.open])
    function handleSelectGroup(selectedGroup) {
        setselectedGroup(selectedGroup)
        // console.log(selectedGroup.value)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }
    return (
        <div>
            <Dialog
                open={props.open}
                TransitionComponent={Transition}
                keepMounted
                onClose={props.onClose}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <AvForm className="needs-validation">
                    <DialogTitle id="alert-dialog-slide-title">{props.editeData ? "Edit " : "Add"}{" Product Subgroup"}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-slide-description">

                            <Row>
                                <Col xl="12">
                                    <Row>
                                        <Col md="12">
                                            <div className="mb-3">
                                                <Label htmlFor="name">Name</Label>
                                                <AvField
                                                    name="firstname"
                                                    placeholder="Name"
                                                    type="text"
                                                    errorMessage="Enter form name"
                                                    className="form-control"
                                                    validate={{ required: { value: true } }}
                                                    id="name"
                                                    value={name}
                                                    onChange={(e) => setName(e.target.value)}
                                                />
                                            </div>
                                        </Col>
                                        <Col md="12">
                                            <div className="mb-3">
                                                <div className="mb-3">
                                                    <Label>Group</Label>

                                                    <Select
                                                        components={animatedComponents}
                                                        value={selectedGroup}
                                                        onChange={(w) => {
                                                            handleSelectGroup(w)
                                                        }}
                                                        options={optionGroup}
                                                        classNamePrefix="select2-selection"
                                                    />
                                                </div>
                                            </div>
                                        </Col>
                                        <Col md="12">
                                            <div className="mb-3">
                                                <Label htmlFor="Description">Description</Label>
                                                <AvField
                                                    name="lastname"
                                                    placeholder="Description"
                                                    type="textarea"
                                                    rows="5"
                                                    errorMessage="Enter Description"
                                                    className="form-control"
                                                    validate={{ required: { value: false } }}
                                                    id="Description"
                                                    value={description}
                                                    onChange={(e) => setDec(e.target.value)}
                                                />
                                            </div>
                                        </Col>

                                    </Row>

                                </Col>
                            </Row>


                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={props.onClose} color="primary">
                            Cancel
                        </Button>
                        <Button color="primary" type="submit" onClick={handelSubmit}>
                            Submit
                        </Button>
                    </DialogActions>
                </AvForm>
            </Dialog>
        </div>
    );
}