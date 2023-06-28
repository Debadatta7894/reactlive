import { BrowserRouter,Link,Route,Routes, } from "react-router-dom"


export function TutorialComponent()
{
    var now = new Date();
    return(
        <div className="container-fluid">
            <BrowserRouter>
            <h2>Tutorial Home - page Requsted on {now.toLocaleTimeString()} </h2>
            <ol>
                <li><Link to="html">HTML</Link></li>
                <li><Link to="css">CSS</Link></li>
                <li><Link to="js">JavaScript</Link></li>
            </ol>
            <hr size="4" noshade/>
            <Routes>
                <Route path = "html" element = {
                    <div>
                        <h1>HTML</h1>
                        <p>It is a markup language</p>
                    </div>
            }/>
            <Route path = "css" element = {
                    <div>
                        <h1>CSS</h1>
                        <p>It defines style fot <b>HTML</b></p>
                    </div>
            }/>
            <Route path = "js" element = {
                    <div>
                        <h1>JavaScript</h1>
                        <p>It is a language to manipulate <b>DOM.</b></p>
                    </div>
            }/>
            <Route path = "/" element = {
                    <div>
                        <h1>Home</h1>
                        <p>Wel come to Tutorial home.</p>
                    </div>
            }/>
            <Route path = "*" element = {
                    <div>
                        <h1>No Found</h1>
                        <code>Tutorial You Requsted is Not Found</code>
                    </div>
            }/>
            </Routes>
            </BrowserRouter>
        </div>
    )
}