import React from "react";



export class PureDemo extends React.Component
{
    constructor(){
        super();
        this.state = {
            products : ["TV","Mobile","Watch"]
        }
    }
    handleLoadClick(){
        alert("Hi");
        this.setState({
            products:["TV","Mobile","Watch","shoes"]
        })
    }
    componentDidUpdate(){
        console.log("Component Will Render on Update");
    }
    render(){
        return(
            <div>
                <h1 className="mt-4">Pure Component <button className="btn btn-success mt-4" onClick={this.handleLoadClick.bind(this)}>Load</button></h1>
                <ol>
                    {
                        this.state.products.map((product)=>
                        <li key={product}>{product}</li>
                        )
                    }
                </ol>
            </div>
        )
    }
}