import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { FakestoreHome } from "./fakestore-home";
import { FakestoreProduct } from "./fakestore-products";
import { FakestoreDetails } from "./fakestore-details";
import { FakestoreRating } from "./fakestore-rating";




export function FakestoreIndex()
{
    return(
        <div className="container-fluid">
            <BrowserRouter>
            <header>
                <nav>
                    <span><Link to="home">Home</Link></span>
                </nav>
            </header>
            <section className="mt-3">
                <Routes>
                    <Route path="/" element={<FakestoreHome/>}/>
                    <Route path="home" element={<FakestoreHome/>}/>
                    <Route path="products/:catName" element={<FakestoreProduct/>}>
                    <Route path="details/:prodId" element={<FakestoreDetails/>}>
                        <Route path="rating" element={<FakestoreRating/>}/>
                    </Route>
                    </Route>
                    <Route path="*" element={<h2>Not Found.</h2>}/>
                </Routes>
            </section>
            </BrowserRouter>
        </div>
    )
}