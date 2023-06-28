
import { useState } from "react";
import "./mouse-over-out.css"


export function MouseOverOut(){
      
    const[Photos] = useState(["images/m1.jpg","images/m2.jpg","images/m3.jpg","images/m4.jpg","images/m5.jpg"]);
       function handleMouseOver(e){
        e.currentTarget.stop();
       }
       function handleMouseOut(e){
        e.currentTarget.start();
       }
    return(
        <div className="container-fluid">
           <div className="mt-4">
            <marquee scrollamount="10" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                {
                 Photos.map(photo=>
                    <img width="100" height="100" className="me-2" key={photo} src={photo} />
                    )   
                }
            </marquee>
           </div>
        </div>
    )
}