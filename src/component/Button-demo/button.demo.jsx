


export function ButtonDemo()
{
    function OpenWindow(){
        window.open("images/m1.jpg","width=400 height=400");
    }
    return(
        <div className="container-fluid">
           <h2>Double Click</h2>
           <img onDoubleClick={OpenWindow} src="images/m1.jpg" width="100" height="100" />
        </div>
    )
}