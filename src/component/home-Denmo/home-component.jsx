import { LoginComponent } from "../../Customized-component/login-component";


export function HomeComponent(){
    return(
        <div className="container-fluid">
         <h2>Admin Portal</h2>
        < LoginComponent title="Admin Login" login_id="Your Email" login_type="email" button_text="Login"/>
        <hr />
        <h2>Customer Portal</h2>
        < LoginComponent title="Customer Login" login_id="Your Mobile" login_type="number" button_text="Signin"/>
        </div>
    )
}