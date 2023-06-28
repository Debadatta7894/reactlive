import { useState } from "react"

export function LikesCounter(){
    const [counter, setCounter] = useState(1);

    return(
        <div className="container-fluid">
            <h2>Like Counter</h2>
            <a href="home.html">Home</a>
            <div className="mt-3">
                <span data-testid="counter">{counter}</span>
            </div>
        </div>
    )
}