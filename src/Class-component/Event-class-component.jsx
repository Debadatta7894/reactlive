import React from "react";

export class EventClassComponent extends React.Component
{
    constructor(){
        super();
    }
    handleLoginClick(e){
        alert(`
        Button Id : ${e.target.id}\n
        Button Name :${e.target.name}\n
        X position : ${e.clientX}
        `);
    }
    render(){
        return(
            <React.Fragment>
                <div className=" container-fluid">
                   <button className="btn btn-success mt-4" onClick={this.handleLoginClick} id="btnLogin" name="Login">Login</button>
                </div>
            </React.Fragment>
        )
    }
}