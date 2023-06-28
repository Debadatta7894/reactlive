import { useEffect,useState } from "react";

export function TimerDemo()
{
    const[msg,setMsg] = useState('');
    function Msg1(){
        setMsg('Hello !');
    }
    function Msg2(){
        setMsg('How are you?');
    }
    function Msg3(){
        setMsg('Welcome to React')
    }
    useEffect(()=>{
       setTimeout(Msg1,2000);
       setTimeout(Msg2,5000);
       setTimeout(Msg3,8000);
    },[]);

    return(
        <div className="container-fluid">
            <h1 className="text-center text-primary">{msg}</h1>
        </div>
    )
}