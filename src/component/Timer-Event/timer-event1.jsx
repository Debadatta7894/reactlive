 import { useEffect, useState } from "react";

export function TimeEvent()
{
    const[images,setImages] = useState(["images/m1.jpg","images/m2.jpg","images/m3.jpg","images/m4.jpg","images/m5.jpg",]);
    const[image,setImage] = useState('');
       var count = 0;
       function LoadImages(){
        count++;
        if(count==images.length){
            count=0;
        }else{
            setImage(images[count]);
        }
       }
      useEffect(()=>{
         setInterval(LoadImages,3000)
      },[]);
    return(
        <div className="container-fluid">
         <h1>One+ Mobole</h1>
         <img src={image} width="200" height="200" />
        </div>
    )
}