import { useState } from "react";
import "./mouse-demo.css";


export function MouseDemo(){

     const[Photos] = useState(["images/m1.jpg","images/m2.jpg","images/m3.jpg","images/m4.jpg","images/m5.jpg"]);
     const[preview,setPreview] = useState("");
     

     function HandleMouseOver(e){
        setPreview(e.target.src);
     }

     return(
        <div className="container-fluid">
          <section className="row mt-2">
            <nav className="col-2">
                 {
                    Photos.map(photo=>
                        <div className="mb-2 p-1 border border-2 border-success" style={{width:'60px'}} key={photo}>
                            <img src={photo} onMouseOver={HandleMouseOver} width="50" height="50"/>
                        </div>
                        )
                 }
            </nav>
            <main className="col-10">
                <img width="300" height="300" className="preview-image" src={preview} />

            </main>
          </section>
        </div>
     )

}