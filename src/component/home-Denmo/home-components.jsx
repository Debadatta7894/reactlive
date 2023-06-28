
import { useState } from "react"
import { GridComponent } from "../../Customized-component/Grid/grid-component"

export function HomeComponents(){
    const [products] = useState([{Name:"TV", Price:66000.33},{Name:"Mobile", Price:42000.33}]);
    return(
        <div className="container-fluid">
             <GridComponent caption="Employee Table" fields={["First Name", "Last Name", "Salary"]} data={[{'FirstName':'Raj', 'LastName':'Kumar', 'Salary':56000.44},{'FirstName':'Tom', 'LastName':'Hanks','Salary':67000.44}]} />
             <hr />
             <GridComponent caption="Products List" fields={["Name","Price"]} data={products} />
        </div>
    )
}