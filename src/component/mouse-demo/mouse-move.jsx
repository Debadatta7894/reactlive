import { useState } from "react";
import "./mouse-move.css";

export function MouseMove(){

const[styleObject,setStyleObject]=useState({'position':'','top':'', 'left':''});


function handleMouseMove(e){
    setStyleObject({
        'position':'fixed',
        'left':e.clientX + 'px',
        'top':e.clientY +'px'
    })
}

    return(
        <div onMouseMove={handleMouseMove}>
            <div style={{height:'1000px'}}>
              <p>move your mouse pointer to test.
                X = {styleObject.left} Y = {styleObject.top}
              </p>
              <br />
            </div>
            <img src="images\FLG.glf.gif" width="50" height="50" style={styleObject} />
        </div>
    )
}