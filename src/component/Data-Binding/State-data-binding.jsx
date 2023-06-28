import { useState } from "react";

export function StateDataBinding()
{
    const [userName] = useState("LITU");
    const [categories] = useState(["Electronics","Footwear","Fashion"]);
    const [products] = useState([{Name:"LG TV",Price:54000.99},{Name:"Nike Casuals",Price:5000.77}]);
    return(
        <div className="container-fluid">
           <h2>State in React Function Component</h2>
           <p>Hello ! {userName}</p>
           <h2>Categories</h2>
           <ol>
            {
                categories.map((category)=>
                <li key={category}>{category}</li>
                )
            }
           </ol>
           <h2>Product Table</h2>
           <table className="table table-hover">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {
                    products.map((product)=>
                    <tr key={product.Name}>
                      <th>{product.Name}</th>
                      <th>{product.Price}</th>
                    </tr>
                    )
                }
            </tbody>
           </table>
        </div>
    )
}