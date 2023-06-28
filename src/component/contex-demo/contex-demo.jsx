import React, {useState,useContext} from "react";

let UserDetailsContext = React.createContext(null);

export function VideoDemo()
{
    const context = useContext(UserDetailsContext);
    return(
        <div className="bg-danger text-white p-2">
            <h1>Video Component - {context.UserName}</h1>
        </div>
    )
}

export function Home()
{
    const context = useContext(UserDetailsContext);
    return(
        <div className="bg-warning text-dark p-3">
            <h1>Home Component - {context.UserName}</h1>
            <VideoDemo/>
        </div>
    )
}

export function ContexDemo()
{
    const [userName,setUserName] = useState({UserName:''});
    function handleChange(e){
        setUserName({
            UserName:e.target.value
        })
    }
    return(
        <div className="container-fluid bg-dark p-4 m-4 text-white">
            Name : <input type="text" onChange={handleChange} />
            <UserDetailsContext.Provider value={{UserName:userName.UserName}}>
                <h2>Parent Component</h2>
                <Home/>
            </UserDetailsContext.Provider>
        </div>
    )
}