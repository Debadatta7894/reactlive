import { BrowserRouter,Routes,Route,Link } from "react-router-dom";
import { TutorialLogin } from "./tutorial-login";
import { TutorialHome } from "./tutorial-home";
import { TutorialRegister } from "./tutorial-register";
import { TutorialVideo } from "./tutorial-video";
import { TutorialError } from "./tutorial-error";
import { TutorialManage } from "./tutorial-manage";
import { VideoDetails } from "./Tutorial-details";
import { VideoAdd } from "./add-video";
import { VideoDelete } from "./delet-video";
import { VideoEdit } from "./edit-video";



export function TutorialIndex()
{
    return(
        <div className="container-fluid">
            <BrowserRouter>
            <header className="bg-success p-2 text-center text-white">
                <h1>React Video Tutorial</h1>
            </header>
            <section className="mt-2 row">
                <nav className="col-3">
                    <div>
                        <Link to="home">Home</Link>
                    </div>
                    <div>
                        <Link to="register">Register</Link>
                    </div>
                    <div>
                        <Link to="login">Login</Link>
                    </div>
                    <div>
                        <Link to="video">Video</Link>
                    </div>
                    <div>
                        <Link to="manage">ManageVideo</Link>
                    </div>
                </nav>
                <main className="col-9">
                    <Routes>
                        <Route path="/" element={<TutorialHome/>} />
                        <Route path="home" element={<TutorialHome/>} />
                        <Route path="register" element={<TutorialRegister/>} />
                        <Route path="login" element={<TutorialLogin/>} />
                        <Route path="video" element={<TutorialVideo/>} />
                        <Route path="invalid" element={<TutorialError/>}/>
                        <Route path="/manage" element={<TutorialManage/>}/>
                        <Route path="details/:id" element={<VideoDetails/>}/>
                        <Route path="addvideo" element={<VideoAdd/>}/>
                        <Route path="delete/:id" element={<VideoDelete/>}/>
                        <Route path="edit/:id" element={<VideoEdit/>}/>
                    </Routes>
                </main>
            </section>
            </BrowserRouter>
        </div>
    )
}