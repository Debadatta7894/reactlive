import { useEffect, useState } from "react";


export function ProgressBar(){
    const[status,setStatus] = useState(1);
    const[textContainer,setTextContainer] = useState({display:'none'});
    const[imgContainer,setImgContainer] = useState({display:'none'});
    const[progressValue,setProgressValue] = useState(1);

       var count = 1;
       function Loading(){
        if(count==100){
            setImgContainer({
                display:'block'
            });
            setTextContainer({
                display:'none'
            })
        }else{
            count++;
            setProgressValue(count);
            setStatus(count);
        }
       }
       function handleLoadClick(){
        setTextContainer({
            display:'block'
        })
        setInterval(Loading,100);
       }
       useEffect(()=>{

       },[])
    
     return(
        <div className="container-fluid">
        <button  className="  btn mt-2 btn-primary" onClick={handleLoadClick}>Load Image</button>
        <div className="d-flex justify-content-center align-items-center" style={{height:'500px'}}>
             <div className="text-center" style={textContainer}>
                 <progress min="1" max="100" value={progressValue}></progress>
                 <p>{status} %</p>
                 <p>Loading</p>
             </div>
             <div style={imgContainer}>
                 <img src="images/s1.jpg.jpg" width="400" height="600"/>
             </div>
        </div>
     </div>
     )

}