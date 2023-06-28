import { Formik,Form,Field,ErrorMessage } from "formik";
import * as yup from "yup";


export function FormikComponent()
{
    return(
        <div className="container-fluid">
            <h1>Formik Component</h1>
            <Formik
                initialValues={{
                    "UserName":"",
                    "Age":0,
                    "City":"",
                    "Mobile":""
                }}
                onSubmit={
                    (values)=>{
                        alert(JSON.stringify(values));
                    }
                }
                validationSchema={
                    yup.object({
                        "UserName":yup.string().required("Name Required")
                                      .min(8,"Name too Short...")
                                      .max(20,"Name too long..."),
                        "Age":yup.number().required(),
                        "Mobile":yup.string().required().matches(/\+91\d{10}/,"Incalid Mobile")                             
                    })
                }
            >
                {
                    props =>
                    <Form>
                        <dl>
                            <dt>UserName</dt>
                            <dd><Field type="text" name="UserName"/></dd>
                            <dd className="text-warning"><ErrorMessage name="UserName"/></dd>
                            <dt>Age</dt>
                            <dd><Field type="text" name="Age"/></dd>
                            <dd className="text-warning"><ErrorMessage name="Age"/></dd>
                            <dt>City</dt>
                            <dd>
                                <Field as="select" >
                                    <option>Select City</option>
                                    <option>Delhi</option>
                                    <option>Hyd</option>
                                </Field>
                            </dd>
                            <dt>Mobile</dt>
                            <dd><Field type="text" name="Mobile"/></dd>
                            <dd className="text-warning"><ErrorMessage name="Mobile"/></dd>
                        </dl>
                        <button disabled={!props.isValid}>Register</button>
                        <button disabled={!props.dirty}>Save</button>
                    </Form>
                }
            </Formik>
        </div>
    )
}