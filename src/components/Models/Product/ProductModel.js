import React, { useState, useEffect } from 'react';
import {
    Row,
    Col,
    Button,
    Label,
    Input,
    Modal
} from "reactstrap"
import { useDispatch, useSelector } from 'react-redux';
import {
    getCategory, getProvider, getSubgroup, getforms,
    getUnit, getGenerics, getGroup, addProduct
} from "../../../store/actions"
import Select from "react-select"
import ProductCategoryModel from "../../Models/Product/ProductCategoryModel"
import ProductFormModel from "../../Models/Product/ProductFormModel"
import ProductGenericModel from "../../Models/Product/ProductGenericModel"
import ProductProvidersModel from "../../Models/Product/ProductProvidersModel"
import ProductSubgroupModel from "../../Models/Product/ProductSubgroupModel"



export default function ProductProviderModel(props) {
    const [categoryOptions, setCategoryOptions] = useState(null);
    const [providerOptions, setProviderOptions] = useState(null);
    const [subGroupOptions, setSubGroupOptions] = useState(null);
    const [formOptions, setformOptions] = useState(null);
    const [genericOptions, setgenericOptions] = useState(null);
    const [unitOptions, setunitOptions] = useState(null);
    const [isNeedGroup, setIsNeedGroup] = useState(false);
    const [categoryModel, setcategoryModel] = useState(false);
    const [providerModel, setproviderModel] = useState(false);
    const [subgroupModel, setsubgroupModel] = useState(false);
    const [formModel, setformModel] = useState(false);
    const [genericModel, setgenericModel] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        strength: "",
        category: "",
        provider: "",
        product_code: "",
        subgroup: "",
        form: "",
        generic: "",
        description: "",
        purchase_price: "",
        sale_price: "",
        primary_unit: "",
        secondary_unit: "",
        conversion_factor: "",
    })






    // eslint-disable-next-line

    // const [subgroup, setSubgroup] = useState(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps

    const dispatch = useDispatch()
    const { Group, Category, Provider, Subgroup, Form, Generic, Unit } = useSelector(state => state)
    const handelSubmit = (e) => {
        e.preventDefault()
        dispatch(addProduct(formData))
    }
    useEffect(() => {
        if (props.editeData) {
            const d = props.editeData
            d.group.name.toLowerCase() === 'medicine' && setIsNeedGroup(true)
            setFormData({
                name: d.name,
                strength: d.strength,
                category: { value: d.category._id, label: d.category.name },
                provider: { value: d.provider._id, label: d.provider.name },
                product_code: d.product_code,
                subgroup: { value: d.subgroup._id, label: d.subgroup.name },
                form: { value: d.form._id, label: d.form.name },
                generic: { value: d.generic._id, label: d.generic.name },
                description: d.description,
                purchase_price: d.purchase_price,
                sale_price: d.sale_price,
                primary_unit: { value: d.primary_unit._id, label: d.primary_unit.name },
                secondary_unit: { value: d.secondary_unit._id, label: d.secondary_unit.name },
                conversion_factor: d.conversion_factor,
            })

        } else {
            setFormData({
                name: "",
                strength: "",
                category: "",
                provider: "",
                product_code: "",
                subgroup: "",
                form: "",
                generic: "",
                description: "",
                purchase_price: "",
                sale_price: "",
                primary_unit: "",
                secondary_unit: "",
                conversion_factor: "",
            })
        }
    }, [props.editeData])


    useEffect(() => {
        // eslint-disable-next-line
        if (Category.categories.length === 0) {
            dispatch(getCategory())
        }
        if (Provider.providers.length === 0) {
            dispatch(getProvider())
        }
        if (Subgroup.subgroups.length === 0) {
            dispatch(getSubgroup())
        }
        if (Form.forms.length === 0) {
            dispatch(getforms())
        }
        if (Generic.generics.length === 0) {
            dispatch(getGenerics())
        }
        if (Unit.units.length === 0) {
            dispatch(getUnit())
        }
        if (Group.groups.length === 0) {
            dispatch(getGroup())
        }

        const formatedCategory = []
        const formatedProvider = []
        const formatedsubGroup = []
        const formatedForm = []
        const formatedGeneric = []
        const formatedUnit = []
        Category.categories.map(group => formatedCategory.push({
            value: group._id,
            label: group.name
        }))
        Provider.providers.map(group => formatedProvider.push({
            value: group._id,
            label: group.name
        }))
        Generic.generics.map(group => formatedGeneric.push({
            value: group._id,
            label: group.name
        }))
        Unit.units.map(group => formatedUnit.push({
            value: group._id,
            label: group.name
        }))
        Form.forms.map(group => formatedForm.push({
            value: group._id,
            label: group.name
        }))
        Group.groups.map((group) => {
            const xgroup = {
                label: group.name,
                options: []
            }
            Subgroup.subgroups.filter(g => g.group_id === group._id).map(gmap => xgroup.options.push({
                value: gmap._id,
                label: gmap.name
            }))
            formatedsubGroup.push(xgroup)
        })
        setCategoryOptions(formatedCategory)
        setProviderOptions(formatedProvider)
        setSubGroupOptions(formatedsubGroup)
        setgenericOptions(formatedGeneric)
        setformOptions(formatedForm)
        setunitOptions(formatedUnit)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.open])


    const handelGroupChange = (e) => {
        //    const subgroup = Subgroup.subgroups.find(x=>x._id===e.value)
        const groupName = Group.groups.find(x => x._id === Subgroup.subgroups.find(x => x._id === e.value).group_id).name
        if (groupName.toLowerCase() === 'medicine') {
            setIsNeedGroup(true)
        } else {
            setIsNeedGroup(false)
        }
        // console.log(groupName)
    }
    // console.log(props.editeData)

    return (
        <div>

            <ProductCategoryModel open={categoryModel} onClose={() => setcategoryModel(false)} editeData={false} />
            <ProductFormModel open={formModel} onClose={() => setformModel(false)} editeData={false} />
            <ProductGenericModel open={genericModel} onClose={() => setgenericModel(false)} editeData={false} />
            <ProductProvidersModel open={providerModel} onClose={() => setproviderModel(false)} editeData={false} />
            <ProductSubgroupModel open={subgroupModel} onClose={() => setsubgroupModel(false)} editeData={false} />
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
                            Large Modal
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
                            <Col md="5">
                                <div className="mb-3 position-relative">
                                    <Label htmlFor="name">
                                        COMMERCIAL NAME
                                    </Label>
                                    <Input
                                        type="text"
                                        className="form-control"
                                        id="name"
                                        placeholder="Commercial Name"
                                        required
                                        defaultValue={formData.name}
                                        onChange={(e) => formData.name = e.target.value}
                                    />
                                </div>
                            </Col>
                            <Col md="3">
                                <div className="mb-3 position-relative">
                                    <Label htmlFor="strength">STRENGTH</Label>
                                    <Input
                                        type="text"
                                        className="form-control"
                                        id="strength"
                                        placeholder="Strength"
                                        defaultValue={formData.strength}
                                        onChange={(e) => formData.strength = e.target.value}
                                    />

                                </div>
                            </Col>
                            <Col md="4">
                                <div className="mb-3 position-relative row">
                                    <Label htmlFor="category">
                                        CATEGORY
                                    </Label>
                                    <div className="col-md-8">
                                        <Select
                                            onChange={(e) => formData.category = e.value}
                                            placeholder="Select Category"
                                            options={categoryOptions}
                                            defaultValue={formData.category}
                                            classNamePrefix="select2-selection"
                                        />
                                    </div>
                                    <div className="col-md-2">
                                        <div className="input-group-prepend">
                                            <span
                                                onClick={() => setcategoryModel(true)}
                                                type="none"
                                                className="input-group-text btn-outline-info btn"
                                                style={{ borderColor: " #d7d6d6" }}
                                            >
                                                <i className="uil-plus"></i>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="6">
                                <div className="mb-3 position-relative row">
                                    <Label htmlFor="validationTooltip03">MANUFACTURING COMPANY</Label>
                                    <div className="col-md-10">
                                        {/* <Select
                                            name="form-field-name"
                                            // value={value}
                                            // onChange={this.handleChange}
                                            options={[
                                                { value: 'one', label: 'One' },
                                                { value: 'two', label: 'Two' },
                                            ]}
                                        /> */}
                                        <Select
                                            clearable={true}
                                            onChange={(e) => formData.provider = e.value}
                                            defaultValue={formData.provider}
                                            placeholder="Select a Company"
                                            options={providerOptions}
                                            classNamePrefix="select2-selection"
                                        />
                                    </div>
                                    <div className="col-md-2">
                                        <div className="input-group-prepend">
                                            <span
                                                onClick={() => setproviderModel(true)}
                                                type="none"
                                                className="input-group-text btn-outline-info btn"
                                                style={{ borderColor: " #d7d6d6" }}
                                            >
                                                <i className="uil-plus"></i>
                                            </span>
                                        </div>
                                    </div>

                                </div>
                                <div className="mb-3 position-relative row">
                                    <Label htmlFor="validationTooltip03">SUBGROUP</Label>
                                    <div className="col-md-10">
                                        <Select
                                            onChange={(e) => {
                                                handelGroupChange(e)
                                                formData.subgroup = e.value
                                            }}
                                            defaultValue={formData.subgroup}
                                            placeholder="Select a Subgroup"
                                            options={subGroupOptions}
                                            classNamePrefix="select2-selection"
                                        />
                                    </div>
                                    <div className="col-md-2">
                                        <div className="input-group-prepend">
                                            <span
                                                onClick={() => setsubgroupModel(true)}
                                                type="none"
                                                className="input-group-text btn-outline-info btn"
                                                style={{ borderColor: " #d7d6d6" }}
                                            >
                                                <i className="uil-plus"></i>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                {isNeedGroup && (
                                    <div className="mb-3 position-relative row" >
                                        <Label htmlFor="validationTooltip03">GENERIC</Label>
                                        <div className="col-md-10">
                                            <Select
                                                onChange={(e) => formData.generic = e.value}
                                                placeholder="Select a Generic"
                                                defaultValue={formData.generic}
                                                options={genericOptions}
                                                classNamePrefix="select2-selection"
                                            />
                                        </div>
                                        <div className="col-md-2">
                                            <div className="input-group-prepend">
                                                <span
                                                    onClick={() => setgenericModel(true)}
                                                    type="none"
                                                    className="input-group-text btn-outline-info btn"
                                                    style={{ borderColor: " #d7d6d6" }}
                                                >
                                                    <i className="uil-plus"></i>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                )}


                                <div className="mb-3 position-relative row">
                                    <div className="col-md-6" style={{ display: "flex", alignItems: "center" }}>
                                        <Label htmlFor="p_price">PURCHASE PRICE</Label>
                                    </div>
                                    <div className="col-md-6">
                                        <Input
                                            type="text"
                                            className="form-control"
                                            id="p_price"
                                            defaultValue={formData.purchase_price}
                                            placeholder="Purchase Price"
                                            onChange={(e) => formData.purchase_price = e.target.value}
                                        />
                                    </div>
                                </div>
                                <div className="mb-3 position-relative row">
                                    <div className="col-md-6" style={{ display: "flex", alignItems: "center" }}>
                                        <Label htmlFor="s_price">SALES PRICE</Label>
                                    </div>
                                    <div className="col-md-6">
                                        <Input
                                            type="text"
                                            className="form-control"
                                            id="s_price"
                                            placeholder="Sales Price"
                                            defaultValue={formData.sale_price}
                                            onChange={(e) => formData.sale_price = e.target.value}
                                        />
                                    </div>
                                </div>

                            </Col>
                            <Col md="6">
                                <div className="mb-3 position-relative">
                                    <Label htmlFor="code">CODE</Label>
                                    <Input
                                        type="text"
                                        className="form-control"
                                        id="code"
                                        placeholder="State"
                                        defaultValue={formData.product_code}
                                        onChange={(e) => formData.product_code = e.target.value}
                                    />

                                </div>
                                {isNeedGroup && (
                                    <div className="mb-3 position-relative row">
                                        <Label htmlFor="code">FORM</Label>
                                        <div className="col-md-10">
                                            <Select
                                                onChange={(e) => formData.form = e.value}
                                                placeholder="Select a Form"
                                                options={formOptions}
                                                defaultValue={formData.form}
                                                classNamePrefix="select2-selection"
                                            />
                                        </div>
                                        <div className="col-md-2">
                                            <div className="input-group-prepend">
                                                <span
                                                    onClick={() => setformModel(true)}
                                                    type="none"
                                                    className="input-group-text btn-outline-info btn"
                                                    style={{ borderColor: " #d7d6d6" }}
                                                >
                                                    <i className="uil-plus"></i>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                )}
                                <div className="mb-3 position-relative">
                                    <Label htmlFor="DESCRIPTION">DESCRIPTION</Label>
                                    <Input
                                        type="textarea"
                                        rows="6"
                                        className="form-control"
                                        id="DESCRIPTION"
                                        defaultValue={formData.description}
                                        placeholder="State"
                                        onChange={(e) => formData.description = e.target.value}
                                    />

                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="4">
                                <div className="mb-3 position-relative">
                                    <Label htmlFor="validationTooltip03">PRIMARY UNIT</Label>
                                    <Select
                                        // value={selectedGroup}
                                        onChange={(e) => formData.primary_unit = e.value}
                                        placeholder="Select a Unit"
                                        options={unitOptions}
                                        defaultValue={formData.primary_unit}
                                        classNamePrefix="select2-selection"
                                    />
                                </div>
                            </Col>
                            <Col md="4">
                                <div className="mb-3 position-relative">
                                    <Label htmlFor="validationTooltip03">SECONDARY UNIT</Label>
                                    <Select
                                        // value={selectedGroup}
                                        onChange={(e) => formData.secondary_unit = e.value}
                                        defaultValue={formData.secondary_unit}
                                        placeholder="Select a Unit"
                                        options={unitOptions}
                                        classNamePrefix="select2-selection"
                                    />
                                </div>
                            </Col>
                            <Col md="4">
                                <div className="mb-3 position-relative">
                                    <Label htmlFor="conv_factor">CONVERSION FACTOR</Label>
                                    <Input
                                        type="text"
                                        className="form-control"
                                        id="conv_factor"
                                        defaultValue={formData.conversion_factor}
                                        placeholder="Conversion Factor"
                                        onChange={(e) => formData.conversion_factor = e.target.value}
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