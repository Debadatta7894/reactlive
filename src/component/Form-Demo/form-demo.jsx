

export function FormDemo()
{
    function handleFormSubmit(e){
      e.preventDefault();
      alert("Form Submitted")
    }
    return(
        <div className="container-fluid">
            <h2>Register User</h2>
            <form onSubmit={handleFormSubmit}>
            <dl>
                <dt>User Name</dt>
                <dd><input type="text" name="UserName" /></dd>
                <dt>Age</dt>
                <dd><input type="number" name="Age" /></dd>
                <dt>City</dt>
                <dd>
                    <select name="City">
                        <option>Delhi</option>
                        <option>Hyd</option>
                    </select>
                </dd>
                <dt>Mobile</dt>
                <dd><input type="text"name="Mobile" /></dd>
            </dl>
            <button>Register</button>
            <button>Submit</button>
            <button type="button">Test</button>
            </form>
        </div>
    )
}