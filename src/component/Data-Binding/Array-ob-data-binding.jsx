export function ArrayObjectDataBinding()
{
    var data =[
        {Name:"LG TV",Price:46000.22,Stock:true},
        {Name:"Nike Casuals",Price:4000.88,Stock:true},
        {Name:"Watch",Price:9000.44,Stock:false}
    ]
    return(
        <div className="container-fluid">
          <h2>Product Table</h2>
          <table className="table table-hover">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Stock</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((item)=>
                    <tr key={item.Name}>
                        <td>{item.Name}</td>
                        <td>{item.Price}</td>
                        <td>{(item.Stock==true)?"Available":"Out of Stock"}</td>
                    </tr>
                    )
                }
            </tbody>
          </table>
        </div>
    )
}