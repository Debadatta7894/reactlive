import { useReducer } from "react";

let intialState = {count:0};
export function reducer (state,action){
    switch (action.type){
        case "join":
        return{count:state.count + 1}
        case "leave":
        return{count:state.count - 1}    
    }
 }

export function ReducerDemo()
{
    const [state,dispatch] = useReducer(reducer,intialState);

    function handleJoinClick(){
        dispatch({type:'join'});
    }
    function handleLeaveClick(){
        dispatch({type:'leave'});
    }
    return(
        <div className="container-fluid">
            <h3 className="text-primary">Video Streming</h3>
            <div className="bg-info p-4 w-25">
                ... Buffering Video....
            </div>
            <div className="mt-4 mb-4">
               <code>Live count</code> : {state.count} <code>viewing</code>
            </div>
            <div className="mt-4 ">
                <button onClick={handleJoinClick} className="btn btn-success me-2">Join</button>
                <button onClick={handleLeaveClick} className="btn btn-danger">Leave</button>
            </div>
        </div>
    )
}