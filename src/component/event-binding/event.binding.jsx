export function EventBinding(){


    // function InsertClick(e){
    //     document.write(`
    //     Button Id :${e.target.id}<br>
    //     Button Name :${e.target.name}<br>
    //     Button Value :${e.target.value}<br>
    //     X Position :${e.clientX}<br>
    //     Ctrl Key :${e.ctrlKey}
    //     `);
    // }
    function InsertClick(e){
        for(var property in e.target){
            document.write(`${property}:${typeof e[property]}<br>`);
        }
    }
    return(
        <div className="container-fluid">
            <h2>Event</h2>
            <button id="btnInsert" onClick={InsertClick} name="InsertButton" value="Insert">Insert</button>
        </div>
    )
}