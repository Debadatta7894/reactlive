export function NestedDataBinding()
{
    var menu = [
        {Category:"Electronics",Products:["Mobile","Televisions"]},
        {Category:"Footwear",Products:["Casuals","Boots"]}
    ]
    return(
        <div className="container-fluid">
              <h2>Menu</h2>
              <ol>
                {
                    menu.map((item)=>
                    <li key={item.Category}>{item.Category}
                    <ul>
                        {
                            item.Products.map((Product)=>
                            <li key={Product}>{Product}
                            <button className="btn btn-warning"><span className="bi bi-pen-fill">
                                </span></button>
                            </li>
                            )
                        }
                    </ul>
                    </li>
                    )
                }
              </ol>
              <hr />
              <select>
                {
                    menu.map((item)=>
                    <optgroup label={item.Category}>
                           {
                            item.Products.map((Product)=>
                            <option>{Product}</option>
                            )
                           }
                    </optgroup>
                    )
                }
              </select>
        </div>
    )
}