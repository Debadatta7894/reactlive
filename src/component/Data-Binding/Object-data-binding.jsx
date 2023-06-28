export function ObjectDataBinding()
{
    var product ={
        "id" : 1,
        "name" : "Samsung TV",
        "price" : 45000.99,
        "stock" : false
    }
    return(
        <div className="container-fluid">
         <h2>Product Details</h2>
         <dl>
            <dt>Product Id</dt>
            <dd>{product.id}</dd>
            <dt>Product Name</dt>
            <dd>{product.name}</dd>
            <dt>Product Price</dt>
            <dd>{product.price}</dd>
            <dt>Product Stock</dt>
            <dd>{(product.stock==true)?"Available":"Out of Stock"}</dd>
         </dl>
        </div>
    )
}