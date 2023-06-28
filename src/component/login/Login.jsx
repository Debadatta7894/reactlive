import "./Login.css";
import { useCaptcha } from "../../costume-hook/captcha";
import { useEffect } from "react";
export function Login()
{    
    let code = useCaptcha();
    
    return(
        <div className="container-fluid">
        <form>
            <h2 className="">User Login</h2>
            <dl>
                <dt>User Name</dt>
                <dd><input type="text" className="form-control" /></dd>
                <dt>Password</dt>
                <dd><input type="password"className="form-control" /></dd>
                <dt>Verify Code <button className="btn"><span className="bi bi-arrow-clockwise"></span></button></dt>
                <dd>{code}</dd>
            </dl>
            <button className="btn btn-primary w-100">Login</button>
        </form>  
        </div>
    )
}