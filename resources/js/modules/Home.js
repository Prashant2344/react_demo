import React, { Fragment,useState,useEffect } from "react";
import { Inertia } from '@inertiajs/inertia';
import { Link,usePage } from '@inertiajs/inertia-react';
import AppLayout from "../layouts/AppLayout";
import { MultiSelect } from "react-multi-select-component";
import useDidMountEffect from "../custom-hooks/use-did-mount-effect.js";

function Home() {

    const propsData = usePage().props;
    const title = propsData.title;

    const options = [
        { label: "Grapes 🍇", value: "grapes" },
        { label: "Mango 🥭", value: "mango" },
        { label: "Strawberry 🍓", value: "strawberry", disabled: true },
      ];

    const [selected, setSelected] = useState([]);

    useDidMountEffect(() => {
        console.log("useDidMountEffect");
    },[selected])

    useEffect(() => {
        console.log("useEffect");
    },[selected])

    return (
        <AppLayout>
            <Fragment>
                <div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="breadcrumb">
                                <span className="title-page">{title}</span>
                            </div>
                        </div>
                    </div>
                    <div className="company-form">
                        <form>
                            <div className="row">
                                <div className="col-md-6 left-side-box">
                                    <div className="company-information">
                                        <div className="row ">
                                            <div className="form-group col-md-12">
                                                <h5>Company Information</h5>
                                            </div>
                                            <div className="form-group col-md-12">
                                                <label htmlFor="companyName">company Name :</label>
                                                <input type="text" className="form-control" id="companyName" aria-describedby="emailHelp" placeholder="company Name" />
                                            </div>
                                            <div className="form-group col-md-12">
                                                <label htmlFor="companyAddress">Print Name:</label>
                                                <MultiSelect
                                                    className="form-control"
                                                    options={options}
                                                    value={selected}
                                                    onChange={setSelected}
                                                    labelledBy="Select"
                                                />
                                            </div>
                                            <div className="form-group col-md-12">
                                                <label htmlFor="Tel.No">F.Y Beginning Form :</label>
                                                <input type="text" className="form-control" id="Tel.No" aria-describedby="Tel.No" placeholder="Tel.No" />
                                            </div>
                                            <div className="form-group col-md-12">
                                                <label htmlFor="Tel.No">Book Commencing Form: </label>
                                                <input type="text" className="form-control" id="Tel.No" aria-describedby="Tel.No" placeholder="Tel.No" />
                                            </div>
                                            <div className="form-group col-md-12">
                                                <label htmlFor="uploadimage">Upload Image</label>
                                                <div className="image-setion">
                                                    <div className="image-upload-wrap">
                                                        <input className="file-upload-input" type='file' onChange="readURL(this);" accept="image/*" />
                                                        <div className="drag-text">
                                                            <h3>select Image</h3>
                                                        </div>
                                                    </div>
                                                    <div className="file-upload-content">
                                                        <div className="upload-content">
                                                            <img className="file-upload-image" src="#" alt="your image" />
                                                            <div className="image-title-wrap">
                                                                <button type="button" onClick="removeUpload()" className="remove-image">Remove <span className="image-title">Uploaded Image</span></button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="company-adress-list">
                                            <div className="row ">
                                                <div className="form-group col-md-12">
                                                    <h5>Address </h5>
                                                </div>
                                                <div className="form-group col-md-12">
                                                    <label htmlFor="companyName">Address: </label>
                                                    <input type="text" className="form-control" id="companyName" aria-describedby="emailHelp" placeholder="company Name" />
                                                </div>
                                                <div className="form-group col-md-12">
                                                    <label htmlFor="companyAddress">IT PAN: </label>
                                                    <input type="text" className="form-control" id="companyAddress" placeholder="Company Address" />
                                                </div>
                                                <div className="form-group col-md-12">
                                                    <label htmlFor="Tel.No">Tel No:</label>
                                                    <input type="text" className="form-control" id="Tel.No" aria-describedby="Tel.No" placeholder="Tel.No" />
                                                </div>
                                                <div className="form-group col-md-12">
                                                    <label htmlFor="companyName">ward: </label>
                                                    <input type="text" className="form-control" id="companyName" aria-describedby="emailHelp" placeholder="company Name" />
                                                </div>
                                                <div className="form-group col-md-12">
                                                    <label htmlFor="companyAddress">FAX: </label>
                                                    <input type="text" className="form-control" id="companyAddress" placeholder="Company Address" />
                                                </div>
                                                <div className="form-group col-md-12">
                                                    <label htmlFor="exampleInputEmail1">Email address</label>
                                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 left-side-box">
                                    <div className="company-information">
                                        <div className="row ">
                                            <div className="form-group col-md-12">
                                                <h5>Country/State Information</h5>
                                            </div>
                                            <div className="form-group col-md-12">
                                                <label htmlFor="companyName">company Name: </label>
                                                <input type="text" className="form-control" id="companyName" aria-describedby="emailHelp" placeholder="company Name" />
                                            </div>
                                            <div className="form-group col-md-12">
                                                <label htmlFor="companyAddress">State: </label>
                                                <input type="text" className="form-control" id="companyAddress" placeholder="Company Address" />
                                            </div>
                                            <div className="form-group col-md-12">
                                                <label htmlFor="Tel.No">Date Type :</label>
                                                <input type="date" className="form-control" id="Tel.No" aria-describedby="Tel.No" placeholder="Tel.No" />
                                            </div>
                                        </div>
                                        <div className="company-adress-list">
                                            <div className="row ">
                                                <div className="form-group col-md-12">
                                                    <h5>Currency Information</h5>
                                                </div>
                                                <div className="form-group col-md-12">
                                                    <label htmlFor="companyName">currency Symbol:  </label>
                                                    <input type="text" className="form-control" id="companyName" aria-describedby="emailHelp" placeholder="company Name" />
                                                </div>
                                                <div className="form-group col-md-12">
                                                    <label htmlFor="companyAddress">currency String:  </label>
                                                    <input type="text" className="form-control" id="companyAddress" placeholder="Company Address" />
                                                </div>
                                                <div className="form-group col-md-12">
                                                    <label htmlFor="Tel.No">Currency Sub-String</label>
                                                    <input type="text" className="form-control" id="Tel.No" aria-describedby="Tel.No" placeholder="Tel.No" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="company-adress-list">
                                            <div className="row ">
                                                <div className="form-group col-md-12">
                                                    <h5>VAT/GST Information</h5>
                                                </div>
                                                <div className="form-group col-md-12">
                                                    <label htmlFor="companyName">Enable VAT/GST:  </label>
                                                    <input type="text" className="form-control" id="companyName" aria-describedby="emailHelp" placeholder="company Name" />
                                                </div>
                                                <div className="form-group col-md-12">
                                                    <label htmlFor="companyAddress">TIN:  </label>
                                                    <input type="text" className="form-control" id="companyAddress" placeholder="Company Address" />
                                                </div>
                                                <div className="form-group col-md-12">
                                                    <label htmlFor="Tel.No">CST No.</label>
                                                    <input type="text" className="form-control" id="Tel.No" aria-describedby="Tel.No" placeholder="Tel.No" />
                                                </div>
                                                <div className="form-group col-md-12">
                                                    <label htmlFor="Tel.No">Default Tax Rate.1.</label>
                                                    <input type="text" className="form-control" id="Tel.No" aria-describedby="Tel.No" placeholder="Tel.No" />
                                                </div>
                                                <div className="form-group col-md-12">
                                                    <label htmlFor="Tel.No">Default Tax Rate.2.</label>
                                                    <input type="text" className="form-control" id="Tel.No" aria-describedby="Tel.No" placeholder="Tel.No" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group ml-auto">
                                            <button type="submit" className="btn btn-submit">Submit</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    {/* <h1>Hellos</h1>
                    <Link href={base_url + '/category'}>Category</Link> */}
                </div>
            </Fragment>
        </AppLayout>
    )
}

export default Home