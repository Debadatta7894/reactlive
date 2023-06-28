import { useState } from "react";


export function TouchEvent(){
    const[styleObj,setStyleObj] = useState({'position':'','left':'','top':''})

      
    function handleTouch(e){
        setStyleObj({
            'position':'fixed',
            'left':e.touches[0].clientX +'px',
            'top':e.touches[0].clientY +'px'
        })
    }
    return(
        <div className="container-fluid">
         <img onTouchMove={handleTouch} src="images/m1.jpg" style={styleObj} width="100" height="100" />
        </div> 
    )
}