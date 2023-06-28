import { Formik, useFormik } from "formik"


export function FormikValidation()
{
    function UserValidation(formBody)
    {
        var errors = {};
        if(formBody.UserName==""){
            errors.UserName = "User Name Required";
        } else if(formBody.UserName.length<8){
            errors.UserName="User Name too Short min 8 characters required";
        }else{
            errors.UserName = "";
        }

        if(isNaN(formBody.Age)){
            errors.Age = "Age Must be a number"
        }else{
            errors.Age = "";
        }

        if(formBody.City=="-1"){
            errors.City = "Please Select Your City";
        }else{
            errors.City = "";
        }

        if(formBody.Mobile.match(/\+91\d{10}/)){
            errors.Mobile = "";
        }else{
            errors.Mobile = "Invalid Mobile"
        }

        return errors;
    }

    const Formik = useFormik({
        initialValues :{
            "UserName":"",
            "Age":0,
            "City":"",
            "Mobile":""
        },
        validate:UserValidation,
        onSubmit: (values) => {
            alert(JSON.stringify(values));
        }
    })
    return(
        <div className="container-fluid">
           <form onSubmit={Formik.handleSubmit}>
           <h1>Register - Formik Validation</h1>
            <dl>
                <dt>UserName</dt>
                <dd><input type="text" onBlur={Formik.handleBlur} onChange={Formik.handleChange} name="UserName" /></dd>
                <dd className="text-danger">{Formik.errors.UserName}</dd>
                <dt>Age</dt>
                <dd><input type="text"onBlur={Formik.handleBlur} onChange={Formik.handleChange} name="Age" /></dd>
                <dd className="text-danger">{Formik.errors.Age}</dd>
                <dt>City</dt>
                <dd>
                    <select onBlur={Formik.handleBlur} onChange={Formik.handleChange} name="City">
                        <option value="-1">Choose City</option>
                        <option value="Delhi">Delhi</option>
                        <option value="Hyd">Hyd</option>
                    </select>
                </dd>
                <dd className="text-danger">{Formik.errors.City}</dd>
                <dt>Mobile</dt>
                <dd><input type="text" onBlur={Formik.handleBlur} onChange={Formik.handleChange} name="Mobile" /></dd>
                <dd className="text-danger">{Formik.errors.Mobile}</dd>
            </dl>
            <button className="btn btn-warning">Register</button>
           </form>
        </div>
    )
}

