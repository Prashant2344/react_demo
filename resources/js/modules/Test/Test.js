import React, { Fragment, useState } from "react";
import AppLayout from "../../layouts/AppLayout";
import { usePage } from "@inertiajs/inertia-react";
import { useForm, Controller } from "react-hook-form";
import { Inertia } from '@inertiajs/inertia';

const Test = () => {
    const propsData = usePage().props;
    const title = propsData.title;
    const [isFormSubmitting,setIsFormSubmitting] = useState(false);

    const { register, handleSubmit , getValues} = useForm();

    const onSubmit = () => {
        setIsFormSubmitting(true);
        const formData = getValues();
        // debugger
        console.log(formData);
        // if you want to add additional data in form data =>formData.contact_number_country_code = contactNumberCountryCode;
        Inertia.post(route('admin-user-management-store'), formData, {
            onFinish: () => setIsFormSubmitting(false)
        })

        // axiosFetch.post(route('admin-user-management-store'),formData).then(res => {
        //     console.log(res);
        // });
    };

    return (
        <div>
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
                            <form className="form" onSubmit={handleSubmit(onSubmit)}>
                                <div className="row">
                                    <div className="col-md-12 left-side-box">
                                        <div className="company-information">
                                            <div className="row ">
                                                <div className="form-group col-md-12">
                                                    <h5>Company Information</h5>
                                                </div>
                                                <div className="form-group col-md-12">
                                                    <label htmlFor="companyName">company Name :</label>
                                                    <input type="text" {...register("companyName")} className="form-control" placeholder="company Name" />
                                                </div>
                                                <div className="form-group col-md-12">
                                                    <label htmlFor="companyAddress">Print Name:</label>
                                                    <input type="text" {...register("printName")} className="form-control" id="companyAddress" placeholder="Print Name" />
                                                </div>
                                                <div className="form-group col-md-12">
                                                    <label htmlFor="Tel.No">F.Y Beginning Form :</label>
                                                    <input type="text" {...register("date")} className="form-control" id="date" placeholder="Date" />
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
        </div>
    )
}

export default Test